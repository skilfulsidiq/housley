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
                  <p class="color1">{{ selectedStatus?property.property_name:'********'}}</p>
                  <p class="color1" >{{selectedStatus?property.property_type:'********'}}</p>
                  <p class="color1" >
                    <span v-if="property.city && property.state">{{property.city.name}}, {{property.state.name}}</span>
                    <span v-else>*******</span>
                    </p>
                  <p class="color1" >
                     <span v-if="property.client">{{property.client.client_name}}</span>
                    <span v-else>*******</span>
                  <p class="color1" >
                    <span v-if="selectedStatus">{{property.property_price | price}}</span>
                    <span v-if="!selectedStatus&&property_value">{{property_value|price}}</span>
                    </p>
                  <div class="btn">
                    <button class="yellow bold" @click="showDetail" v-if="selectedStatus">View</button>
                  </div>
                </div>
              </div>
            </div>
             <detail-modal/>
  </div>
</template>

<script>
import DetailModal from './DetailModal.vue';
import form_mixin from '@/mixins/form_mixin'
  export default {
  components: { DetailModal },
  mixins:[form_mixin],

    computed:{
      property(){
        let r = this.$store.state.property.selectedProperty;
        return r;
      },
      selectedStatus(){
        return this.$store.state.calculator.propertyIsSelected;
      },
      property_value(){
         return this.$store.state.calculator.form.property_value;
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
