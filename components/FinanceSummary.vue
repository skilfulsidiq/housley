<template>
    <div>
            <v-row no-gutters>
                <v-col class="col-12" md="4">
                    <div class="flex-box">
                         <div class="firs122">
                        <div class="ton1">Maximum Loanable</div>
                        <div class="mza animated bounceIn">{{user.loanable_amount|easy_currency }}. <span class="span">00</span></div>
                    </div>
                    </div>
                </v-col>
                <v-col class="col-12" md="4">
                    <div class="flex-box flex-mg">
                          <div class="sec122">
                            <div class="ton1">Est. Monthly Repayment</div>

                            <div class="mza animated bounceIn second">{{user.monthly_repayment| easy_currency }}. <span class="span">00</span></div>
                        </div>
                    </div>
                </v-col>
                <v-col class="col-12" md="4">
                    <div class="flex-box flex-mgr">
                         <div class="set122"><div class="ton1">Maximum Tenure</div>
                        <div class="mza animated bounceIn third">{{tenure}}</div>
                    </div>
                    </div>
                </v-col>
            </v-row>
    </div>
</template>
<script>
import general_mixin from '@/mixins/general_mixin'
export default {
    name: "FinanceSummary",
    mixins:[general_mixin],
    props:{
        // user:{
        //     type:Object,
        //     required:true
        // }
    },
    computed:{
      user(){
        let u = this.$store.state.profile.profile;
        return u;
      },
      tenure(){
        if(this.user.loan_tenure==null){
          return 0;
        }else{
          return this.user.loan_tenure+' Years';
        }
      },
      repayment(){
        if(this.user.monthly_repayment==null){
          return 0;
        }else{
          return this.user.monthly_repayment;
        }
      }
    }
}
</script>
<style scoped>

.wrapper{
    width: 95%;
    padding: 0.65rem;
    margin-bottom:1.5rem;
}
.mss {
    width: 78%;
    margin-left: .5rem;
}
.samry, .ton1 {
    font-weight: 700;
}

.samry {
    font-size: 18px;
    line-height: 24px;
    color: #005229;
    margin-bottom: 1rem;
    padding-left: 1.5rem;
}
.maxa12 {
    display: flex;
    border: .5px solid #e9f2e9;
    box-sizing: border-box;
    border-radius: 16px;
}

.flex-box{
    height: 120px;
    width:100%;
    border-radius: 10px;
    background: #F3FBFF;
    border: 1px solid #BDFFBA;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 9px 0 #0000001c;
}
.flex-box.flex-mg{
    margin-left:0.75rem;
}
.flex-box.flex-mgr{
    margin-left:1.5rem;
}
.firs122, .sec122,.set122 {
    height: 106.97px!important;
    width: 320.92px!important;
    /* padding: 1.7rem 1.7rem 1.7rem 3rem; */
    padding: 1.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.ton1 {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: .8rem;
    color: #005229;
    min-width: 180px;
    text-align: center;
}
.span{
    color: #9FC7DA;
}
.samry, .ton1 {
    font-weight: 700;
}
.mza {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -.005em;
    color:#0D4566;
    text-align: center;
    display: flex;
    justify-content: center;
    /* margin-left: -1.8rem; */
}
.mza.second{
    /* margin-left:-3.5rem; */
}
.mza.third{
    /* margin-left:-6rem; */
}

.animated {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.bounceIn {
    animation-duration: .75s;
    animation-name: bounceIn;
}


@media (max-width: 1000px){
.gradwrap {
    padding: 1rem;
    justify-content: center;

}
.mss {
    width: 100%;
}
.samry {
    padding: 1rem 0;
    margin-top: 1rem;
    margin-left:-3rem;
    text-align: center;
}
.maxa12 {
    border: none;
    flex-wrap: wrap;
    flex-direction: column;
  }

    .flex-box{
        border-radius: 0;
    }
    .firs122, .sec122,.set122{
        border-radius: 0;
        border-right: none;
        border-left: none;

    }
    .flex-box.flex-mg,.flex-box.flex-mgr{
    margin-left:0rem;
    }
}
</style>
