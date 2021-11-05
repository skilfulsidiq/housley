<template>
  <div :class="determinedStatus">{{status}}</div>
</template>

<script>
  export default {
    props:["status"],
    computed:{
      determinedStatus(){
        switch(this.status){
          case 'Pending':
            return 'pill_p'
          case 'Query':
            return 'pill_p'
          case 'Approved':
            return 'pill_a'
          case 'Decline':
            return 'pill_r'
          case 'incomplete':
            return 'pill_r'

        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
