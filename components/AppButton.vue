<template>
    <div>
        <button
            :type="type"
            @click.prevent="action"
           
            :class="btnclass"
            :id="btnid"
          >
          {{loading?"loading...":text}}
          </button>
    </div>
</template>

<script>
import general_mixin from "@/mixins/general_mixin"
    export default {
      mixins:[general_mixin],
        props:{
          type:{type:String,default:"button"},
            text:{type:String,required:true},
            btnclass:{type :String},
            btnid:{type :String},
            bg:{type:String},
            color:{type:String},
            width:{type:String,default:""},
            height:{type:String,default:''},
            action:{type:Function},

        }
    }
</script>

<style lang="scss" scoped>
.appbtn{
    font-weight: 500;
    font-family: Poppins;
    border: none;
    outline: none;
    border-radius: 10px;
    color: #fff;
    padding: 10px 41px;
    background-color: $secondary;
    font-size: 14px;
    cursor: pointer;
    line-height: 24px;
}
</style>
