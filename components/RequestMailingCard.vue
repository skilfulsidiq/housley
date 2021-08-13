<template>
  <div>
        <section class="mailing">
              <div class="mailing-container">
              <img src="/img/filter-properties/filter-footer.svg" >

                <div class="content">

                  <div class="left">
                    <h4>Still don’t get what you are looking for, we can make provision based on your suggestions</h4>
                  </div>

                  <div class="right">
                    <!-- <app-button text="Join our waiting list"
                      btnclass=" hoverable"
                    /> -->
                    <div class="button">
                      <a href="#" @click.prevent="$nuxt.$emit('show_request_modal',true)">Join our waiting list</a>
                    </div>
                  </div>
                </div>

              </div>

  </section>
  </div>
</template>

<script>
import AppButton from './AppButton.vue'
  export default {
  components: { AppButton },

  }
</script>

<style lang="scss" scoped>

</style>
