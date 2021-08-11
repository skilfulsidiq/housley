import api from '@/services/api'
export  const state = ()=>({
    selectedProperty: '',
      list_style: 'all',
      affordable_properties: [],
      properties: [],
      featured_properties: [],
      recent_properties: [],
      below_price_properties: [],
      property: '',
      search_form:''
})
export const mutations ={
  LIST_STYLE(state, payload) {
      state.list_style = payload
    },
    SEARCH_FORM(state,payload){
      state.search_form = payload
    },
    AFFORDABILITY_RESULT(state, payload) {
      state.affordabilityResult = payload
    },
    ALL_PROPERTIES(state, payload) {
      state.properties = payload
    },
    SEARCH_PROPERTIES(state, payload) {
      state.properties = payload
    },
    FEATURED_PROPERTIES(state, payload) {
      state.featured_properties = payload
    },
    RECENT_PROPERTIES(state, payload) {
      state.recent_properties = payload
    },
    BELOW_PRICE_PROPERTIES(state, payload) {
      state.below_price_properties = payload
    },
    PROPERTY_DETAIL(state, payload) {
      state.property = payload;
    },
    SELECTED_PROPERTY(state, payload) {
      state.selectedProperty = payload

    },
    CALCULATION_REQUEST(state) {
      state.calculating = true;
    },
    AFFORDABLE_PROPERTIES(state, payload) {
      state.affordable_properties = payload;
    },

    AFFORDABILITY_REQUEST_SUCCESS(state, data) {
      state.calculating = false;
      hasAffordability = true;
    },
    ELIGIBILITY_REQUEST_SUCCESS(state, data) {
      state.calculating = false;
      hasEligibility = true;
    },

}
export const actions={
  async paginationAction({commit }, data) {
    let url = data.url;
    let mutator = data.mutator;
    let method = data.method
    let form = data.form;
    let res='';
    if(method=='post'){
      res = await this.$axios.post(url,form);
    }else{
      res = await this.$axios.get(url);
    }
    let r = res.data;
      commit(mutator, r);
  },
  async calculateAffordabilityAction({commit }, form) {
      commit("AFFORDABILITY_RESULT", form);
  },
  selectPropertyAction({commit }, pro) {
    commit("SELECTED_PROPERTY", pro);

  },
  async affordablePropertiesAction({commit }, data) {
    await this.$axios.$post(api.fetchAffordableProperties(),data).then((res) => {
    let r = res.data;
    commit("AFFORDABLE_PROPERTIES", r);
    return r;
    })
  },
  async allPropertiesAction({ commit }) {
    await this.$axios.$get(api.fetchAllProperties()).then((res) => {
        let r = res.data;
        commit("ALL_PROPERTIES", r);
    })
  },
  async paginationAction({commit},data){
        let url = data.url;
        let mutator = data.mutator;
        let method = data.method
        let form = data.form;
        let res = "";
        if(method=="post"){
          res = await this.$axios.$post(url,form);
        }else{
          res = await this.$axios.$get(url);
        }
        let r = res.data;
        console.log(r)
        // commit("LIST_STYLE", 'all');
        commit(mutator, r);
        return r;

  },
  searchPropertiesAction({ commit }, data) {
    return new Promise((resolve, reject) => {
        return this.$axios.$post(api.searchProperties(),data).then((res) => {
            let r = res.data;
            commit("SEARCH_PROPERTIES", r);
            resolve(r);
        }).catch(err=>{
          reject(err)
        })
    })

  },
  async featuredPropertiesAction({commit  }) {
    await this.$axios.$get(api.featuredProperties()).then((res) => {
        let r = res.data;
        commit("FEATURED_PROPERTIES", r);
    })
  },
  async belowPricePropertiesAction({ commit }, price) {
      await this.$axios.$get(api.belowPriceProperties(price)).then((res) => {
          let r = res.data.data;
          commit("BELOW_PRICE_PROPERTIES", r);
      })
  },
  async recentPropertiesAction({  commit}) {
      await this.$axios.$get(api.recentProperties()).then((res) => {
          let r = res.data;
          commit("RECENT_PROPERTIES", r);
      })
  },
  async propertyDetailAction({commit}, slug) {
      await this.$axios.$get(api.propertyDetail(slug)).then((res) => {
          let r = res.data;
          commit("PROPERTY_DETAIL", r);
      })
  },
  async saveTourScheduleAction({commit},data){
      return new Promise((resolve,reject)=>{
          this.$axios.$post(api.saveBookTour(),data).then((res) => {
              resolve(res);
          })
      }).catch(err=>{
        reject(err);
      })
  },
  async savePropertyEnquiryAction({commit},data){
      return new Promise((resolve,reject)=>{
         this.$axios.$post( api.propertyEnquiry(),data).then((res) => {
              resolve(res);
          })
      }).catch(err=>{
        reject(err);
      })
  }
}
export const getters={}
