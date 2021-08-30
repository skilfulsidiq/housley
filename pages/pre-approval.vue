<template>
    <div>
          <main class="page-content">
      <div class="pre-approval-form-container  preapproval-content">
        <!-- <img class="modal-close" src="/img/close.svg" data-dismiss="modal" alt="close"> -->

          <affordability-form :formType="true" :showLocation="true">
                  <template v-slot:button>

                           <app-button btnid="continue" btnclass="next xxsm-font green-btn s-bold hoverable" text="Continue" :action="submitModalAffordability" :btnloading="loading" />



                  </template>
          </affordability-form>
      </div>

    </main>
    </div>
</template>

<script>
import AffordabilityForm from '@/components/affordability/AffordabilityForm.vue'
import calculator from '@/mixins/calculator_mixin'
import general_mixin from '@/mixins/general_mixin'
    export default {
  components: { AffordabilityForm },
  mixins:[calculator,general_mixin],
        auth:false,
          head(){
            return{
                link:[
                      { rel: 'stylesheet', href:"/css/custom/header-color.css"  },
                ],
            script:[
              {
              src: "/js/custom/range.js",
              body: true
            },
                ]
            }
        },
        created(){
          window.scrollTo(0,0);
        }
    }
</script>

<style lang="scss" >
.preapproval-content #continue {
       width: 100% !important;
  }
  @media (max-width:900){
.preapproval-content #continue {
     width: 100% !important;
}
  }

</style>
