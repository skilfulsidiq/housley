export default {

  login() {
    return "/auth/login";
  },
  register() {
    return "/auth/register";
  },
  registerUpdate() {
    return "/auth/register-update";
  },
  forgotPassword() {
    return "/auth/forgot-password";
  },
  verifyUserEmail() {
    return 'user/verify-account'
  },
  changePasswordByForgot() {
    return "/auth/change-password-code";
  },
  updateprofile() {
    return "/lender/update-profile";
  },

  getAppClient() {
    // return 'general/app-client'
  },
  allStates() {
    return "/general/all-states";
  },
  allPaymentOption() {
    return "/general/finance-option"
  },
  allCitiesInState(state_id) {
    return "/general/all-cities/" + state_id;
  },
  propertyTypeList() {
    return "/general/all-special-types";
  },
  propertyStatusList() {
    return "/general/property-status";
  },
  calculateAffordability() {
    return "/general/affordability-test";
  },
  fetchAffordableProperties() {
    // let r = data.amount + '/' + data.location;
    return "/general/property-affordability";
  },
  fetchLenderRate() {
    return "/general/lender-rates";
  },
  fetchPartnersType(type) {
    return "/general/partner-type/"+type;
  },
  fetchAllProperties() {
    return "/general/all-properties";
  },

  featuredProperties() {
    return "/general/featured-properties";
  },
  recentProperties() {
    return "/general/recent-properties";
  },
  belowPriceProperties(price) {
    return "/general/property-below-price/" + price;
  },
  searchProperties(data) {
    return "/general/search-properties";
  },
  propertyDetail(slug) {
    return "/general/property-detail/" + slug;
  },
  savePrequalified() {
    return "/general/profile-request";
  },
  saveBookTour() {
    return "/general/book-tour";
  },
  propertyEnquiry() {
    return "/general/property-enquiry";
  },
  saveUserRequestWithoutAuth() {
    return "/general/save-property-request-no-auth";
  },
 mortgageCheckList() {
   return "general/mortgage-checklists"
 },
  //dashboard
  getUserProfile() {
    return "user/get-profile"
  },
  updateProfileInfo() {
    return 'user/profile'
  },
  updateAffordabilityInfo() {
    return 'user/affordability-test'
  },
  updateRequestInfo() {
    return 'user/property-request'
  },
  userMortgageStatus() {
    return "user/get-user-last-mortgage"
  },
  userMortgageList() {
    return "user/get-user-mortgages"
  },
  userMortgageDetail(slug) {
    return "user/user-mortgage-detail/" + slug
  },
  userDocumentCount() {
    return "user/document-count"
  },
  userPropertyRequest() {
    return "user/get-user-request"
    // return "user/user-property-request"
  },
  userFileList() {
    return "user/user-files"
  },
  userUploadFile() {
    return "user/user-upload-file"

  },
  userUploadFileFromClient() {
    return "user/user-upload-file-client"

  },
  userDeleteFile(id) {
    return "user/user-delete-file/" + id
  },
  getUserRequest() {
    return "user/get-user-request";
  },
  userApplyForMortgage() {
    return "user/apply-mortgage";
  },
  userAgreeToMortgage() {
    return "user/agree-to-terms";
  },
   userCompleteMortgageApplication() {
     return "user/complete-application";
   }



}
