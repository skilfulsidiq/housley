<template>
  <div>
       <form id="regForm" class="form-tab">
                  <div class="heading">
                    <h1 class="big-font green bold">How much can I Afford</h1>
                    <p class="sub-title color1">
                      Calculate the home loan you qualify for, and how much
                      you can expect to pay monthly on your home loan
                      repayments.
                    </p>
                  </div>
                  <div class="input-group mb-3">
                    <span
                      class="input-group-text color1"
                      id="inputGroup-sizing-default"
                      >₦</span
                    >
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      value="$ 27,000,000.00"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                  <div class="q-radio">
                    <p class="name color1">Do you have Additional Income?</p>
                    <div class="modal-radios flex flex-wrap">
                      <p class="mr-radio">
                        <input
                          type="radio"
                          id="incomeYes"
                          name="incomeYes"
                          checked
                        />
                        <label class="color1 xsm-font" for="incomeYes"
                          >Yes I do</label
                        >
                      </p>
                      <p>
                        <input type="radio" id="incomeNo" name="incomeNo" />
                        <label class="color1 xsm-font" for="incomeNo"
                          >No I do not</label
                        >
                      </p>
                    </div>
                  </div>

                  <div class="input-group mb-3">
                    <span
                      class="input-group-text color1"
                      id="inputGroup-sizing-default"
                      >₦</span
                    >
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      value="$ 27,000,000.00"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                  <div class="q-radio">
                    <p class="name color1">
                      Do you have other Loan Obligations?
                    </p>
                    <div class="modal-radios flex flex-wrap">
                      <p class="mr-radio">
                        <input
                          type="radio"
                          id="obligationsYes"
                          name="obligationsYes"
                          checked
                        />
                        <label class="color1 xsm-font" for="obligationsYes"
                          >Yes I do</label
                        >
                      </p>
                      <p>
                        <input
                          type="radio"
                          id="obligationsNo"
                          name="obligationsNo"
                        />
                        <label class="color1 xsm-font" for="obligationsNo"
                          >No I do not</label
                        >
                      </p>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <span
                      class="input-group-text color1"
                      id="inputGroup-sizing-default"
                      >₦</span
                    >
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      value="$ 27,000,000.00"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <span
                      class="input-group-text color1"
                      id="inputGroup-sizing-default"
                      ><img src="/img/date.png" alt="date"
                    /></span>
                    <input
                      type="text"
                      value="27/03/1989"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                  <div class="q-radio">
                    <p class="name color1">
                      Are you borrowing with a Partner?
                    </p>
                    <div class="modal-radios flex flex-wrap">
                      <p class="mr-radio">
                        <input
                          type="radio"
                          id="partnerYes"
                          name="partnerYes"
                          checked
                        />
                        <label class="color1 xsm-font" for="partnerYes"
                          >Yes, with Partner</label
                        >
                      </p>
                      <p>
                        <input type="radio" id="partnerNo" name="partnerNo" />
                        <label class="color1 xsm-font" for="partnerNo"
                          >No, I am Borrowing Alone</label
                        >
                      </p>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <span
                      class="input-group-text color1"
                      id="inputGroup-sizing-default"
                      >₦</span
                    >
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      value="$ 27,000,000.00"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                  <div class="q-radio">
                    <p class="name color1">
                      How long do you want this Loan for?
                    </p>
                  </div>
                  <div ref="range_wrap" class="range-wrap flex">
                    <input v-model="form.loan_tenure"
                      class="range"
                      type="range"
                      :min="min_range"
                      :max="max_range"
                      step="1"
                    />
                    <p class="min color1 abs-value">{{min}}&nbsp; Yrs </p>
                    <p class="max color1 abs-value">{{max}}&nbsp; Yrs</p>

                    <div class="flex bubbled">
                      <output class="color1 bubble"></output
                      ><span> &nbsp; Years</span>
                    </div>
                  </div>

                  <div class="input-group input-group-select2 mb-5 mt-70" v-if="showLocation">
                    <span
                      class="input-group-text color1"
                      id="inputGroup-sizing-default"
                      ><img
                        src="/img/home/header/location.svg"
                        alt="location"
                    /></span>
                    <div class="select select-modal2">
                      <select id="location">
                        <option value="Lagos">Lagos</option>
                        <option value="Abia">Abia</option>
                        <option value="Ogun">Ogun</option>
                      </select>
                      <span class="focus"></span>
                    </div>
                  </div>


                <div class="continue">
                     <slot name="button"></slot>

                </div>





        </form>
  </div>
</template>
<script>
import Vue from 'vue';
// import RangeSlider from '../form/RangeSlider.vue';
import FormMixin from '@/mixins/form_mixin'/*  */
import CalculatorMixin from '@/mixins/calculator_mixin'/*  */
import rangeMixin from "@/mixins/range"

import { required, email, minLength, sameAs,requiredIf,numeric } from "vuelidate/lib/validators";
const too_young = (value, vm) =>{
    let today = new Date();
    let birthday = new Date(value);
    let age = today.getFullYear() - birthday.getFullYear();
    console.log('age: '+age)
    if(age<=21){
        return false;
    }
    return true;
};
export default {
  mixins:[FormMixin,CalculatorMixin,rangeMixin],
    name:"AffordabilityForm",
    props:{
        inputBg:{type:String,default:'#fff'},
        formType:{type:Boolean,default:false},
        showLocation:{type:Boolean,default:false}
    },
    data(){
        return{
          min_range: 1,
          max_range: 30,
          submitted:false,
          form:{
              monthly_net_pay:'',
              have_additional:'',
              additional_income:'',
              have_existing_obligation:'',
              outstanding_loans:'',
              have_co_borrower:'',
              co_borrower_monthly_income:'',
              dob:'',
              loan_tenure:'5',
              location:'',
              age:''
          },


        }
    },
    validations: {
        form: {
            monthly_net_pay: { required},
            dob: { required,too_young },
            have_additional: { required },
            have_existing_obligation: { required },
            have_co_borrower: { required },
            loan_tenure: { required },
            additional_income: { required: requiredIf((form) =>form.have_additional==1)},
            outstanding_loans: { required: requiredIf((form) =>form.have_existing_obligation==1)},
            co_borrower_monthly_income: { required: requiredIf((form) =>form.have_co_borrower==1)},
            // email: { required, email },
            // password: { required, minLength: minLength(6) },
            // confirmPassword: { required, sameAsPassword: sameAs('password') }
        }
    },
    watch:{
        'form.monthly_net_pay':function(val){
           const result = this.formatToCommaSeperated(val);
          //  Vue.nextTick(() => (this.strin.monthly_net_income = result));
        },
        'form.dob':function(v){
         this.form.age = this.calculateAge(v);
        this.max_range =  this.calculateMaxTenure(this.form.age);
        // this.setBubble()
        this.form.loan_tenure = this.max_range;
        },
        'form.loan_tenure':function(val){
            // this.setitUp()
        },
    },
    computed:{

       monthly_income:{
            get() {
              let r = this.formatToCommaSeperated(this.form.monthly_net_pay);
              return r;
            },
            set(val) {
              this.form.monthly_net_pay=val;

            }
       },
       additional_income:{
            get() {
              let r = this.formatToCommaSeperated(this.form.additional_income);
              // console.log(r);
              return r;
            },
            set(val) {
              this.form.additional_income=val;

            }
       },
       outstanding_loans:{
            get() {
              let r = this.formatToCommaSeperated(this.form.outstanding_loans);
              // console.log(r);
              return r;
            },
            set(val) {
              this.form.outstanding_loans=val;

            }
       },
       co_borrower:{
            get() {
              let r = this.formatToCommaSeperated(this.form.co_borrower_monthly_income);
              // console.log(r);
              return r;
            },
            set(val) {
              this.form.co_borrower_monthly_income=val;

            }
       },


    },
    methods:{

      submitFromModal(){
          this.submitted=true
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
                this.$store.dispatch("saveAffordabilityFormAction",this.form)
        this.$store.dispatch("calculateAffordabilityAction",this.form).then((r)=>{
          this.processStepFunction(true,false);
          this.$nuxt.$emit('open-affordability-modal',false);

          if(this.$route.name != 'FilterProperties'){
              this.$router.push({name:'FilterProperties'});
          }
          });

      },
  //
      submitAffordability(){
            this.submitted=true
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
           this.$store.dispatch("saveAffordabilityFormAction",this.form)
          this.$store.dispatch("calculateAffordabilityAction",this.form).then((r)=>{
             this.processStepFunction(true,false);
           this.$nuxt.$emit('open-affordability-modal',false);
            this.$store.dispatch("formStepAction",2);
          });




        },
        // getUserAffordability(){
        //   // let data = {monthly_net_pay:this.form.monthly_net_pay,age:this.form.age,dob:this.form.dob,}
        //   this.$store.dispatch("calculateAffordabilityAction",this.form).then((r)=>{

        //   });
        // }
    },
    created(){

        this.$nuxt.$on('submitAffordability',(t)=>{
          this.submitAffordability();
        })
        this.$nuxt.$on('submitModalAffordability',(t)=>{
          this.submitFromModal();
        })
    },
    mounted(){
         this.setitUp();
    }
}
</script>

<style lang="scss" scoped>

</style>
