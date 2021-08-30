<template>
  <div>
      <section   class="property-search">
    <div class="property-search-container">
    <div  class="search-container ">
       <div class="search-container-property">
        <form @submit.prevent="searchPro" method="post">
            <div class='form-input'>
                <span><img  src='/img/home/header/location.svg' ></span>
                <input type='text' placeholder="Name, State, City..." v-model="form.location">
            </div>
            <div class='form-input'>
                <span><img  src='/img/home/header/home.svg' ></span>
                <select style="border:none; margin-left:0.8rem" class="form-control2 " aria-describedby="All Home Types" v-model="form.property_type">
                    <option value="">Property type</option>
                    <option :value="i.name" v-for="i in property_type_list" :key="i.id">{{i.name}}</option>
                </select>
                <!-- <input type='text' placeholder="Property"> -->
            </div>
            <div class='form-input'>
                <span><img   src='/img/home/header/naira.svg' ></span>
                <input type='text' placeholder="Maximum Price" v-model="price" >
            </div>
            <div class='form-input'>

                <input class="submit-property hoverable" value='Search' type='submit' id='' name=''>
            </div>
        </form>
       </div>
    </div>

    <!-- <div class="search-container " style="display:none">
        <h2>Service Plot</h2>
        <p>Paris is the capital of France.</p>
    </div> -->



    </div>
</section>
  </div>
</template>

<script>
import formMixin from "@/mixins/form_mixin"
import general from "@/mixins/general_mixin"
  export default {
        mixins:[formMixin,general],
        data(){
        return{
            form:{
                location:'',
                bedrooms:'',
                bathrooms:'',
                price:'',
                property_type:''
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

        searchPro(){
             if(this.form.location != ''|| this.form.property_type!=''|| this.form.price != ''){
                this.$store.commit("property/SEARCH_FORM",this.form)
                 this.$store.dispatch("property/searchPropertiesAction",this.form).then((r)=>{
                   this.$store.commit("property/LIST_STYLE","search");
                     this.$router.push({name:'properties',params:{type:'search'}})
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
.property-search {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 25px;
    z-index: 99;
    width: 100%;
    top: 48%;
    overflow: hidden;
}
.property-search-container {
    width: 74.8125rem;
    display: flex;
    justify-content: center;
}
.search-container-property{
  border:1px dotted $secondary;
}
</style>
