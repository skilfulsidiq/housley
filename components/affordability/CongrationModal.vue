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
        <div class="modal-dialog" role="document" style="width:45rem">
          <div class="modal-content">
            <div class="pre-approval-form-container">
              <img style="margin-top:-3rem"
                class="modal-close cursor pointer"
                src="/img/close.svg"
                data-dismiss="modal"
                alt="close"
              />
              <div class="congratulation-wrapper">
                  <figure><img src="/img/congratsIcon.png" alt="Congratulations Icon">
                  </figure>
                  <h3>You have been Pre-Qualified to Apply for a Mortgage</h3>
              </div>
                <div class="action-button">
                  <button type="button" class="xxsm-font white-btn2 s-bold proceed-cta-btn " @click.prevent="close" >Close </button>

                            <button
                            type="button"
                            id="nextBtnStep"
                            class="xxsm-font green-btn s-bold hoverable proceed-cta-btn "
                              @click.prevent="startApplication">Create Account</button>
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
            this.hideModal();
            this.$router.push("/register");
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
  .confirmation-wrapper {
    justify-content: center;
    text-align: center;
    padding: 0 1rem 3rem;
}
.confirmation-wrapper figure img {
    width: 65px;
    height: 65px;
    margin-top: -20px;
}
.confirmation-wrapper p {
    margin-top: 10px;
    color: #16465c;
    font-weight: 400;
}
.equity-content-wrapper {
    background: #e9f7fe;
    border: 1px dashed $secondary;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 1rem;
}
.equity-content-wrapper h3 {
    font-weight: 500;
    font-size: 15px;
    line-height: 35px;
    text-align: center;
    color: #16465c;
}
.equity-content-wrapper h2 {
    font-weight: 800;
    // font-size: 15px;
    line-height: 35px;
    text-align: center;
    color: $secondary;
}
.modal-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    border-top: none;
    margin-top: -50px;
    padding: 2rem;
    flex-wrap: nowrap;
}
.action-button{
  display: flex;
  justify-content: space-between;
}
.proceed-cta-btn {
    // border: 1px solid #16465c;
    // font-weight: 500;
    // font-size: 15px;
    // padding: 20px 25px;
    // letter-spacing: .04em;
    // border-radius: 12px;
    min-width: 40%;
}

@media (max-width:800px){

  .confirmation-wrapper{
    padding:2rem 0.2rem;
  }
  .action-button{
    display: flex;
    justify-content: space-around;
    align-items:center;
    flex-direction: column;
  }
  .proceed-cta-btn {
    margin-bottom:0.5rem;
    min-width: 100%;
  }
}
</style>
