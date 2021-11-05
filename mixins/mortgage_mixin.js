import moment from "moment";
export default {
    data() {
      return {
        personal_form: {
          firstname: "",
          lastname: "",
          middlename: "",
          address: "",
          current_apartment_status: "",
          sex: "",
          dob: "",
          bvn: "",
          marital_status: "",
          state_of_origin: "",
          place_of_birth: "",
          nationality: "",
          phone: "",
          whatapp: "",
          email: "",
          mode_of_contact: "",
          no_of_dependents: "",

          mother_middle_name: '',
          mother_middle_name: '',
          means_of_identification: '',
          id_number: '',
          id_issue_date: '',
          id_expire_date: '',
          profession: '',
          highest_education: '',

          have_children: '',
          children: [],
          next_of_kin_name: '',
          next_of_kin_phone: '',
          next_of_kin_address: '',
          next_of_kin_dob: '',
          next_of_kin_relationship: '',
          other_source_of_income: '',

           nhf_registration_number: "",
            is_rsa_holder: '',
           employment_id: "",
           employment_present_position: "",
           employer_address: "",
           employment_state: "",
           work_experience: "",
           year_to_retirement: "",

           employment_status: '',
           employer_name: '',
           employer_email: '',
           employer_phone: '',

           pfa_name: '',

          monthly_net_pay: "",
          monthly_gross_pay: "",
          total_annual_pay: "",
          monthly_expenses: "",
          payment_option: "",
          have_equity: "",
          have_existing_obligation: "",

          max_loan_amount: '',
          loan_amount: '',
          loanable_amount: '',
          down_payment: '',
          down_rate: '',
          monthly_repayment: '',
          loan_tenure:''



        },
      }
    },
  computed: {
      generalAppLoading() {
        return this.$store.state.mortgage.isLoading
      },


  },
  methods: {
      mortgageLoading(status) {
        this.$store.commit("mortgage/MORTGAGE_LOADING", status);
      },
        mapIncomingDataToMortgegForm(data) {

            let ob = Object.entries(data);
            for (const [key, value] of ob) {

              if (key in this.personal_form) {
                this.personal_form[key] = value
              }
              //    form[key] = value;
            }
          },
          prefillMainMortgageForm() {
            let r = this.$store.state.auth.user;
            this.mapIncomingDataToMortgegForm(r);

          },
          prefillMortgageForm() {
            this.personal_form = this.getPersonalForm;
            //  let r = this.$store.state.auth.user;
            //  this.mapIncomingDataToForm(this.personal_form, r);

          },
          moveToMortgageNextStep(step) {
            this.$store.commit("mortgage/GO_TO_STEP", step)
          }
  },
}
