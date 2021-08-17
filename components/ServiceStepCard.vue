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
          <div class="button" :width="width" :height="height" @click.prevent="go">{{btn}}</div>
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
                type:String
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
        },
        methods:{
          go(){
            switch(this.action){
              case 'search':
                this.$router.push("/properties");
              break;
              case 'lender':
                this.$router.push("/info/mortgage");
              break;
              case 'screened':
                this.$router.push("pre-approval")
              break;
            }
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>
