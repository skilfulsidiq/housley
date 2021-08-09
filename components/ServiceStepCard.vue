<template>
    <div>
     <div class="ctas-card">
          <div class="img">
            <img
              :src="img"
              alt=""
            />
          </div>

          <h4>{{title}}</h4>
          <p>
           {{details}}
          </p>
          <div class="button" :width="width" :height="height" @click.prevent="action">{{btn}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"MortgageApprovalCard",
        props:{
            img:{
                type:String
            },
            title:{
                type:String
            },
            details:{
                type:String
            },
            action:{
                type:Function
            },
            btn:{
                type:String
            },
            width:{
                type:String
            },
            height:{
                type:String
            },
            color:{
                type:String,default:'color'
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>
