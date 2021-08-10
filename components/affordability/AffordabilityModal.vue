<template>
  <div>
    <div
      class="modal preapprovalform modal fade"
      id="AffordabilityTestModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="AffordabilityTestModalLabel"
      aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="pre-approval-form-container">
              <img
                class="modal-close"
                src="/img/close.svg"
                data-dismiss="modal"
                alt="close"
              />

               <affordability-form :formType="true" :showLocation="true">
                  <template v-slot:button>

                      <app-button btnid="continue" btnclass="next xxsm-font green-btn s-bold hoverable" text="Continue" :action="submitModalAffordability" />

                      </template>
                  </affordability-form>
            </div>
          </div>
        </div>
  </div>
  </div>
</template>

<script>
import calculator from '@/mixins/calculator_mixin'
  export default {
    mixins:[calculator],
    data(){
        return{ modal:null,

        }
    },
    methods:{
      test(){},
      showModal(){
        $("#AffordabilityTestModal").modal('show');
      },
      hideModal(){
        $("#AffordabilityTestModal").modal('hide')
      }
    },
    created(){
        this.$nuxt.$on('open-affordability-modal',(t)=>{
            if(t){
                  this.showModal()
            }else{
                 this.hideModal();
            }

            console.log('show from afford')
        });
    }
  }
</script>

<style lang="scss" scoped>

</style>
