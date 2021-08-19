<template>
  <div>
       <modal title="Mortgage Application " name="application_preview" width="1000"
       :fullscreen="$vuetify.breakpoint.smAndDown?true:false">
           <template v-slot:content>
              <preview-layout/>

            </template>
       </modal>
  </div>
</template>

<script>
import PreviewLayout from './PreviewLayout.vue'
  export default {
  components: { PreviewLayout },

  }
</script>
