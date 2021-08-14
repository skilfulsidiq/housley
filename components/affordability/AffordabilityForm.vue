<template>
  <div>
       <form id="regForm" class="form-tab">
                  <div class="heading" v-if="showLocation">
                    <h1 class="big-font green bold">How much can I Afford</h1>
                    <p class="sub-title color1">
                      Calculate the home loan you qualify for, and how much
                      you can expect to pay monthly on your home loan
                      repayments.
                    </p>
                  </div>
                  <div class="form-group">
                     <label class="color1 xsm-font" for="incomeYes" >Monthly Net income</label >
                      <div class="input-group mb-3">
                    <span
                      class="input-group-text color1"
                      id="inputGroup-sizing-default"
                      >₦</span
                    >
                    <input
                      type="text" v-model="monthly_income"
                      class="form-control test-form" :class="{'is-invalid': submitted && $v.form.monthly_net_pay.$error }"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />

                  </div>
                  <div v-if="submitted && !$v.form.monthly_net_pay.required" class="form-error">Monthly income is required</div>
                  </div>

                  <div class="q-radio">
                    <p class="name color1">Do you have Additional Income?</p>
                    <div class="modal-radios flex flex-wrap">
                      <p class="mr-radio">
                        <input  v-model="form.have_additional" value="1"
                          type="radio"
                          id="incomeYes"
                          checked
                          name="additional"
                        />
                        <label class="color1 xsm-font" for="incomeYes"
                          >Yes I do</label
                        >
                      </p>
                      <p>
                        <input type="radio" id="incomeNo" name="additional" v-model="form.have_additional" value="0"/>
                        <label class="color1 xsm-font" for="incomeNo"
                          >No I do not</label
                        >
                      </p>
                    </div>
                     <div v-if="submitted && !$v.form.have_additional.required" class="form-error">Select an option</div>
                  </div>

                  <div class="form-group" v-show="form.have_additional==1">
                      <label class="color1 xsm-font" for="incomeYes" >Additional income</label >
                    <div class="input-group mb-3">
                    <span
                      class="input-group-text color1"
                      id="inputGroup-sizing-default"
                      >₦</span
                    >
                    <input v-model="additional_income"
                        :class="{'is-invalid': submitted && $v.form.additional_income.$error }"
                      type="text"
                      class="form-control test-form"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                   <div v-if="submitted && !$v.form.additional_income.required" class="form-error">Additional income is required</div>
                  </div>
                  <div class="q-radio">
                    <p class="name color1">
                      Do you have other Loan Obligations?
                    </p>
                    <div class="modal-radios flex flex-wrap">
                      <p class="mr-radio">
                        <input
                           v-model="form.have_existing_obligation"  value="1"
                          type="radio"
                          id="obligationsYes"
                          name="obligationsYes"

                        />
                        <label class="color1 xsm-font" for="obligationsYes"
                          >Yes I do</label
                        >
                      </p>
                      <p>
                        <input
                           v-model="form.have_existing_obligation"  value="0"
                          type="radio" checked
                          id="obligationsNo"
                          name="obligationsNo"
                        />
                        <label class="color1 xsm-font" for="obligationsNo"
                          >No I do not</label
                        >
                      </p>
                    </div>
                     <div v-if="submitted && !$v.form.have_existing_obligation.required" class="form-error">Select an option</div>
                  </div>
                  <div class="form-group" v-show="form.have_existing_obligation==1">
                     <label class="color1 xsm-font" for="incomeYes" >Outstanding Loan value</label >
                       <div class="input-group mb-3">
                          <span
                            class="input-group-text color1"
                            id="inputGroup-sizing-default"
                            >₦</span
                          >
                          <input
                            type="text"
                            class="form-control test-form"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            v-model="outstanding_loans"
                                      :class="{ 'is-invalid': submitted && $v.form.outstanding_loans.$error }"
                          />
                        </div>
                   <div v-if="submitted && !$v.form.outstanding_loans.required" class="form-error">Outstanding Loan is required</div>
                  </div>
                  <div class="q-radio">
                    <p class="name color1">
                      Are you borrowing with a Partner?
                    </p>
                    <div class="modal-radios flex flex-wrap">
                      <p class="mr-radio">
                        <input v-model="form.have_co_borrower" value="1"
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
                        <input type="radio" id="partnerNo" name="partnerNo" v-model="form.have_co_borrower"
                                        value="0" />
                        <label class="color1 xsm-font" for="partnerNo"
                          >No, I am Borrowing Alone</label
                        >
                      </p>
                    </div>
                     <div v-if="submitted && !$v.form.have_co_borrower.required" class="form-error">Select an option</div>
                  </div>
                  <div class="form-group" v-show="form.have_co_borrower==1">
                       <label class="color1 xsm-font" for="incomeYes" >Co Borrower Monthly income</label >
                         <div class="input-group mb-3">
                    <span
                      class="input-group-text color1"
                      id="inputGroup-sizing-default"
                      >₦</span
                    >
                    <input
                      type="text"
                      class="form-control test-form"
                      aria-label="Sizing example input"
                       v-model="co_borrower"
                                  :class="{ 'is-invalid': submitted && $v.form.co_borrower_monthly_income.$error }"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                  <div v-if="submitted && !$v.form.co_borrower_monthly_income.required" class="form-error">Co Borrower Monthly income is required</div>
                  </div>
                  <div class="form-group">
                     <label class="color1 xsm-font" for="incomeYes" >Date of Birth</label >
                       <div class="input-group mb-3">
                    <span
                      class="input-group-text color1"
                      id="inputGroup-sizing-default"
                      ><img src="/img/date.png" alt="date"
                    /></span>
                    <input @blur="$v.form.dob.$touch()"
                      type="date"
                      class="form-control test-form"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                      :class="{ 'is-invalid': submitted && $v.form.dob.$error }"
                                v-model="form.dob"
                    />
                  </div>
                   <div v-if="submitted && !$v.form.dob.required" class="form-error">Date of birth is required</div>
                        <div v-if="submitted && !$v.form.dob.too_young" class="form-error">You are not 18 yrs +</div>
                  </div>





                  <div class="q-radio">
                    <p class="name color1">
                      How long do you want this Loan for?
                    </p>
                  </div>
                  <!-- <div ref="range_wrap" class="range-wrap flex">
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
                      ><span> &nbsp;Years</span>
                    </div>
                  </div> -->
                      <range-slider class="slider" :min="min_range" :max="max_range" step="1" v-model="form.loan_tenure">
                                    <template slot="knob">
                                        <div class="knobby">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="40" height="40">
                                            <path
                                            fill="#CDD8C3"
                                            fill-rule="evenodd"
                                            d="M9.864 20c5.243-5.195 7.864-9.24 7.864-12.136A7.863 7.863 0 009.864 0 7.863 7.863 0 002 7.864C2 10.759 4.621 14.804 9.864 20z"
                                            ></path>
                                            <text x="10" y="10" fill="currentColor" text-anchor="middle">{{ form.loan_tenure + ' yrs' }}</text>
                                        </svg>
                                        </div>
                                    </template>
                                </range-slider>
                                <div class="range-value d-flex justify-content-between">
                                        <span>{{min}} </span>
                                        <span>{{max}} </span>
                                </div>
                  <div class="form-group mt-5" v-if="showLocation">
                          <label class="color1 xsm-font" for="incomeYes" >Preferred Property Location</label >
                            <div class="input-group mb-3">
                          <span
                              class="input-group-text color1"
                              id="inputGroup-sizing-default"
                              ><img
                                src="/img/home/header/location.svg"
                                alt="location"
                            /></span>
                            <input v-model="form.location"
                              type="text"
                              class="form-control"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-default"
                            />
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
import RangeSlider from "vue-range-slider";
import "vue-range-slider/dist/vue-range-slider.css";
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
  components:{RangeSlider},
  mixins:[FormMixin,CalculatorMixin,rangeMixin],
    name:"AffordabilityForm",
    props:{
        inputBg:{type:String,default:'#fff'},
        formType:{type:Boolean,default:false},
        showLocation:{type:Boolean,default:false},
    },
    data(){
        return{
          min_range: 1,
          max_range: 30,
          submitted:false,
          form:{
              monthly_net_pay:'',
              have_additional:'0',
              additional_income:'',
              have_existing_obligation:'0',
              outstanding_loans:'',
              have_co_borrower:'0',
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
          // this.setitUp()
        this.form.loan_tenure = this.max_range;
        },
        'form.loan_tenure':function(val){
            // this.setitUp()
        },
        // 'step':function(){
        //   window.scrollTo(20,20)
        // }
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
                this.$store.dispatch("calculator/saveAffordabilityFormAction",this.form)
                this.$store.dispatch("calculator/calculateAffordabilityAction",this.form).then((r)=>{
                    this.processStepFunction(true,false);
                    // this.$store.dispatch("calculator/formStepAction",2);
                    this.$nuxt.$emit('open-affordability-modal',false);
                      this.clearForm();
                    if(this.$route.name != 'properties-affordability'){
                        this.$router.push({name:'properties-affordability'});
                    }
          });

      },
      clearForm(){
        this.form={
              monthly_net_pay:'',
              have_additional:'0',
              additional_income:'',
              have_existing_obligation:'0',
              outstanding_loans:'',
              have_co_borrower:'0',
              co_borrower_monthly_income:'',
              dob:'',
              loan_tenure:'5',
              location:'',
              age:''
          }
      },

      submitAffordability(){
            this.submitted=true
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
           this.$store.dispatch("calculator/saveAffordabilityFormAction",this.form)
          this.$store.dispatch("calculator/calculateAffordabilityAction",this.form).then((r)=>{
             this.processStepFunction(true,false);
            //  this.clearForm();
          //  this.$nuxt.$emit('open-affordability-modal',false);
            this.$store.dispatch("calculator/formStepAction",2);
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
        // this.setitUp();
        // this.initRangeEl()
    },
    mounted(){

         this.processStepFunction(false,false);
         this.mapIncomingDataToForm(this.form,this.$store.state.calculator.form)
        //  this.form = {...}
    }
}
</script>

<style lang="scss" scoped>

  .test-form{
    height: 51px !important;
  }
</style>
