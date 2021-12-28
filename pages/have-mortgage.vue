<template>
  <div  class="center-main">
        <!-- <div class="text" > -->
           <img src="https://img.icons8.com/ios-filled/150/26e07f/checked--v1.png"/>
            <h3 class="mt-3">{{msg}}</h3>
            <NuxtLink class="mt-3 next xxsm-font green-btn s-bold hoverable text-center" to="/dashboard/application">
              View Application
            </NuxtLink>
        <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
  export default {
    props:{
      msg:{default:'You have a pending application'}
    },
    layout:'default',
     head(){
            return{
                link:[
                      { rel: 'stylesheet', href:"/css/custom/header-color.css"  },
                ]
            }
        },
  }
</script>

<style lang="scss" scoped>
.center-main{
  margin:6rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
