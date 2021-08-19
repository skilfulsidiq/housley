<template>
  <div>
     <div class="card">
        <div class="card-body iconfont text-center">
          <h5 class="mb-2">{{title}}</h5>
          <h1 class="mb-2 font-weight-bold" :style="{color:color}">{{count}}</h1>
          <!-- <p><span class="text-green"><i class="fa fa-arrow-up text-green"> </i>23%</span> in Last Month</p> -->
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    props:{
      title:{type:String},
      count:{type:String},
      color:{type:String},
    }
  }
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    border-radius: 4px;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #eaeef9;
    border-radius: 10px;
    box-shadow: 0 0 40px 0 rgb(234 238 249 / 50%);
}
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    margin: 0;
    padding: 1.5rem 1.5rem;
    position: relative;
    height: 100%;
}
.iconfont h5 {
    font-size: 16px;
    font-weight: 600;
}
.font-weight-bold {
    font-weight: 700!important;
}
</style>
