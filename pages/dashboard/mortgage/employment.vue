<template>
  <div>
       <v-form ref="employment">
         <v-row >
        <v-col class="col-12" md="6">
            <div class="mg-top">
                    <v-text-field :rules="[rules.required]" label="Employer Name" outlined v-model="personal_form.employer_name"  ></v-text-field>
            </div>
        </v-col>
          <v-col class="col-12" md="6">
              <div class="mg-top">
                    <v-text-field :rules="[rules.required,rules.email]" label="Employer Email Address" type="email" outlined v-model="personal_form.employer_email"  ></v-text-field>
              </div>
        </v-col>
         <v-col class="col-12" md="6">
                 <div class="mg-top">
                  <v-select  v-model="personal_form.employment_state"
                  label="Employment State"
                  item-text="name"
                  item-value="name"
                  :items="allStates"
                  outlined
                  ></v-select>
                  </div>
        </v-col>
          <v-col class="col-12" md="6">
              <div class="mg-top">
              <v-text-field :rules="[rules.required]" label="Employer Address" outlined v-model="personal_form.employer_address"  ></v-text-field>
              </div>
        </v-col>
          <v-col class="col-12" md="6">
              <div class="mg-top">
              <v-text-field :rules="[rules.required,rules.main_phone]" label="Employer's Phone no" type="Tel" outlined v-model="personal_form.employer_phone"  ></v-text-field>
              </div>
        </v-col>
          <v-col class="col-12" md="6">
              <div class="mg-top">
              <v-text-field :rules="[rules.required]" label="Present Position" outlined v-model="personal_form.employment_present_position"  ></v-text-field>
              </div>
        </v-col>

        <v-col class="col-12" md="6">
              <div class="mg-top">
              <v-text-field :rules="[rules.required]" type="number" :min="1" label="Years of Experience at Current Employment" outlined v-model="personal_form.work_experience"  ></v-text-field>
              </div>
        </v-col>
          <v-col class="col-12" md="6">
              <div class="mg-top">
              <v-select
              label="Has your Employment be confirmed"
              item-text="text"
              item-value="value"
              :items="yesNoOption"
              outlined v-model="personal_form.employment_is_confirmed"


              ></v-select>
              </div>
        </v-col>
      </v-row>
       </v-form>
  </div>
</template>

<script>
 import general_mixin from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
import mortgage_mixin from '@/mixins/mortgage_mixin'
  export default {
    layout:'mortgage',
     mixins:[general_mixin,form_mixin,mortgage_mixin],
    data(){
        return{
          next_form_step:''
        }
      },
      computed:{
      },
      methods:{

        submitThirdProfileForm(){
            // this.$nextTick(function () {

            // })
          if(!this.$refs.employment.validate()){
              return;
          }
          this.appLoading(true);
          this.$store.dispatch("profile/savePersonalAndEmploymentDataAction",this.personal_form).then((res)=>{
             this.appLoading(false);
              this.goMortgageNextStep(4);
               this.$nuxt.$emit('submit_third_mortgage_form',false);
              //  this.$refs.profileform.resetValidation();
              // this.goNextFormStep('profiling');
              this.$router.push(this.next_form_step)
          }).catch(err=>{
             this.appLoading(false);
          })



        },
        prefillForm(){
          let r = this.$store.state.auth.user;
          this.mapIncomingDataToForm(this.personal_form, r);

        },
    },
    created(){
       this.prefillForm();
          this.$store.commit("mortgage/GO_TO_STEP", 3);
    },
    mounted(){

      this.$nuxt.$on('submit_third_mortgage_form',(param)=>{
        if(param.status){
            if(this.$refs.employment){
                this.submitThirdProfileForm();
            }
            this.next_form_step = param.next;

        }


      })

    },
    unmounted() {
      this.$refs.employment.reset();
    },
  }
</script>

<style lang="scss" scoped>

</style>
