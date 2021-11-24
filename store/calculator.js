import api from '@/services/api'
export const state = () => ({
  form: {
    lender_id:'',
    broker_id:'',
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
  totalStep: 5,
  propertyIsSelected:true,
  request_form:{
    property_value:'',
    state_id: '',
      city_id: '',
      property_type_id: '',
      property_bedroom: '',
      property_bathroom: '',
      property_id: '',
      found_property: '',
  },
  mortgage_form:{
    lender_id: '',
    broker_id: '',
    loan_amount: '',
    down_payment: '',
    down_rate: '',
    property_value:'',
    loan_tenure:'',
    monthly_repayment:''
  }
})
export const mutations = {
  PREQUALIFIED_FORM(state, payload) {
    state.form = payload
  },
  CLEAR_FORM(state, payload) {
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
    state.form.monthly_payment = payload.monthly_repayment;
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
  SAVE_SELECTED_LENDER(state,payload){
    state.mortgage_form.lender_id = payload
  },
  SAVE_SELECTED_BROKER(state,payload){
    state.mortgage_form.broker_id = payload
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
    // state.request_form.property_value = payload.property_value;
    // state.request_form.city_id = payload.city_id
    // state.request_form.state_id = payload.state_id
    // state.request_form.property_bathroom = payload.property_bathrooms
    // state.request_form.property_bedroom = payload.property_bedrooms
    // state.request_form.found_property = 0;
  },
  SAVE_SELECTED_PROPERTY(state, payload) {
    state.request_form=payload
    state.form.property_value = payload.property_value;
    state.form.city_id = payload.city_id
    state.form.state_id = payload.state_id
    state.form.property_bathroom = payload.property_bathrooms
    state.form.property_bedroom = payload.property_bedrooms
    state.form.found_property = 1;
  },
  UPDATE_USER_REQUEST(state, payload) {
     state.form.property_value = payload.property_value;
     state.form.city_id = payload.city_id
     state.form.state_id = payload.state_id
     state.form.property_bathroom = payload.property_bathrooms
     state.form.property_bedroom = payload.property_bedrooms
     state.form.found_property = 1;
    state.request_form.property_value = payload.property_value;
    state.request_form.city_id = payload.city_id
    state.request_form.state_id = payload.state_id
    state.request_form.property_bathroom = payload.property_bathrooms
    state.request_form.property_bedroom = payload.property_bedrooms
    state.request_form.property_id = payload.id
    state.request_form.found_property = payload.found_property;
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
  PROPERTY_IS_SELECTED(state, payload) {
    state.propertyIsSelected = payload
  },



}
export const actions = {

  async calculateAffordabilityAction({ commit}, form) {
    // commit("SAVE_AFFORDABILITY_FORM", form);
    console.log(form)
    let res = await this.$axios.$post(api.updateAffordabilityInfo(), form);
    // let res = await this.$axios.$post(api.calculateAffordability(), form);
    let d = res.data;
    commit("AFFORDABILITY_RESULT", d);
    return res;
    // return new Promise((resolve, reject) => {
    //   console.log("submitted affordability: ", form)
    //   this.$axios.$post(api.calculateAffordability(), form).then((res) => {
    //     let d = res.data;
    //     console.log(d);
    //     commit("AFFORDABILITY_RESULT", d);
    //     resolve(d);
    //     return d;
    //   })
    // });
    //     commit("AFFORDABILITY_RESULT", form);
  },
  saveAffordabilityFormAction({
    commit
  }, form) {
    commit("SAVE_AFFORDABILITY_FORM", form);
  },
  saveEligibilityFormAction({
    commit
  }, form) {
    commit("SAVE_ELIGIBILITY_FORM", form);
  },
  saveProfileFormAction({
    commit
  }, form) {
    commit("SAVE_PROFILE_FORM", form);
  },
  async processStatusAction({
    commit
  }, form) {
    commit("PROCESS_STATUS", form);
  },
  async formStepAction({
    commit
  }, step) {
    commit("FORM_STEP", step);
    // EventBus.$emit('next-step',step);

  },
  async submitPreQualifiedAction({
    commit
  }, data) {
    // console.log(data);
    // let res = await this.$axios.$post(api.savePrequalified(), data);
    return new Promise((resolve, reject) => {
      this.$axios.$post(api.savePrequalified(), data).then((res) => {
        let r = res.data;
        commit("PREQUALIFIED_FORM", r)
        if (this.$auth.user) {
          this.$auth.setUser(r);
        }
        // console.log("data submitted")
        resolve(r);
        // return r;
      }).catch(err => {
        reject(err);
      })
    })
  },
  saveUserRequestWithAuthAction({
    commit
  }, form) {
    // commit("SAVE_PROPERTY_REQUEST_DATA".profile);
    return new Promise((resolve, reject) => {
      this.$axios.$post(api.updateRequestInfo(), form).then((res) => {
        let y = res.data;
        commit("UPDATE_USER_REQUEST", y);

        resolve(y)
      }).catch((err) => {
        reject(err);
      })
    })

  },


}
export const getters = {}
