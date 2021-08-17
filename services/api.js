export default {

   login() {
    return   "/api/login";
  },
   register() {
    return   "/api/register";
  },
   changepassword() {
    return   "/api/lender/change-password";
  },
   updateprofile() {
    return   "api/lender/update-profile";
  },
   allStates() {
    return  "/api/general/all-states";
  },
   allPaymentOption() {
     return "/api/general/finance-option"
   },
   allCitiesInState(state_id) {
    return  "/api/general/all-cities/" + state_id;
  },
   propertyTypeList() {
    return   "/api/general/all-special-types";
  },
   propertyStatusList() {
    return   "/api/general/property-status";
  },
   calculateAffordability() {
    return   "/api/general/affordability-test";
  },
   fetchAffordableProperties() {
    // let r = data.amount + '/' + data.location;
    return   "/api/general/property-affordability";
  },
   fetchLenderRate() {
    return   "/api/general/lender-rates";
  },
   fetchAllProperties() {
    return   "/api/general/all-properties";
  },

   featuredProperties() {
    return   "/api/general/featured-properties";
  },
   recentProperties() {
    return   "/api/general/recent-properties";
  },
   belowPriceProperties(price) {
    return   "/api/general/property-below-price/" + price;
  },
  searchProperties(data) {
    return   "/api/general/search-properties";
  },
   propertyDetail(slug) {
    return   "/api/general/property-detail/" + slug;
  },
   savePrequalified() {
    return   "/api/general/profile-request";
  },
   saveBookTour() {
    return   "/api/general/book-tour";
  },
   propertyEnquiry() {
    return   "/api/general/property-enquiry";
  },
   saveUserRequestWithoutAuth() {
    return   "/api/general/save-property-request-no-auth";
  }



}
