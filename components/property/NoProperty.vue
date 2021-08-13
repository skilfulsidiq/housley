<template>
  <div>
      <div class="no-property">
             <div class="ppt-heading" >
                <h3 class="title bold big-font">{{title}}</h3>
              <p class="sub-title color1">
                <!-- {{property_length}} + properties from Brains & Hammers listed on Houzzley -->
              </p>
            </div>
          <!-- <h3></h3> -->
          <img src="/img/home/benefits-cta/find-home.svg" alt="" class="no-property-img space">
          <div class="btn-div">
              <app-button v-if="showRequestBtn" :text="btnText" btnclass="xxsm-font white-btn2 s-bold " :action="action" class="space-right"/>
              <app-button :text="rightBtnText" btnclass="xxsm-font green-btn s-bold hoverable" :action="rightAction"/>
          </div>

      </div>
  </div>
</template>

<script>
  export default {
    props:{
      title:{type:String,default:'No Property Found'},
      btnText:{type:String},
      rightBtnText:{type:String},
      showRequestBtn:{type:Boolean,default:false},

      action:{type:Function},
      rightAction:{type:Function}

    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
.no-property{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.no-property-img{
  width:35rem;
  height:25rem;
}
.btn-div{
  display: flex;
  justify-content: space-between;
}
.ppt-heading {
    text-align: center;
    margin-bottom: 0 !important;
}
.space-right{
  margin-right:1rem;
}
</style>
