<template>
  <div>
    <main class="page-content">
      <section>
        <div class="padded-content">
          <section class="preapproval">
            <finance-summary-card/>
            <selected-property/>

            <div class="heading-step">
              <div class="heading">
                <h2 class="big-font green bold">You are almost there</h2>
                <p class="sub-title color1">
                  These steps are necessary to complete your mortgage
                  application
                </p>
              </div>
                              <!-- Circles which indicates the steps of the form: -->

              <section class="step-indicator steps">
                <div class="step step1 ">
                    <div class="step-icon number " :class="[step==1?'active':step>1?'finish':'']">{{step>1?'✓':'1'}} </div>
                    <p  class="text bold " :class="[step==1?'active ':step>1?'finish':'']">Affordability Test</p>
                </div>
                <div id="line1" class="indicator-line "></div>
                <div class="step step2">
                    <div class="step-icon number" :class="[step==2?'active':step>2?'finish':'']">{{step>2?'✓':'2'}} </div>
                  <p class="text bold" :class="[step==2?'active ':step>1?'finish':'']">Down Payment</p>
                </div>
                <div id="line2" class="indicator-line"></div>
                <div class="step step3">
                    <div class="step-icon number " :class="[step==3?'active':'']">3</div>
                  <p class="text bold" :class="[step==3?'active ':'']"> Complete Profile</p>
                </div>
            </section>

              <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                      <div id="stepForm"  class="filled-input-with-slider">
                        <affordability-form :showLocation="false" v-if="step==1"/>
                        <elgibility-form v-if="step==2"/>
                        <profile-form v-if="step==3"/>



                      </div>

                        <div class="buttons step-buttons">
                            <app-button v-show="step>1" type="button" text="Previous"  btnclass="xxsm-font white-btn2 s-bold " :action="stepBackward"
                            ></app-button>

                            <app-button text="Continue"
                            type="button"
                            id="nextBtnStep"
                            btnclass="xxsm-font green-btn s-bold hoverable"
                              :action="stepForward">

                          </app-button>


              </div>
                </div>
                 <div class="col-md-2"></div>
              </div>


            </div>
          </section>
        </div>

         <!-- <button
                type="button"
                id="modal-trigger"
                data-toggle="modal"
                data-target="#exampleModal"
                class="xxsm-font green-btn s-bold"
              >
                Modal Trigger
              </button> -->

        <!-- Modal -->

        <!-- </div> -->
      </section>
    </main>
       <down-payment-modal/>
  </div>
</template>

<script>
import FinanceSummaryCard from '@/components/affordability/FinanceSummaryCard.vue'
import SelectedProperty from '@/components/property/SelectedProperty.vue'
import AffordabilityForm from '@/components/affordability/AffordabilityForm.vue'
import ElgibilityForm from '@/components/affordability/ElgibilityForm.vue'
import ProfileForm from '@/components/affordability/ProfileForm.vue'
import DownPaymentModal from '@/components/affordability/DownPaymentModal.vue'
import calculator_mixin from '@/mixins/calculator_mixin'
import CongrationModal from '@/components/affordability/CongrationModal.vue'
  export default {
  components: { FinanceSummaryCard,SelectedProperty,AffordabilityForm,ElgibilityForm,ProfileForm,DownPaymentModal,CongrationModal },
    auth:false,
    mixins:[calculator_mixin],
       head(){
            return{
                link:[
                      { rel: 'stylesheet', href:"/css/custom/header-color.css"  },
                ],
                script:[
                  //  {
                  //     src: "/js/custom/range.js",
                  //     body: true
                  //   },
                  //  {
                  //     src: "/js/custom/stepForm.js",
                  //     body: true
                  //   },
                ]
            }
        },
        computed:{
           step:{
            get(){
                let r = this.$store.state.calculator.formStep;
            return r;
            },
            set(v){
                this.$store.commit("GO_TO_STEP",v);
            }

        },
        total_step(){
            let r = this.$store.state.calculator.totalStep;
            return r;
        },
         stepStatus(){
             let status = this.$store.state.calculator.processStatus;
             return status;
        },
        },
        methods:{
        validateStep(){
            switch(this.step){
                case 1:
                   this.$store.dispatch("calculator/formStepAction",1);
                case 2:
                    if(!this.stepStatus.hasAffordability){
                        this.$store.dispatch("calculator/formStepAction",1);
                    }
                    break;
                case 3:
                     if(!this.stepStatus.hasEligibility && this.stepStatus.hasAffordability){
                        this.$store.dispatch("calculator/formStepAction",2);
                    }
                    break;

            }
        },
        stepForward(){
               switch(this.step){
                case 1:
                    this.submitAffordability();
                    break;
                case 2:
                    this.submitEligibility();
                    break;
                case 3:
                    this.submitProfile();
                    break;
                }
        },
        stepBackward(){

               switch(this.step){
                case 1:
                    // this.submitAffordability();
                    break;
                case 2:
                   this.$store.commit("calculator/GO_TO_STEP",1);
                    break;
                case 3:
                   this.$store.commit("calculator/GO_TO_STEP",2);
                    break;
                }


        },
        goStep(step){
          this.$store.commit("calculator/GO_TO_STEP",1);
        }
        },
        created(){
            this.validateStep();
            this.$nuxt.$on('process-status',(status)=>{
                this.stepStatus = status;
                console.log(this.stepStatus);
            })

        },
        destroyed () {
        //  this.processStepFunction(false,false)
          this.step =1;
          // this.$store.commit("calculator/CLEAR_FORM")
        },
  }
</script>

<style lang="scss" scoped>
.white-btn2 {
    background-color: #fff;
    color: #006633!important;
    border: 1px solid #006633;
}
.white-btn2:hover {
    background-color: #006633;
    color: #fff!important;
}

.step-icon.two{
   background-color: #006633!important;
}

.active:after {
  content:'' !important;
}

.step-buttons{
  display: flex;
  justify-content: space-between;
}
</style>
