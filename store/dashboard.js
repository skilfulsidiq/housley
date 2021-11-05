import api from '@/services/api'
export const state = () => ({
  document_count: '',
  property_request: '',
  pending_documents: [],
  uploaded_documents: [],
  documents: '',
  user_mortgages: [],
  user_mortgage_detail: '',
  property_request: ''
})
export const mutations = {
  DOCUMENT_COUNT(state, payload) {
    state.document_count = payload

  },
  DOCUMENT_LIST(state, payload) {
    state.pending_documents = payload.pending
    state.uploaded_documents = payload.uploaded
  },
  USER_MORTGAGES(state, payload) {
    state.user_mortgages = payload
  },
  MORTGAGE_DETAIL(state, payload) {
    state.user_mortgage_detail = payload
  },

  // MORTGAGE_STATUS(state, payload) {
  //   state.mortgage_status = payload
  // },
  // MORTGAGE_LIST(state, payload) {
  //   state.mortgages_list = payload
  // },
  // MORTGAGE_DETAIL(state, payload) {
  //   state.mortgage_details = payload
  // },
  PROPERTY_REQUEST(state, payload) {
    state.property_request = payload
  },


}
export const actions = {
  async getDocumentCountAction({
    commit
  }) {
    let res = await this.$axios.$get(api.userDocumentCount());
    let r = res.data.data;
    console.log("document count: ", r)
    commit("DOCUMENT_COUNT", r);
    return r;
  },
  async getDocumentListAction({
    commit
  }) {
    let res = await this.$axios.$get(api.userFileList());
    let r = res.data;
    commit("DOCUMENT_LIST", r);
    return r;
  },
  async getRequiredDocumentListAction({
    commit
  }) {
    let res = await this.$axios.$get(api.requiredFileList());
    let r = res.data;
    commit("REQUIRED_FILE_LIST", r);
    return r;
  },
  async getUploadDocumentAction({
    commit
  }) {
    let res = await this.$axios.$post(api.userUploadFile());
    let r = res.data;
    console.log("document upload: ", r)
    commit("DOCUMENT_LIST", r);
    return r;
  },
  async afterUploadSaveFileAction({
    commit
  }, form) {
    let res = await this.$axios.$post(api.userUploadFileFromClient(), form);
    let r = res.data;
    console.log("document upload: ", r)
    commit("DOCUMENT_LIST", r);
    return r;
  },
  async deleteFromCloudinary({
    commit
  }, id) {
    let res = await this.$axios.$delete(api.userdeleteFileFromClient(id));
    let r = res.data;
    console.log("document upload: ", r)
    commit("DOCUMENT_LIST", r);
    return r;
  },
  async getdeleteDocumentAction({
    commit
  }, id) {
    let res = await this.$axios.$get(api.userDeleteFile(id));
    let r = res.data;
    console.log("document deleted: ", r)
    // commit("DOCUMENT_LIST",r);
    return r;
  },

  async getUserPropertyRequestAction({
    commit
  }) {
    let res = await this.$axios.$get(api.userPropertyRequest());
    let r = res.data;
    console.log("property request: ", r)
    commit("PROPERTY_REQUEST", r);
    return r;
  },
  // mortgages
  async getMortgageListAction({
    commit
  }) {
    let res = await this.$axios.$get(api.userMortgageList());
    let r = res.data;
    console.log("mortgage list: ", r)

    commit("USER_MORTGAGES", r);
    return r;
  },
  getMortgageDetailsAction({
    commit
  }, slug) {
    // return new Promise((resolve,reject)=>{
    this.$axios.$get(api.userMortgageDetail(slug)).then((res) => {
      let r = res.data.data;

      commit("MORTGAGE_DETAIL", r);
      // resolve(r)
    }).catch((err) => {
      // reject(err);
      // });
    })
  }
}
export const getters = {}
