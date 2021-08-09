<template>
    <div>
          <main class="page-content">
      <div class="pre-approval-form-container  preapproval-content">
        <!-- <img class="modal-close" src="/img/close.svg" data-dismiss="modal" alt="close"> -->

          <affordability-form :formType="true" :showLocation="true">
                  <template v-slot:button>

                      <app-button btnid="continue" btnclass="next xxsm-font green-btn s-bold" text="Continue" :action="submitModalAffordability" />

                      </template>
          </affordability-form>
      </div>

    </main>
    </div>
</template>

<script>
import AffordabilityForm from '@/components/affordability/AffordabilityForm.vue'
import calculator from '@/mixins/calculator_mixin'
    export default {
  components: { AffordabilityForm },
  mixins:[calculator],
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
    }
</script>

<style lang="scss" scoped>

</style>
