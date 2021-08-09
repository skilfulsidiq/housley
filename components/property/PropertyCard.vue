<template>
        <div class="ppt-card">
                <!-- <img id="property_img" src="/img/properties/house-card.jpg" alt="" /> -->
                <img id="property_img" :src="property.property_cover_image" alt="" />
                <div class="ppt-card-details">
                  <div class="upper">
                    <div class="lhs">
                      <p class="bold color1 font-16">{{property.property_price| price}}</p>
                      <div class="located flex">
                        <img
                          src="/img/properties/locationIcon.svg"
                          alt="locationIcon"
                        /><span class="color1"
                          >{{property.city.name}}, {{property.state.name}}, Nigeria</span
                        >
                      </div>
                    </div>
                    <div class="rhs flex">
                      <p class="color1">Property Status</p>
                      <p class="color1" >{{property_status}}</p>
                    </div>
                  </div>
                  <div class="lower flex j-btw flex-wrap">
                    <div class="flex icons">
                      <div class="with-icon flex j-btw">
                        <div>
                          <img
                            src="/img/properties/bed.svg"
                            alt="bed"
                          />
                        </div>
                        <p class="color1">{{property.property_bedrooms}}  Beds</p>
                      </div>
                      <div class="with-icon flex j-btw">
                        <div>
                          <img
                            src="/img/properties/bath.svg"
                            alt="bed"
                          />
                        </div>
                        <p class="color1">{{property.property_bathrooms}}  Baths</p>
                      </div>
                      <div class="with-icon flex j-btw">
                        <div>
                          <img
                            src="/img/properties/building.svg"
                            alt="bed"
                          />
                        </div>
                        <p class="color1">{{property.property_size}} sqft</p>
                      </div>
                    </div>
                    <button
                     
                      class="dark-btn see-details"
                      @click="showDetail()"
                    >
                      See details
                    </button>
                  </div>
                  <div class="bottom flex flex-wrap j-btw">
                    <div class="lhs">
                      <p class="upper-case faded">Buy on Mortgage</p>
                      <div class="located flex">
                        <p class="bold color1 font-16">{{property.estimated_repayment.monthly_payment|price}}</p>
                        <span class="slash faded"> / Month</span>
                      </div>
                    </div>
                    <div class="rhs">
                      <p class="upper-case faded">Payback Over</p>
                      <div class="located flex">
                        <p class="bold color1 font-16">{{property.estimated_repayment.tenure}} </p>
                        <span class="slash faded"> / Years</span>
                      </div>
                    </div>
                  </div>
                </div>
        </div>

</template>

<script>
    export default {
        name:"PropertyCard",
          props:{
        btnText:{type:String,default:'See details'},
        property:{type:Object},
        isChoose:{type:Boolean,default:false}
    },
    computed:{
      property_status(){
        if(this.property.property_status!= null){
          return this.property.property_status.name
        }
        return ''
      }
    },
    methods:{
        showDetail(){
          let d = {status:true,property:this.property};
          this.$nuxt.$emit("show_detail_modal",d);
        },
        chooseProperty(){
            console.log("choose property")
            if(this.isChoose){
                this.$store.dispatch("selectPropertyAction",this.property);
                 this.$store.commit("SAVE_SELECTED_PROPERTY",this.property)
                 this.$store.dispatch("formStepAction",2);

            }else{
                // go detail page
                this.$router.push({name:"PropertyDetail",params:{slug:this.property.slug}})
            }
        }
    }
    }
</script>

<style lang="scss" scoped>
img{
  max-width:100%;

}
#property_img{
  width:367px;
  height: 256px;
}
</style>
