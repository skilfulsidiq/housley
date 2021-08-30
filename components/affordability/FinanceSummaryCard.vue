<template>
  <div>
      <div class="amount-cards grid">
            <div class="amount-card">
              <p class="figure bold big-font green">
                ₦ {{formatToCommaSeperated(result.max_loan_amount)}}.<span class="gray">00</span>
              </p>
              <p class="info color1">Your Maximum Loanable Amount</p>
            </div>
            <div class="amount-card">
              <p class="figure bold big-font green">
                ₦ {{formatToCommaSeperated(result.monthly_payment)}}.<span class="gray">00</span>
              </p>
              <p class="info color1">Estimated Monthly Repayment</p>
            </div>
            <div class="amount-card">
              <p class="figure bold big-font green">
                {{result.loan_tenure}}<span class="gray"> Years</span>
              </p>
              <p class="info color1">Maximum Tenure</p>
            </div>
          </div>
  </div>
</template>

<script>
import form_mxin from '@/mixins/form_mixin'
  export default {
    mixins:[form_mxin],
    props:{
      result:{type:Object}
    },
    computed:{
        // result(){
        //       let result = this.$store.state.calculator.form;
        //       return result;
        //     },
    }
  }
</script>

<style lang="scss" scoped>

</style>
