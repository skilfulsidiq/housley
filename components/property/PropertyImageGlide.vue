<template>
      <div class="main-parent">
          <div class="full-image"  :style="{backgroundImage:'url('+active_img+')'}"></div>
          <!-- <div class="row">
            <div class="col-md-12 col-xs-8"> -->
              <div class="small-images">
                    <div v-for="img in images" :key="img.id" @click="changeImage(img)"  class="img cursor" :style="{backgroundImage:'url('+img+')'}"></div>

              <!-- <div v-for="img in images" :key="img.id" @click="changeImage(img)"  class=" img cursor" :style="{backgroundImage:'url('+img+')'}"></div> -->
          <!-- </div>
            </div> -->
          </div>

      </div>
</template>

<script>
  export default {
    props:{
      images:{default:''},
      cover:{type:String,default:''},
    },
    data(){
      return{
        active_img:''
      }
    },
    methods:{
      changeImage(img){
        this.active_img = img;
      }
    },
    created(){
      this.active_img = this.cover;
      console.log("images",this.images);
    }
  }
</script>

<style lang="scss" scoped>
  .main-parent{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .full-image{
      @include img-background(100%,20rem,10px);
      margin-bottom: 1rem;
      vertical-align: middle;
      // background-color: $card-border-color;
    }
    .small-images{

     display: flex;
     flex-direction: row;
    //  align-items: flex-start;
     overflow: scroll;
    //  position: relative;
     width:100%;
     height: 120px;
    }
     .img{
         @include img-background(100px,100px,10px);
        //  position: absolute;
        flex-shrink: 0;
        // width:80px;
        // height: 80px;
        margin: 0 5px;
        // vertical-align: middle;
      }
    .small-images::-webkit-scrollbar{
      width:0;
    }
    // ..small-images::-moz-sc
  }
</style>
