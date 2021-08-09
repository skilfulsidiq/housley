import api from '../services/api'
export  const state = ()=>({
 property_types: '',
   property_status_list: [],
   states: [],
   cities: [],
   lender_rates: []
})
export const mutations ={
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
      }
}
export const actions={
 async getLenderRateAction({commit}){
    await this.$axios.$get(api.fetchLenderRate()).then((res)=>{
        let r = res.data;
        commit("LENDER_RATE",r);
    })
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
     return r;
  },
 async getPropertyTypeAction({commit}){
     let res = await this.$axios.$get(api.propertyTypeList());

            let r = res.data;
            commit("PROPERTY_TYPE",r);
      return r;

  },
  getPropertyStatusAction({commit}){
        this.$axios.$get(api.propertyStatusList()).then((res) => {
            // console.log(res);
            let r = res.data;
            commit("PROPERTY_STATUS_LIST", r);
        })
    },
}
export const getters={}
