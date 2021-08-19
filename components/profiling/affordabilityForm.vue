<template>
  <div>
      <v-card outlined class="pa-8 givme_mb">
       <v-form ref="affordabilityform" >
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field v-model="total_pay"
                    outlined
                    label="Annual income? (₦)"
                    suffix="Annual"
                    :rules="[rules.required]"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field v-model="monthly_income"
                    outlined
                    label=" Monthly net salary? (₦)"
                    suffix="Monthly"
                    :rules="[rules.required]"
                ></v-text-field>
            </v-col>
             <v-col cols="12" md="6">
                <v-select v-model="form.have_equity"
                     item-value="value"
                    item-text="text"
                    :items="yesNoOption"
                    label="Do you have equity?"
                    outlined
                    :rules="[rules.required]"
                ></v-select>
            </v-col>
            <v-col cols="12" md="6" v-if="showEquityValue">
                <v-text-field v-model="down_payment"
                    outlined
                    label="Down payment ? (₦)"

                    :rules="form.have_equity==1?[rules.required]:false"
                ></v-text-field>
            </v-col>
             <v-col cols="12" md="6">
                <v-text-field v-model="expenses"
                    outlined
                    label="Monthly Expenses (₦)"
                    suffix="Monthly"
                ></v-text-field>
            </v-col>
             <v-col cols="12" md="6">
                <v-select v-model="form.have_existing_obligation"
                    item-value="value"
                    item-text="text"
                    :items="yesNoOption"

                    label="Do you have existing loan?"
                    outlined
                    :rules="[rules.required]"
                ></v-select>
            </v-col>
              <v-col cols="12" md="6">
                 <v-select    v-model="form.payment_option"
                    :items="financeOptions"
                    item-value="id"
                    item-text="option"
                    cached
                    outlinede-items
                    :rules="[rules.required]"
                    label="Payment Option"
                    clearable
                    outlined
                ></v-select>

            </v-col>
        </v-row>
      </v-form>
      </v-card>
  </div>
</template>

<script>
import general_mixin from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
  export default {
    mixins:[general_mixin,form_mixin],
      data(){
        return{
          form:{
                monthly_net_pay:"",
                total_annual_pay:"",
                monthly_expenses:"",
                payment_option:"",
                have_equity:"",
                down_payment:"",
                have_existing_obligation:""
            },

        }
      },
      computed:{
        showEquityValue(){
            if(this.form.have_equity==1){
                return true;
            }
            return false

        },
        monthly_income:{
          get(){
            return this.formatCurrency(this.form.monthly_net_pay);
          },
          set(v){
            this.form.monthly_net_pay = this.clearCommas(v);
          }
        },
        total_pay:{
          get(){
            return this.formatCurrency(this.form.total_annual_pay);
          },
          set(v){
            this.form.total_annual_pay = this.clearCommas(v);
          }
        },
        down_payment:{
          get(){
            return this.formatCurrency(this.form.down_payment);
          },
          set(v){
            this.form.down_payment = this.clearCommas(v);
          }
        },
        expenses:{
          get(){
            return this.formatCurrency(this.form.monthly_expenses);
          },
          set(v){
            this.form.monthly_expenses = this.clearCommas(v);
          }
        }
      },
      methods:{
        prefillForm(){
          let r = this.$store.state.auth.user;
          this.mapIncomingDataToForm(this.form, r);
        },
        submitForm(){
          if(!this.$refs.affordabilityform.validate()){
            return;
          }
          this.$store.dispatch("profile/calculateAffordabilityAction",this.form).then((res)=>{
            this.goNextStep(4);
          });
        }
      },
      created(){
        this.prefillForm();
        this.$nuxt.$on("submit_affordability_form",(param)=>{
          if(param){
            this.submitForm();
          }
        })
      }
  }
</script>

<style lang="scss" scoped>

</style>
