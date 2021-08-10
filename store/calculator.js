import api from '@/services/api'
export const state = () => ({
     form: {
         total_annual_pay: '',
         monthly_net_pay: '',
         additional_income: '',
         outstanding_loans: '',
         have_existing_obligation: 0,
         have_co_borrower: 0,
         co_borrower_monthly_income: '',
         dob: '',
         age: 0,
         property_value: '',
         max_loan_amount: '',
         loan_amount: '',
         down_payment: '',
         down_rate: '',
         monthly_payment: '',
         loan_tenure: '',
         state_id: '',
         city_id: '',
         property_type_id: '',
         property_bedroom: '',
         property_bathroom: '',
         property_id: '',
         found_property: '',
         type: 'mortgage',
         property_address: '',
         property_description: '',
         firstname: '',
         lastname: '',
         email: '',
         phone: '',
         employment_status: '',
         employer_name: '',
         is_rsa_holder: '',
         pfa_name: '',
         location: ''
       },

       processStatus: {
         hasAffordability: false,
         hasEligibility: false,
       },
       formStep: 1,
       totalStep: 3,
})
export const mutations = {
  PREQUALIFIED_FORM(state, payload) {
      state.form = payload
    },
    CLEAR_FORM(state, payload) {
      console.log("stire form clear")
      state.form = {
        total_annual_pay: '',
        monthly_net_pay: '',
        additional_income: '',
        outstanding_loans: '',
        have_existing_obligation: 0,
        have_co_borrower: 0,
        co_borrower_monthly_income: '',
        dob: '',
        age: 0,
        property_value: '',
        max_loan_amount: '',
        loan_amount: '',
        down_payment: '',
        down_rate: '',
        monthly_payment: '',
        loan_tenure: '',
        state_id: '',
        city_id: '',
        property_type_id: '',
        property_bedroom: '',
        property_bathroom: '',
        property_id: '',
        found_property: '',
        type: 'mortgage',
        property_address: '',
        property_description: '',
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        employment_status: '',
        employer_name: '',
        is_rsa_holder: '',
        pfa_name: '',
        location: ''
      }
    },
    AFFORDABILITY_RESULT(state, payload) {
      state.form.max_loan_amount = payload.loanable_amount;
      state.form.monthly_payment = payload.monthly_payment;
      state.form.loan_tenure = payload.loan_tenure;
    },
    SAVE_AFFORDABILITY_FORM(state, payload) {
      state.form.monthly_net_pay = payload.monthly_net_pay;
      state.form.additional_income = payload.additional_income;
      state.form.outstanding_loans = payload.outstanding_loans;
      state.form.have_existing_obligation = payload.have_existing_obligation;
      state.form.have_co_borrower = payload.have_co_borrower;
      state.form.co_borrower_monthly_income = payload.co_borrower_monthly_income;
      state.form.dob = payload.dob;
      state.form.age = payload.age;
    },
    SAVE_ELIGIBILITY_FORM(state, payload) {
      state.form.loan_amount = payload.loan_amount;
      state.form.down_payment = payload.down_payment;
      state.form.down_rate = payload.down_rate;
    },
    SAVE_PROFILE_FORM(state, payload) {
      state.form.firstname = payload.firstname;
      state.form.lastname = payload.lastname;
      state.form.email = payload.email;
      state.form.phone = payload.phone;
      state.form.employment_status = payload.employment_status;
      state.form.address = payload.address;
      state.form.employer_name = payload.employer_name;
      state.is_rsa_holder = payload.is_rsa_holder;
      state.pfa_name = payload.pfa_name;
    },
    SAVE_PROPERTY_REQUEST_DATA(state, payload) {
      state.form.property_value = payload.property_value;
      state.form.city_id = payload.city_id
      state.form.state_id = payload.state_id
      state.form.property_bathroom = payload.property_bathrooms
      state.form.property_bedroom = payload.property_bedrooms
      state.form.found_property = 0;
    },
    SAVE_SELECTED_PROPERTY(state, payload) {
      state.form.city_id = payload.city_id
      state.form.state_id = payload.state_id
      state.form.property_bathroom = payload.property_bathrooms
      state.form.property_bedroom = payload.property_bedrooms
      state.form.property_id = payload.id
      state.form.found_property = 1;
    },

    PROCESS_STATUS(state, payload) {
      state.processStatus = payload
    },
    FORM_STEP(state, payload) {
      if (state.formStep < state.totalStep) {
        state.formStep = payload
      }

    },
    GO_TO_STEP(state, payload) {
      state.formStep = payload;
    },
    CALCULATION_REQUEST(state) {
      state.calculating = true;
    },


    AFFORDABILITY_REQUEST_SUCCESS(state, data) {
      state.calculating = false;
      hasAffordability = true;
    },
    ELIGIBILITY_REQUEST_SUCCESS(state, data) {
      state.calculating = false;
      hasEligibility = true;
    },
    property_value(state, payload) {
      state.form.property_value = payload
    },



}
export const actions = {

calculateAffordabilityAction({commit }, form) {
    return new Promise((resolve, reject) => {
      console.log("submitted affordability: ", form)
      this.$axios.$post(api.calculateAffordability(),form).then((res) => {
        let d = res.data;
        console.log(d);
        commit("AFFORDABILITY_RESULT", d);
        resolve(d)
      })
    });
    //     commit("AFFORDABILITY_RESULT", form);
  },
  saveAffordabilityFormAction({ commit}, form) {
    commit("SAVE_AFFORDABILITY_FORM", form);
  },
  saveEligibilityFormAction({commit}, form) {
    commit("SAVE_ELIGIBILITY_FORM", form);
  },
  saveProfileFormAction({commit }, form) {
    commit("SAVE_PROFILE_FORM", form);
  },
  async processStatusAction({commit }, form) {
      commit("PROCESS_STATUS", form);
    },
  async formStepAction({commit }, step) {
    commit("FORM_STEP", step);
    // EventBus.$emit('next-step',step);

  },
  submitPreQualifiedAction({commit  }, data) {
        console.log(data);
        return new Promise((resolve, reject) => {
          this.$axios.$post(api.savePrequalified(data)).then((res) => {
            let r = res.data.data;
            commit("PREQUALIFIED_FORM", r)
            resolve(r);
          })
        })
      }


}
export const getters = {}
