<template>
   <div
          class="modal fade"
          id="mortgage"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-one" style="display: flex; justify-content: center" >
            <div class="modal-content" style="height: fit-content; border-radius: 16px">
              <div style=" display: flex; justify-content: flex-end; padding: 0px 20px; padding-top: 20px;" >
                <button type="button" class="btn-close" aria-label="Close" @click="closeModal" ></button>
              </div>

              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Mortgage Application
                </h5>
              </div>
              <div class="" style="padding: 0px 20px">
                <div class="major-b">
                  <!-- 1 -->
                  <div :class="step==1?'info-cate-active':'info-cate'">
                    <span>Personal Information</span>
                  </div>
                  <!-- 2 -->
                  <div :class="step==2?'info-cate-active':'info-cate'">
                    <span style="text-transform:initial">Next of Kin Information</span>
                  </div>
                  <!-- 3 -->
                  <div :class="step==3?'info-cate-active':'info-cate'">
                     <span>Employment Information</span>
                  </div>
                  <!-- 4 -->
                  <div :class="step==4?'info-cate-active':'info-cate'">
                    <span>Financial Information</span>
                  </div>
                </div>

                <!-- form -->
                <personal-form v-if="step==1"/>
                <next-of-kin-form v-if="step==2"/>
                <employment-form v-if="step==3"/>
                <loan-form v-if="step==4"/>
                <div class="button_cover">
                  <a v-if="step>1" @click="previousAction()" class="button_p cursor" > Previous </a>
                   <app-button type="buton" text="Continue" btnclass="button_" :loading="generalAppLoading" :action="nextAction" other_class="cursor"/>
                  <!-- <a class="button_ cursor" @click="nextAction()" > Continue </a> -->
                </div>
              </div>
            </div>
          </div>
   </div>
</template>

<script>
import EmploymentForm from './mortgage_form/EmploymentForm.vue';
import LoanForm from './mortgage_form/LoanForm.vue';
import NextOfKinForm from './mortgage_form/NextOfKinForm.vue';
import PersonalForm from './mortgage_form/PersonalForm.vue';
import mortgage_mixin from '@/mixins/mortgage_mixin'
import general_mixin from '@/mixins/general_mixin'
  export default {
  components: { PersonalForm, EmploymentForm ,LoanForm, NextOfKinForm},
  mixins:[mortgage_mixin,general_mixin],
    data(){
    return{
      // step:1,
      range:30,
      min:1,
      max:100
    }},
    computed:{
      step:{
      get(){
        return this.$store.state.mortgage.mortgage_step;
      },
      set(v){
        this.$store.commit("mortgage/GO_TO_STEP",v);
      }
      }
    },
    methods:{
      showModal(){

        $("#mortgage").modal('show');
        //  this.newBubble();
        },
      closeModal(){
         this.moveToMortgageNextStep(1);
        $("#mortgage").modal('hide'
        )},
      previousAction(){

        this.$store.commit("mortgage/GO_BACK_STEP",1);
      },
      nextAction(){
        switch(this.step){
          case 1:
            // param =  {status:true,next:this.form_pages[1]}
            this.$nuxt.$emit('submit_first_mortgage_form',true);
            break;
          case 2:
            //  param = {status:true,next:this.form_pages[2]}
            this.$nuxt.$emit('submit_second_mortgage_form',true);
            break;
          case 3:
              // param = {status:true,next:this.form_pages[3]}
            this.$nuxt.$emit('submit_third_mortgage_form',true);
            break;
          case 4:
              // param = {status:true,next:this.form_pages[4]}
            this.$nuxt.$emit('submit_fourth_mortgage_form',true);
            break;
          case 5:
              // param = {status:true,next:this.form_pages[5]}
            this.$nuxt.$emit('submit_preview_mortgage_form',true);
            break;
        }
     },




    },
    mounted(){

    },
    created(){
      //  this.prefillForm();
      this.$nuxt.$on("apply_mortgage",(param)=>{
        if(param){
          this.showModal();
        }else{
          this.closeModal();
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
.modal-content{
  padding:0;
}
  .button_cover{
    justify-content: center;
  }
  @media (min-width: 576px){
  .modal-body-two {
    margin: 0 10px !important;
    max-width: 800px !important;
    margin-top: 50px;
  }
}
</style>
