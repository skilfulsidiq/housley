<template>
  <div>
        <div class="top-title d-flex justify-space-between">
               <p>{{left}} | {{right}}</p>
               <slot name="action"></slot>
            </div>
  </div>
</template>

<script>
  export default {
    props:{
      left:{type:String},
      right:{type:String},
    }

  }
</script>

<style lang="scss" scoped>
 .top-title{
    padding:1.5rem;
  }

</style>
