<template>
  <div>
      <div class="taby gridy" style="display:grid">
                  <div class="grid-child">
                    <label for="propertyValue">Property Value</label>
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
                        v-model="property_value"
                        disabled
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                  <div class="grid-child">
                    <label for="propertyValue">Loan Amount</label>
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
                       v-model="loan_amount" readonly
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                  <div class="grid-child">
                    <label for="propertyValue">Equity Contribution</label>
                    <!-- <div class="range-wrap flex">
                      <input
                        class="range"
                        type="range"
                        :min="min_range" :max="max_range"
                        step="1"
                        v-model="down_rate"
                      />
                      <p class="min color1 abs-value">{{min}}</p>
                      <p class="max color1 abs-value">{{max}}</p>

                      <div class="flex bubbled">
                        <output class="color1 bubble"></output><span>%</span>
                      </div>
                    </div> -->
                       <range-slider class="range-slider" :min="min_range" :max="max_range" step="1" v-model="down_rate">
                                            <template slot="knob">
                                              <div class="knobby">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                                                  <path
                                                    fill="#CDD8C3"
                                                    fill-rule="evenodd"
                                                    d="M9.864 20c5.243-5.195 7.864-9.24 7.864-12.136A7.863 7.863 0 009.864 0 7.863 7.863 0 002 7.864C2 10.759 4.621 14.804 9.864 20z"
                                                  ></path>
                                                  <text x="10" y="10" fill="currentColor" text-anchor="middle">{{ down_rate + '%' }}</text>
                                                </svg>
                                              </div>
                                            </template>
                                          </range-slider>
                                          <div class="range-value d-flex justify-content-between">
                                                  <span>{{min}} </span>
                                                  <span>{{max}} </span>
                                          </div>
                  </div>
                  <div class="grid-child">
                    <label for="propertyValue"
                      >Equity Contribution Amount</label
                    >
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
                        v-model="down_payment"
                        readonly
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                </div>
  </div>
</template>

<script>
import FormMixin from '@/mixins/form_mixin'/*  */
import CalculatorMixin from '@/mixins/calculator_mixin'/*  */
import rangeMixin from "@/mixins/range"
import RangeSlider from "vue-range-slider";
import "vue-range-slider/dist/vue-range-slider.css";
  export default {
      components:{RangeSlider},
     mixins:[FormMixin,CalculatorMixin,rangeMixin],
    data(){
        return{
            min_range:10,
            max_range:90,
            resultType:'%',
            down_rate:5,
            max_loan_amount:0,
            form:{
              down_rate:'',
              property_value:'',
              loan_amount:'',
              down_payment:'',

            }

        }
    },

    watch:{

    'down_rate':function(val){
        // this.setBubble();
        // this.setitUp()
        this.reCalculateDownPayment(val);
    }
    },
    computed:{
        selectedProperty:function(){
             let s = this. $store.state.property.selectedProperty;
             return s.property_price;
        },
        store_form(){
          let t = this.$store.state.calculator.form;
          return t;
        },
        selectedStatus(){
          return this.$store.state.calculator.propertyIsSelected;
        },
        property_value: {
          get() {
              let v =  this.formatToCommaSeperated(this.form.property_value);
            return v;
          },
          set(val) {
              this.form.property_value = val;

          }
        },
        loan_amount: {
          get() {
              let v =this.formatToCommaSeperated(this.form.loan_amount);
            return v;
          },
          set(val) {
            this.form.loan_amount = val;
            // this.$store.commit('loan_amount', val);

          }
        },
        down_payment: {
          get() {
               let v =this.formatToCommaSeperated(this.form.down_payment);
            return v;
          },
          set(val) {
            //    let p = this.removeCommaFromNumber(val)
            this.form.down_payment = val;

          }
        },
    },
    methods:{
        submitEligibility(){
          this.form.down_rate = this.down_rate;
          this.$store.dispatch("calculator/saveEligibilityFormAction",this.form);

          this.$nuxt.$emit('open-down-payment-modal',true);
          //  this.$store.dispatch("formStepAction",3);
        },
        calculateInitialDownPayment(){
          // let store_form = this. $store.state.calculator_module.form;
          let max_loan_amount = this.store_form.max_loan_amount;
          let property_value = this.store_form.property_value;

          this.form.property_value = property_value;
          this.max_loan_amount = max_loan_amount;
          //get the ten percentage and 90%;
          let ten_percentage  = (property_value*0.1).toFixed(0);
          let ninty_percentage = (property_value*0.9).toFixed(0);
          //if affordabile amount is less then 90% property
          if(max_loan_amount >= ninty_percentage){
              this.form.loan_amount = ninty_percentage
            this.form.down_payment = ten_percentage;
          }else{
            // let r = ((this.max_loan_amount/property_value)*100).toFixed(0);
             this.form.loan_amount = max_loan_amount;
            this.form.down_payment =property_value - max_loan_amount;
          }
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
          let max_loan_amount = this.store_form.max_loan_amount;
           let property_value = this.store_form.property_value;
          let ten_percentage  = (this.form.property_value*0.1).toFixed(0);
          let ninty_percentage = (property_value*0.9).toFixed(0);
          let new_down_payment = (rate * property_value).toFixed(0);
           let new_loan_amount =0;
          if(property_value - new_down_payment >= max_loan_amount){
            new_loan_amount = max_loan_amount;

          }
          else if(max_loan_amount >= property_value){
            new_loan_amount = (property_value-new_down_payment).toFixed(0);
            // this.form.down_payment = ten_percentage
          }
          else{
             new_loan_amount = (property_value-new_down_payment).toFixed(0);
          }
          this.form.loan_amount = new_loan_amount;
          this.form.down_payment = new_down_payment;



          console.log("d: "+new_down_payment);
          console.log("l: "+new_loan_amount);
        }
    },
    created(){
          if(this.selectedStatus){
            let s = this.$store.state.property.selectedProperty;
            this.$store.commit("calculator/property_value",s.property_price);
          }

        // this.$store.commit("down_payment",a.max_loan_amount);
       this.$nuxt.$on('submitEligibility',(t)=>{
          this.submitEligibility();
        });
        this.calculateInitialDownPayment();
        // this.setBubble();
    },
    mounted(){
        // this.setitUp();
        this.processStepFunction(false,false);
    },
      destroyed () {
          this.form =  {
              down_rate:'',
              property_value:'',
              loan_amount:'',
              down_payment:'',

            }
      },
  }
</script>

<style lang="scss" scoped>

</style>
