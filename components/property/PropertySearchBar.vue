<template>
    <div>
                 <div class="search-container">
            <div class="search-container-property">
              <form class="grid" @submit.prevent="searchProperty">
                <div class="form-input bordered no-border flex">
                  <span><img src="/img/home/header/location.svg" /></span>
                  <input type="text" placeholder="Name, State, City..." v-model="form.location" />
                </div>
                <div class="grid grid-btw">
                  <div class="form-input bordered b-left in-btw flex">
                    <span><img src="/img/home/header/home.svg" /></span>&nbsp;&nbsp;

                    <!-- <input type="text" value="Property Type" /> -->
                     <select style="border:none" class="form-control2" aria-describedby="Property type" v-model="form.property_type">
                      <option value="">Property type</option>
                      <option :value="i.name" v-for="i in property_type_list" :key="i.id">{{i.name}}</option>
                    </select>
                  </div>
                  <div class="form-input bordered in-btw flex">
                    <span><img src="/img/home/header/naira.svg" /></span>
                    <input type="text" placeholder="Maximum Price" v-model="price" />
                  </div>
                  <div class="form-input bordered in-btw no-border flex">
                    <span><img src="/img/home/header/home.svg" /></span> &nbsp;&nbsp;
                    <select class="form-control2"  v-model="form.property_status" aria-describedby="Property Status">
                      <option value="" class="bold-me">Property Status</option>
                      <option :value="i.id" v-for="i in property_status_list" :key="i.id">{{i.name}}</option>
                  </select>
                  </div>
                </div>
                <div class="form-input flex">
                  <input
                    class="submit-property"
                    value="Search"
                    type="submit"
                    id=""
                    name=""
                  />
                </div>
              </form>
            </div>
          </div>
    </div>
</template>

<script>
import form_mixin from "@/mixins/form_mixin"
import general_mixin from "@/mixins/general_mixin"
    export default {
         mixins:[form_mixin,general_mixin],
        data(){
        return{
            form:{
                location:'',
                bedrooms:'',
                bathrooms:'',
                price:'',
                property_type:'',
                property_status:''
            }
        }
    },
    computed:{
        price:{
             get() {
              let r = this.formatToCommaSeperated(this.form.price
              );
              return r;
            },
            set(val) {
              this.form.price=val;

            }
        }
    },
    methods:{

        searchProperty(){
             if(this.form.location != ''|| this.form.property_type!=''|| this.form.price != ''){
                 this.$store.dispatch("property/searchPropertiesAction",this.form).then((r)=>{

                 });
             }

        }
    }
    }
</script>

<style lang="scss" scoped>
img{
  max-width:13px;
}
.bold-me{
font-family: poppins;
    font-size: 15px;
    line-height: 24px;
    font-weight: 800;
}

</style>
