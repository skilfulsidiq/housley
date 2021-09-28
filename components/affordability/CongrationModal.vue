<template>
    <div>


             <div
      class="modal preapprovalform modal fade"
      id="congratulationModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="congratulationModalLabel"
      aria-hidden="true"
      >
        <div class="modal-dialog" role="document" style="width:35rem">
          <div class="modal-content">
             <div class="pre-approval-form-container">
                <div class="tab-step2 tab-success">
                        <div class="mark-icon flex">
                          <img src="/img/mark.png" alt="marked" >
                        </div>
                        <div class="heading">
                          <h1 class="big-font green bold">
                            You have been Pre-Qualified to Apply for a Mortgage
                          </h1>
                          <p class="sub-title color1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Accumsan auctor aliquam leo posuere.
                          </p>
                        </div>
                        <div class="flex next-prev">
                          <button @click.prevent="hideModal"
                            type="button"
                            id="prev"
                            class="next xxsm-font white-btn s-bold"
                          >
                            Close
                          </button>
                          <button @click.prevent="startApplication"
                            type="button"
                            id="nextBtn"
                            class="next xxsm-font green-btn s-bold hoverable"
                          >
                            Start Application
                          </button>
                        </div>
                </div>
             </div>
          </div>
        </div>
  </div>
    </div>
</template>
<script>
import FormMixin from '@/mixins/form_mixin'/*  */
import CalculatorMixin from '@/mixins/calculator_mixin'/*  */
import general_mixin from '@/mixins/general_mixin'
export default {
    name:"DownPaymentModal",
    mixins:[FormMixin,CalculatorMixin, general_mixin],
        methods:{
        showModal(){
            $("#congratulationModal").modal('show')
        },
        hideModal(){
            $("#congratulationModal").modal('hide')
        },
        startApplication(){
            this.$store.commit("calculator/GO_TO_STEP",1);
            this.$store.commit("calculator/CLEAR_FORM");

            this.hideModal();
            this.$router.push("/");
            // if(this.$auth.user){
            //   this.$router.push("/dashboard");
            // }else{
            //   this.$nuxt.$emit("have_register_data",true);
            //   this.$router.push("/register");
            // }


        },
        close(){
            this.$store.commit("calculator/GO_TO_STEP",1);
            this.hideModal();
            this.$router.push("/");
        }
    },
    created(){
        this.$nuxt.$on('prequalified-modal',(t)=>{
            if(t){
                this.showModal();
            }else{
                this.hideModal();
            }
        })
    }

}
</script>
<style lang="scss" scoped>
  .modal-content {
    padding: 2rem;
  }
  .big-font {
    font-size: 2rem;
    line-height: 40px;
    letter-spacing: -0.5px;
  }
  .pre-approval-form-container .sub-title {
    font-family: poppins;
    width: 100%;
    margin: 1rem auto auto auto;
  }

  .pre-approval-form-container .green-btn {
     padding: 0.5rem 1.5rem;
    }



@media (max-width:800px){
    .modal-content {
    padding: 1rem;
  }
   .big-font {
    font-size: 1.5rem;
    line-height: 40px;
    letter-spacing: -0.5px;
  }




}
</style>
