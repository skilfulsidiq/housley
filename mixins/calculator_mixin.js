
export default{
  methods: {

    currencyFormat(v) {
      return Number(v).toLocaleString("en");
    },
    calculateAge(date_of_birth) {
      let today = new Date();
      let birthday = new Date(date_of_birth);
      let age = today.getFullYear() - birthday.getFullYear();
      return age;
    },
    calculateMaxTenure(v) {
      let retire_age = 55;
      let age_diff = retire_age - v;
      if (age_diff > 30) {
        return 30;
      }
      return age_diff;
    },

    calculateMonthlyPayment(principal, r, year) {
      let months = Number(year * 12);
      let rate = parseFloat(r / 100 / 12);

      let rate_plus_one = 1 + rate;
      let rate_raise_to_Number_of_month = Math.pow(rate_plus_one, months);
      let numerator = principal * rate * rate_raise_to_Number_of_month;
      let denomirator = rate_raise_to_Number_of_month - 1;
      let monthly_payment = (numerator / denomirator).toFixed(2);
      return monthly_payment;
    },
    calculateLoanableAmount(income, yearly_rate, tenure) {
      let form = {
        income: income,
        tenure: tenure
      };

      let income_percentage = 0.33;
      let months = tenure * 12;
      let rate = yearly_rate / 100 / 12;
      let rate_plus_one = 1 + rate;
      let rate_raise_to_Number_of_month = Math.pow(rate_plus_one, months);
      let raise_to_power_month_minus_one = rate_raise_to_Number_of_month - 1;
      let monthly_payment = Number(income) * income_percentage;
      let numerator = monthly_payment * raise_to_power_month_minus_one;
      let denominator = rate * rate_raise_to_Number_of_month;
      let loanable_amount = Math.trunc(numerator / denominator);
      let calculated_repayment = Math.trunc(this.calculateMonthlyPayment(loanable_amount, rate, tenure));
      console.log(loanable_amount)
      let result = {
        loanable_amount: this.currencyFormat(loanable_amount),
        monthly_repayment: this.currencyFormat(calculated_repayment),
        loan_tenure: tenure
      }
      this.$store.dispatch("calculateAffordabilityAction", result);

      // //  if (this.solve_eligibility) {
      // //      this.lookup();
      // //  }
      // return {loan_amount:loanable_amount,monthly_repayment:calculated_repayment};
    },

    nextStep(step) {
      this.$nuxt.$emit('next-step', step);
    },
    submitAffordability() {
      this.$nuxt.$emit('submitAffordability', true);
      window.scrollTo(0, 0);
    },
    submitModalAffordability() {
      this.$nuxt.$emit('submitModalAffordability', true);
      window.scrollTo(0, 0);
      // this.$nuxt.$emit('open-affordability-modal', false);
    },
    submitEligibility() {
      this.$nuxt.$emit('submitEligibility', true);
      window.scrollTo(0, 0);
    },
    submitProfile() {
      this.$nuxt.$emit('profileSubmit', true);
       window.scrollTo(0, 0);

    },
    processStepFunction(affordability, eligibility) {
      this.$store.dispatch("calculator/processStatusAction", {
        hasAffordability: affordability,
        hasEligibility: eligibility
      });
    }
  }
}
