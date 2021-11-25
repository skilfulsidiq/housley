<template>

    <div class="cr_body_cover">
            <!-- carousel -->
          <div v-if="user_request.property && user_request.property.property_photos " id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" v-for="(p,i) in user_request.property.property_photos" :key="i">
                  <!-- <img
                    :src="p"
                    class="d-block w-100"
                    alt="..."
                  /> -->
                  <div class="pro_img" :style="{backgroundImage:'url('+p+')'}"></div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div class="no-property" v-else></div>
            <!-- end carousel -->
            <div class="req_prop">
              <a>Request property</a>
              <button  type="button" @click="updateRequest()" class="btn  edit-request"><i class="fa fa-pencil edit-request-icon"></i> </button>
              <!-- <button v-if="user.have_apply_for_mortgage !=1" type="button" @click="updateRequest()" class="btn  edit-request"><i class="fa fa-pencil edit-request-icon"></i> </button> -->
              <!-- <span class="edit-request cursor"><i class="fa fa-pencil edit-request-icon"></i> Update Request</span> -->
            </div>
            <!-- sb -->
            <div class="property_specs" v-if="user_request">
              <!-- 1 -->
              <div class="property_specs_">
                <span class="property_specs_one">Property type</span>
                <span class="property_specs_two" v-if="user_request.property_type.name">{{user_request.property_type.name}}</span>
              </div>
              <div class="property_specs_">
                <span class="property_specs_one">Property bedrooms</span>
                <span class="property_specs_two" v-if="user_request.property_bedroom">{{user_request.property_bedroom}} bedrooms</span>
              </div>
              <div class="property_specs_">
                <span class="property_specs_one">Property location</span>
                <span class="property_specs_two">{{user_request.city_name?user_request.city_name:'-'}},{{user_request.state_name?user_request.state_name:'-'}}</span>
              </div>
              <div class="property_specs_">
                <span class="property_specs_one">Property value</span>
                <span class="property_specs_two">{{user_request.property_value|easy_currency}}</span>
              </div>
            </div>
       <form-modal/>
  </div>
</template>

<script>
import FormModal from '../request/FormModal.vue';
  export default {
  components: { FormModal },

    computed:{
      user_request(){
        let r = this.$store.state.dashboard.property_request;
        return r;
      },
      user(){
        let r = this.$store.state.auth.user;
        return r;
      }
    },
    methods:{
      updateRequest(){
        console.log('request_modal')
        //  this.$nuxt.$emit('update_request_modal',{status:true,request:this.user_request});
        this.$router.push({name:'dashboard-request'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .no-property{
    width:100%;
    height: 15rem;
    background-color: #f5f5f5;
    border-radius: 16px;
  }
  .pro_img{
    width:100%;
    height: 15rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .req_prop {
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
  }
  .edit-request{
    border:1px solid #ffab00;
    border-radius: 10px;
  }
  .edit-request-icon{
    font-size:1rem;
    color:#ffab00;
  }
</style>
