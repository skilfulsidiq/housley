<template>
  <div>
      <div class="tabled">
              <div class="scrolly">
                <div class="grid th">
                  <p class="color1">Property Name</p>
                  <p class="color1">Type</p>
                  <p class="color1">Location</p>
                  <p class="color1">Developer</p>
                  <p class="color1">price</p>
                </div>
                <div class="grid">
                  <p class="color1">{{property.property_name}}</p>
                  <p class="color1" >{{property.property_type}}</p>
                  <p class="color1" v-if="property.city && property.state">{{property.city.name}}, {{property.state.name}}</p>
                  <p class="color1" v-if="property.client">{{property.client.client_name}}</p>
                  <p class="color1">{{property.property_price | price}}</p>
                  <div class="btn">
                    <button class="yellow bold" @click="showDetail">View</button>
                  </div>
                </div>
              </div>
            </div>
             <detail-modal/>
  </div>
</template>

<script>
import DetailModal from './DetailModal.vue';
  export default {
  components: { DetailModal },

    computed:{
      property(){
        let r = this.$store.state.property.selectedProperty;
        return r;
      }
    },
    methods:{
      showDetail(){
        let d = {status:true,property:this.property};
        this.$nuxt.$emit("show_detail_modal",d);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
