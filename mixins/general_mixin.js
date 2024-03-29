import moment from "moment";
export const optional = (value) => true;
export const sameValue = (value,formal)=>{
    console.log(formal)
    console.log(value)
  if (value == formal){

    return true;
  }
  return false;
}
export const rules = {
  required: value => !!value || "Required.",
  counter: value => value.length <= 20 || "Max 20 characters",
  pin: value => (value && value.length == 6) || 'Enter six digit sent to your mail',
  email: value => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "Invalid e-mail address.";
  },
  file: value => !value || value.size < 1000000 || 'file size should be less than 1 MB!',
  before_date: (value) => {
    let today = new Date();
    let given_date = new Date(value);
    if (given_date > today) {
      return false
      // return 'Date can\'t be greater than today'
    }
    return true
  },
  after_date:  (value) =>{
    let today = new Date();
    let given_date = new Date(value);
    if (given_date < today) {
      return false;
      //  return 'Date cannot be below today'
    }
    console.log("am true")
    return true

  },
  phone: function (value) {
    return value.match(/\d/g).length === 11 || 'invalid phone number';
  },
  main_phone: function (value) {
    let formats = "(999)9999-9999|999-9999-9999|99999999999";
    let r = RegExp("^(" +
      formats
      .replace(/([\(\)])/g, "\\$1")
      .replace(/9/g, "\\d") +
      ")$");
    return r.test(value);
    //  return r.test(value) || "Invalid phone number";
  }
}
export default{

  data(){
    return{
      yesNoOption: [{
        text: 'Yes',
        value: 1
      }, {
        text: 'No',
        value: '0'
      }],
       rules: {
           required: value => !!value || "Required.",
           counter: value => value.length <= 20 || "Max 20 characters",
           pin:  value  => (value && value.length==6)|| 'Enter six digit sent to your mail',
           email: value => {
             const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return pattern.test(value) || "Invalid e-mail address.";
           },
           file:value => !value || value.size < 1000000 || 'file size should be less than 1 MB!',
           before_date:function(value){
              let today = new Date();
              let given_date = new Date(value);
              if(given_date > today){
                return 'Date can\'t be greater than today'
              }
           },
           after_date:function(value){
             let today = new Date();
             let given_date = new Date(value);
            if (given_date < today ) {
                 return 'Date cannot be below today'
              }

           },
           phone:function(value){
              return value.match(/\d/g).length === 11 || 'invalid phone number';
           },
           main_phone:function(value){
             let formats = "(999)9999-9999|999-9999-9999|99999999999";
             let r = RegExp("^(" +
               formats
               .replace(/([\(\)])/g, "\\$1")
               .replace(/9/g, "\\d") +
               ")$");
               return r.test(value) || "Invalid phone number";
           }
      },
      pagination: {
        links: '',
        total: '',
        count: '',
        path: '',
        currentPage: '',
        next_page_url:'',
        prev_page_url:''
      },
    }

  },
  computed: {

        appBusy(){
          return this.$nuxt.$loading.show;
        },
        loading(){
          let l = this.$store.state.app.isLoading;
          return l;
        },
        property_type_list() {
            let t = this.$store.state.general.property_types;

            return t;
          },
        property_status_list() {
            let t = this.$store.state.general.property_status_list;
            // console.log('type:'+t)
            return t;
          },
        states() {
            let s = this.$store.state.general.states;
            return s;
        },

      user(){
        let u = this.$store.state.auth.user;
        return u;
      },
      appclient(){
        let u = this.$store.state.general.client;
        return u;
      },
      authStatus(){
          let u = this.$store.state.auth.loggedIn;
          return u;
      },
      getUserInitial() {
          // return 'AB'
          if(this.user){
              return this.user.firstname.charAt(0) + this.user.lastname.charAt(0);
          }

        }
     },
  methods:{
     checkValueExist(v) {
       if (v) {
         return v;
       }
       return '-'
     },
     getPosition(element) {
       var xPosition = 0;
       var yPosition = 0;

       while (element) {
         xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
         yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
         element = element.offsetParent;
       }

       return {
         x: xPosition,
         y: yPosition
       };
     },
      appLoading(status){
        this.$store.commit("app/IS_LOADING",status);
      },
      showErrorMsg(err,msg){
          if (err.response.data.data) {
            this.$apptoast.error(err.response.data.data);
          } else {
            this.$apptoast.error(msg);
          }
      },
       activateModal(event_name, value) {
         this.$nuxt.$emit(event_name, value)
       },

      showModal() {
          console.log('show modal')
          this.$nuxt.$emit('show-modal', true);
        },
        hideModal() {
          console.log('hide modal')
          this.$nuxt.$emit('hide-modal', false);
        },
        showAffordabilityModal() {
          this.$nuxt.$emit('open-affordability-modal', true);
        },
        showRequestModal() {
          console.log('request open')
          this.$nuxt.$emit('open-request-modal', true);
        },
    capitalizeFirst(s) {
        if (typeof s !== "string") return "";
        return s.toLowerCase();
      },
      clearCommas(value) {
        return parseFloat(value.replace(/,/g, ''));
      },
      formatCurrency(value) {
        const formatted = Number(value).toLocaleString("en");
        if (formatted === '0') return value;
        else if (formatted === 'NaN') return '';
        return formatted;
      },

      fillPagination(data) {
        this.pagination.links = data.links;
        this.pagination.total = data.total
        this.pagination.count = data.to;
        this.pagination.path = data.path;
        this.pagination.currentPage = data.current_page
      },
      // apis calls
       stateChange(state_id) {
         this.$store.dispatch("general/getAllCitiesAction", state_id)
       },
      fetchCities(state_id) {
        this.appLoading(true)
        this.$store.dispatch("general/getAllCitiesAction", state_id).then((res) => {
          this.appLoading(false)
        });
      },
      mapPropertyTypeId(type){
        let t = this.property_types;
        let id ='';
        for(let i=0; i<= t.length;i++){
          let n = t[i];
           if (n.name == type) {
             id = n.id;
             break;
           }
        }
        return id;

      },
      compare(dateTimeA, dateTimeB) {
         var momentA = moment(dateTimeA, "DD/MM/YYYY");
         var momentB = moment(dateTimeB, "DD/MM/YYYY");
         if (momentA > momentB) return 1;
         else if (momentA < momentB) return -1;
         else return 0;
       }
  }
}
