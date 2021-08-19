<template>
  <div>
       <v-form ref="finance">
         <v-row >
        <v-col class="col-12" md="6">
            <div class="mg-top">
                <v-text-field :rules="[rules.required]" label="Annual Pay" outlined v-model="total_pay"  ></v-text-field>
            </div>
        </v-col>
          <v-col class="col-12" md="6">
              <div class="mg-top">
                    <v-text-field :rules="[rules.required]" label="Monthly Net Pay"  outlined v-model="monthly_income" disabled  ></v-text-field>
              </div>
        </v-col>
         <v-col class="col-12" md="6">
                 <div class="mg-top">
                   <v-text-field :rules="[rules.required]" label="Monthly Gross Pay"  outlined v-model="gross_income"  ></v-text-field>
                  </div>
        </v-col>
          <v-col class="col-12" md="6">
              <div class="mg-top">
              <v-text-field :rules="[rules.required]" disabled label="Max Loanable Amount" outlined v-model="loanable_amount"  ></v-text-field>
              </div>
        </v-col>
         </v-row>
         <div class="calculator-area">
             <v-row>
             <v-col class="col-12" md="6">
              <div class="">
              <v-text-field :rules="[rules.required]" readonly label="Property Value" outlined v-model="property_value"  ></v-text-field>
              </div>
        </v-col>
          <v-col class="col-12" md="6">
              <div class="">
              <v-text-field  label="Loan Amount" readonly outlined v-model="loan_amount"  ></v-text-field>
              </div>
        </v-col>
          <v-col class="col-12" md="6">


              <div class="">
                    <!-- <label class='form-control-label mt-top'>Equity Contribution</label> -->
                   <v-slider
                     hint="Down payment Percentage"
                     persistent-hint
                      v-model="down_rate"
                      color="accent"
                      track-color="grey"
                      thumb-color="accent"
                      thumb-label="always"
                      :max="max_range"
                      :min="min_range"
                    >
                      <template v-slot:append>
                        <span> {{max}}%</span>

                      </template>
                      <template v-slot:prepend>
                        <span>{{min}}%</span>
                      </template>
                    </v-slider>

              </div>
        </v-col>
          <v-col class="col-12" md="6">
              <div class="mg-top">
              <v-text-field :rules="[rules.required]"  label="Down Payment" outlined v-model="down_payment"  ></v-text-field>
              </div>
        </v-col>

          </v-row>
         </div>

       </v-form>
  </div>
</template>

<script>
 import general_mixin from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
import mortgage_mixin from '@/mixins/mortgage_mixin'
// import "vue-range-slider/dist/vue-range-slider.css";
  export default {
    layout:'mortgage',
     mixins:[general_mixin,form_mixin,mortgage_mixin],
    data(){
        return{
          next_form_step:'',
          min_range:10,
          max_range:90,
          resultType:'',
          down_rate:'',
          max_loan_amount:0,
           form:{
              down_rate:'',
              property_value:'',
              loan_amount:'',
              down_payment:'',
              property_info:'',
              property_address:'',
              property_name:'',
              property_title:'',
              type:'mortgage'

            }
        }
      },
      watch:{
        down_rate:function(val){
           this.reCalculateDownPayment(val);
        }
      },
      computed:{
        rate:{
          get(){
            return this.down_rate+" %";
          },
          set(v){
            this.down_rate=v;
          }
        },
          property_value: {
              get() {
                return this.formatCurrency(this.form.property_value);
              },
              set(v) {
                this.form.property_value = this.clearCommas(v);
              }
           },
           loan_amount: {
              get() {
                return this.formatCurrency(this.form.loan_amount);
              },
              set(v) {
                this.form.loan_amount = this.clearCommas(v);
              }
           },

           down_payment: {
              get() {
                return this.formatCurrency(this.form.down_payment);
              },
              set(v) {
                this.form.down_payment = this.clearCommas(v);
              }
           },
      },
      methods:{

        submitFourProfileForm(){
            // this.$nextTick(function () {

            // })
          if(!this.$refs.finance.validate()){
              return;
          }
          this.appLoading(true);
            let info = {
              property_name:this.checkValueExist(this.property_request.property.property_name),
              property_bedroom:this.checkValueExist(this.property_request.property_bedroom),
              property_bathroom:this.checkValueExist(this.property_request.property_bathroom),
              property_address:this.checkValueExist(this.property_request.property.property_full_address),
              property_doc_title:this.checkValueExist(this.property_request.property.property_doc_title),
              property_type:this.checkValueExist(this.property_request.property_type.name)
            }
          this.form.property_info = info;
          this.form.property_address=info.property_address
          this.form.property_name= (info.property_name)?info.property_name: info.property_type
          // this.form.property_type =
          this.form.property_title=info.property_doc_title
          console.log(this.form);
          this.$store.dispatch("mortgage/applyForMortgageAction",this.form).then((res)=>{
             this.appLoading(false);
              this.goMortgageNextStep(5);
               this.$nuxt.$emit('submit_fourth_mortgage_form',false);
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
         calculateInitialDownPayment(){
          // let store_form = this. $store.state.calculator_module.form;
          let max_loan_amount = this.personal_form.loanable_amount;
          let property_value = this.property_request.property_value;

          this.form.property_value = property_value;
          this.max_loan_amount = max_loan_amount;
          //get the ten percentage and 90%;
          let ten_percentage  = (property_value*0.1).toFixed(0);
          let ninty_percentage = (property_value*0.9).toFixed(0);
          let calculated_loan_amount=0;
          let calculated_down_payment=0;
          //if affordabile amount is less then 90% property
          if(max_loan_amount >= ninty_percentage){
              calculated_loan_amount= ninty_percentage
            calculated_down_payment= ten_percentage;
          }else{
            // let r = ((this.max_loan_amount/property_value)*100).toFixed(0);
             calculated_loan_amount = max_loan_amount;
            calculated_down_payment =property_value - max_loan_amount;
          }
          this.form.loan_amount = calculated_loan_amount;
          this.form.down_payment = calculated_down_payment
          console.log('loan amount:',this.loan_amount)
             /*get the calculated down_payment rate and
                the min range and the current down_rate
              */
          let r = Math.trunc(((this.form.down_payment/property_value)*100));
            console.log("rrr:"+r)

          if(r > this.max_range){
              this.max_range = 100;

          }
          this.min_range = r;
          this.down_rate = r;

        },
        reCalculateDownPayment(value){
          let rate = value/100;
          let max_loan_amount = this.personal_form.loanable_amount;
           let property_value = this.form.property_value;
          let ten_percentage  = (this.form.property_value*0.1).toFixed(0);
          let ninty_percentage = (property_value*0.9).toFixed(0);
          let new_down_payment = (rate * property_value).toFixed(0);
           let new_loan_amount =0;
          if(property_value - new_down_payment >= max_loan_amount){
            new_loan_amount = max_loan_amount;

          }
          else if(max_loan_amount >= property_value){
            new_loan_amount = (property_value-new_down_payment).toFixed(0);
            // this.personal_form.down_payment = ten_percentage
          }
          else{
             new_loan_amount = (property_value-new_down_payment).toFixed(0);
          }
          console.log("new_loan:",new_loan_amount)
          this.form.loan_amount = new_loan_amount;
          this.form.down_payment = new_down_payment;

          // let r = Math.trunc(((this.personal_form.down_payment/property_value)*100));
          // console.log("new_rate: "+r)
            //  this.down_rate = r;
          //  if( new_loan_amount >= max_loan_amount){
          //     this.personal_form.loan_amount = max_loan_amount;
          //     this.personal_form.down_payment = property_value - max_loan_amount;
          //     let r = ((this.max_loan_amount/property_value)*100).toFixed(0);
          //     this.min_range = r;
          //     this.down_rate = r;
          // }else{
          //   this.personal_form.loan_amount = new_loan_amount;
          //   this.personal_form.down_payment = property_value - new_loan_amount;;
          //   let r = ((this.new_loan_amount/property_value)*100).toFixed(0);
          //     // this.min_range = r;
          //     // this.down_rate = r;
          // }
          console.log("d: "+new_down_payment);
          console.log("l: "+new_loan_amount);
          console.log('loan amount:',this.personal_form.loan_amount)
        }
    },
    created(){
       this.prefillForm();
       if(this.property_request){
         this.personal_form.property_value = this.property_request.property_value
       }
          this.$store.commit("mortgage/GO_TO_STEP", 4);
          this.calculateInitialDownPayment()
    },
    mounted(){

      this.$nuxt.$on('submit_fourth_mortgage_form',(param)=>{
        if(param.status){
            if(this.$refs.finance){
                this.submitFourProfileForm();
            }
            this.next_form_step = param.next;

        }


      })

    },
    unmounted() {
      this.$refs.finance.reset();
    },
  }
</script>

<style lang="scss" scoped>

.theme--light.v-slider .v-slider__track-background, .theme--light.v-slider .v-slider__track-fill, .theme--light.v-slider .v-slider__thumb {
    height:4px;
  }

.calculator-area{
  border:1px solid $dashboard_color;
  padding:1em;
}
</style>
