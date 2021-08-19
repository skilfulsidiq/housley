<template>
  <div >
     <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-subtitle>{{title}}</v-list-item-subtitle>
        <v-list-item-title>{{value}}</v-list-item-title>

      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
  export default {
      props:{
        title:{type:String},
        value:{type:String},
      }
  }
</script>

<style lang="scss" scoped>

</style>
