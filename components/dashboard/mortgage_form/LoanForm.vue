<template>
  <div class="row">
    <div class="col-md-6 col-xs-12">

        <label class="form_one_label custom-field one">
            <input class="form_one_input" readonly type="text" placeholder=" " v-model="total_pay"/>
          <span class="placeholder2">Total Annual Income</span>
          <!-- <div v-if="submitted && !$v.form.next_of_kin_name.required" class="error">
            <small class="error-message">name is required</small>
          </div> -->
        </label>
    </div>
    <div class="col-md-6 col-xs-12">
      <label class="form_one_label custom-field one">
            <input class="form_one_input" readonly type="text" placeholder=" " v-model="monthly_income"/>
          <span class="placeholder2">Monthly Net Pay</span>

        </label>
    </div>
    <!-- <div class="col-md-6 col-xs-12">
       <label class="form_one_label custom-field one">
            <input class="form_one_input"  type="text" placeholder=" " v-model="gross_income"/>
          <span class="placeholder2">Monthly Gross Income</span>
          <div v-if="submitted && !$v.monthly_gross_pay.required" class="error">
            <small class="error-message">Monthly Gross Income is required</small>
          </div>
        </label>
    </div> -->
    <div class="col-md-6 col-xs-12">
      <label class="form_one_label custom-field one">
            <input class="form_one_input" readonly type="text" placeholder=" " v-model="loanable_amount"/>
          <span class="placeholder2">Maximum Loanable Amount</span>

        </label>
    </div>
    <div class="col-md-6 col-xs-12">
      <label class="form_one_label custom-field one">
            <input class="form_one_input" readonly type="text" placeholder=" " v-model="property_value"/>
          <span class="placeholder2">Property Value</span>

        </label>
    </div>
    <div class="col-md-12 col-xs-12">
      <label class="form_one_label custom-field one">
            <input class="form_one_input" readonly type="text" placeholder=" " v-model="loan_amount"/>
          <span class="placeholder2">Loan Amount</span>

        </label>
    </div>
    <div class="col-md-12 col-xs-12">
      <label class="form_one_label custom-field one">
            <input class="form_one_input" readonly type="text" placeholder=" " v-model="down_payment"/>
          <span class="placeholder2">Down Payment</span>

        </label>
    </div>
    <div class="col-md-12 col-xs-12 mt-4">
         <label for="" class="form_one_label px-3">Down Payment Percentage</label>
        <div class="range-slider px-3">

          <div id="tooltip" ref="tooltip" class="px-3"></div>
          <input
          ref="range"
            id="range"
            type="range"
            step="1"
            v-model="down_rate"
            :min="min_range"
            :max="max_range"
          />
          <div class="minmax">
            <span class="mm">{{min_range}}</span>
            <span class="mm max">{{max_range}}</span>
          </div>
        </div>
    </div>

  </div>
</template>

<script>
 import general_mixin from '@/mixins/general_mixin'
   import {optional} from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
import mortgage_mixin from '@/mixins/mortgage_mixin'
import store_mixin from '@/mixins/store_mixin'
import { required, email,minLength,requiredIf,numeric} from "vuelidate/lib/validators";
  export default {
    layout:'mortgage',
     mixins:[general_mixin,form_mixin,mortgage_mixin,store_mixin],
    data(){
        return{
          next_form_step:'',

          min_range:10,
          max_range:90,
          resultType:'',
          down_rate:10,
          max_loan_amount:0,
          submitted:false,
           form:{
              down_rate:'',
              property_value:'',
              loan_amount:'',
              down_payment:'',
              property_info:'',
              property_address:'',
              property_name:'',
              property_title:'',
              type:'mortgage',
              loan_tenure:''

            },
            monthly_gross_pay:''
        }
      },
      validations:{
          monthly_gross_pay:{required}
      },
      watch:{
        down_rate:function(val){
          this.setRangeInput();
           this.reCalculateDownPayment(val);
        },

      },
      computed:{
          property_request(){
            return this.$store.state.dashboard.property_request;
          },
           getPersonalForm(){
             return this.$store.state.profile.profile;
           },

           monthly_income: {
                 get() {
                   return this.formatCurrency(this.getPersonalForm.monthly_net_pay);
                 },
                 set(v) {
                   this.personal_form.monthly_net_pay = this.clearCommas(v);
                 }
           },
          //  gross_income: {
          //     get() {
          //       return this.formatCurrency(this.monthly_gross_pay);
          //     },
          //     set(v) {
          //       this.monthly_gross_pay = this.clearCommas(v);
          //     }
          //  },
           total_pay: {
              get() {
                return this.formatCurrency(this.getPersonalForm.total_annual_pay);
              },
              set(v) {
                this.getPersonalForm.total_annual_pay = this.clearCommas(v);
              }
           },
            loanable_amount: {
              get() {
                return this.formatCurrency(this.getPersonalForm.loanable_amount);
              },
              set(v) {
                this.getPersonalForm.loanable_amount = this.clearCommas(v);
              }
            },
            expenses: {
              get() {
                return this.formatCurrency(this.getPersonalForm.monthly_expenses);
              },
              set(v) {
                this.getPersonalForm.monthly_expenses = this.clearCommas(v);
              }
            },
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
                // return this.formatCurrency(this.form.down_payment);
              },
              set(v) {
                this.form.down_payment = this.clearCommas(v);
              }
           },
      },
      methods:{
        setRangeInput(){
             let range = this.$refs.range;
           let bubble = document.getElementById('tooltip')
          const newValue = Number(
                   ((this.down_rate - this.min_range) * 100) / (this.max_range - this.min_range)
                 ),
                 newPosition = 16 - newValue * 0.32;
               bubble.innerHTML = `<span>${this.down_rate}%</span>`;
               bubble.style.left = `calc(${newValue}% + (${newPosition}px))`;
               document.documentElement.style.setProperty(
                 '--range-progress',
                 `calc(${newValue}% + (${newPosition}px))`
               );
         },
        submitFourProfileForm(){

          if(this.user.payment_option){
               this.form.type=this.user.payment_option
          }

          // this.$store.commit("profile/PREFILL_PERSONAL_FORM",{monthly_gross_pay:this.monthly_gross_pay})
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
          this.form.loan_tenure = this.user.loan_tenure
           this.mortgageLoading(true);
          this.$store.dispatch("mortgage/applyForMortgageAction",this.form).then((res)=>{
             this.mortgageLoading(false);
              let d = res.data;
              let mort_data={id:d.id,app_ref:d.app_ref,type:d.type,list:d.checklist}


               this.$nuxt.$emit('submit_fourth_mortgage_form',false);
              //  this.$store.commit("profile/HAVE_APPLY",0);
               this.$nuxt.$emit('apply_mortgage',false);
               console.log("mort",mort_data);
               this.$nuxt.$emit('mortgage_slug',mort_data);
               return this.$router.push("/dashboard/checklist")

              //  this.$refs.profileform.resetValidation();
              // this.goNextFormStep('profiling');
              // this.$router.push(this.next_form_step)
          }).catch(err=>{
             this.mortgageLoading(false);
          })



        },
        prefillForm(){
          let r = this.$store.state.auth.user;
          // this.gro
          // this.mapIncomingDataToForm(this.personal_form, r);

        },
        calculateInitialDownPayment(){
          // let store_form = this. $store.state.calculator_module.form;
          let max_loan_amount = this.clearCommas(this.loanable_amount);
          let property_value = this.property_request.property_value;
           let calculated_loan_amount=0;
          let calculated_down_payment=0;

          this.form.property_value = property_value;
          this.max_loan_amount = max_loan_amount;
          //get the ten percentage and 90%;
          let ten_percentage  = (property_value*0.1).toFixed(0);
          let ninty_percentage = (property_value*0.9).toFixed(0);

            // console.log('down amount:::',max_loan_amount)
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
          let max_loan_amount = this.loanable_amount;
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
          console.log('loan amount:',this.loan_amount)
        }
    },
    created(){
      //  this.prefillForm();

       if(this.property_request){
         this.form.property_value = this.property_request.property_value
       }
          this.$store.commit("mortgage/GO_TO_STEP", 4);
       this.calculateInitialDownPayment();
    },
    mounted(){

      this.setRangeInput();
      this.$nuxt.$on('submit_fourth_mortgage_form',(param)=>{
        if(param){
            // if(this.$refs.finance){
                this.submitFourProfileForm();
            // }
            // this.next_form_step = param.next;

        }


      })

    },
    unmounted() {
      this.$refs.finance.reset();
    },
  }
</script>

<style lang="scss" scoped>
.range-slider {
  margin-top:3.5rem;
}
.minmax{
    display: flex;
    justify-content: space-between;
    // position: absolute;
    top: 2rem;

  }
  .mm{
     font-family: Poppins;
    width: 3rem;
    // text-align: center;
    color: #333;
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    padding: 3px 5px;
    // background-color: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  .max{
    text-align: right;
  }
</style>
