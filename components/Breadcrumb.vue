<template>
  <div>
    <v-container>
       <!-- <v-card> -->
        <v-card-text>
            <div class="d-flex justify-space-between">
                 <v-breadcrumbs :items="items">
                  <template v-slot:divider>
                    <v-icon>mdi-forward</v-icon>
                  </template>
                </v-breadcrumbs>
                <slot name="right"></slot>
            </div>
        </v-card-text>
      <!-- </v-card> -->
    </v-container>

  </div>
</template>

<script>
  export default {
    props:['page'],
    computed:{
      items:function(){
        let items = [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'dashboard',
        }, {
          text: this.page,
          disabled: true,
          href: '',
        },


      ];
      return items

      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
