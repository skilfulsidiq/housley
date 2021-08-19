<template>
    <v-btn :style="[outlined ?outlineStyle:solidStyle]"  :height="height" :width="width"
        :type="type"
        :loading="loading"
        :outlined="outlined"
        :disabled="disabled"
        :block="block"
        :color="color"
        @click.prevent="action"
        :rounded="rounded"
    >{{text}}</v-btn>
</template>

<script>
    export default {
        name: "dashboard",
        data(){
            return{
                blackColor:"black",
                outlineStyle:{
                    color:'$secondary !important'
                },
                solidStyle:{
                    color:'#fff !important'
                }
            }
        },
        props:{
            text:{type:String,required:true},
            width:{type:String,},
            height:{type:String,default:'60px'},
            action:{type:Function},
            type:{type:String,required:true},
            loading:{type:Boolean,default:false},
            disabled:{type:Boolean,default:false},
            color:{type:String,default:'secondary'},
            block:{type:Boolean,default:false},
            outlined:{type:Boolean,default:false},
            rounded:{type:Boolean,default:false},
        }

    }
</script>

<style scoped lang="scss">

  .v-btn--outlined {
    border: thin solid $secondary;
    color:$secondary!important;
}
</style>
