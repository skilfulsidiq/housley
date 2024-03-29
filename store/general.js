import api from '../services/api'
export  const state = ()=>({
  client: '',
  property_types: [],
   property_status_list: [],
   states: [],
   cities: [],
   lender_rates: [],
   payment_options:[],
   lenders: [],
  brokers: [],
  developers: [],
   mortgage_checklist: [],
})
export const mutations ={
  APP_CLIENT(state, payload) {
    state.client = payload
  },
    UPDATE_STATES(state, payload) {
        state.states = payload
      },
      UPDATE_CITIES(state, payload) {
        state.cities = payload
      },
      PROPERTY_TYPE(state, payload) {
        state.property_types = payload
      },
      PROPERTY_STATUS_LIST(state, payload) {
        state.property_status_list = payload;
      },
      LENDER_RATE(state, payload) {
        state.lender_rates = payload;
      },
    ALL_LENDERS(state, payload) {
        state.lenders = payload
      },
      ALL_DEVELOPERS(state, payload) {
        state.developers = payload
      },
      ALL_BROKERS(state, payload) {
        state.brokers = payload
      },
       UPDATE_FINANCE_OPTION(state, payload) {
         state.payment_options = payload
       },
    MORTGAGE_CHECKLIST(state, payload) {
      state.mortgage_checklist = payload
    }
}
export const actions={
   async getClientAction({
     commit
   }) {
     let res = await this.$axios.$get(api.getAppClient());
     let c = res.data;
     commit("APP_CLIENT", c);
     return c;
   },
 async getLenderRateAction({commit}){
    await this.$axios.$get(api.fetchLenderRate()).then((res)=>{
        let r = res.data;
        commit("LENDER_RATE",r);
    })
  },
   async getPartnerType({commit}, type) {
     let res = await this.$axios.$get(api.fetchPartnersType(type));
     let r = res.data;
     if (type == 'lender') {
       commit("ALL_LENDERS", r);
     }
     if (type == 'developer') {
       commit("ALL_DEVELOPERS", r);
     }
     if (type == 'broker') {
       commit("ALL_BROKERS", r);
     }
     return res;
   },
  async getAllStatesAction({commit }) {
      await this.$axios.$get(api.allStates()).then((res) => {
          let y = res.data;
          commit("UPDATE_STATES", y);
          return y;
      });
  },
  async getAllCitiesAction({commit}, state_id) {
       let res = await this.$axios.$get(api.allCitiesInState(state_id));
          let y = res.data;
          commit("UPDATE_CITIES", y);
     return y;
  },
 async getPropertyTypeAction({commit}){
     let res = await this.$axios.$get(api.propertyTypeList());

            let r = res.data;
            commit("PROPERTY_TYPE",r);
      return r;

  },
   async getAllFinanceOptionAction({
     commit
   }) {
     let res = await this.$axios.$get(api.allPaymentOption());
     let y = res.data;
     commit("UPDATE_FINANCE_OPTION", y);
     return y;

   },
  getPropertyStatusAction({commit}){
        this.$axios.$get(api.propertyStatusList()).then((res) => {
            // console.log(res);
            let r = res.data;
            commit("PROPERTY_STATUS_LIST", r);
        })
    },
    async getMortgageChecklistAction({ commit}) {
     let res = await this.$axios.$get(api.mortgageCheckList());
     let y = res.data;
     commit("MORTGAGE_CHECKLIST", y);
     return res;
  }

}
export const getters={}
