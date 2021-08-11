export default {

   login() {
    return   "login";
  },
   register() {
    return   "agent/register";
  },
   changepassword() {
    return   "lender/change-password";
  },
   updateprofile() {
    return   "lender/update-profile";
  },
   allStates() {
    return  "general/all-states";
  },
   allCitiesInState(state_id) {
    return  "general/all-cities/" + state_id;
  },
   propertyTypeList() {
    return   "general/all-special-types";
  },
   propertyStatusList() {
    return   "general/property-status";
  },
   calculateAffordability() {
    return   "general/affordability-test";
  },
   fetchAffordableProperties() {
    // let r = data.amount + '/' + data.location;
    return   "general/property-affordability";
  },
   fetchLenderRate() {
    return   "general/lender-rates";
  },
   fetchAllProperties() {
    return   "general/all-properties";
  },

   featuredProperties() {
    return   "general/featured-properties";
  },
   recentProperties() {
    return   "general/recent-properties";
  },
   belowPriceProperties(price) {
    return   "general/property-below-price/" + price;
  },
  searchProperties(data) {
    return   "general/search-properties";
  },
   propertyDetail(slug) {
    return   "general/property-detail/" + slug;
  },
   savePrequalified() {
    return   "general/profile-request";
  },
   saveBookTour() {
    return   "general/book-tour";
  },
   propertyEnquiry() {
    return   "general/property-enquiry";
  }



}
