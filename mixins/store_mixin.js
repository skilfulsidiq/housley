
export default {

  computed: {
    loading() {
      let l = this.$store.state.app.isLoading;
      return l;
    },
    user(){
      let user =  this.$store.state.auth.user;
      // this.$store.commit("genenral/COMPANY_ID",user.client_id);
      return user;
    },
    property_types() {
      return this.$store.state.general.property_types;
    },
    allStates() {
      let s = this.$store.state.general.states;
      return s;
    },
    allCities() {
      let s = this.$store.state.general.cities;
      return s;
    },
    financeOptions() {
      return this.$store.state.general.finance_options
    },

  },

  methods: {
          mapPropertyTypeId(type) {
            if(type){
              let t = this.$store.state.general.property_types;
              let id = '';
              t.forEach((item)=>{
                 if (item.name == type) {
                   id = item.id;
                   return id;
                 }
              })
              // for (let i = 0; i <= t.length; i++) {
              //   let n = t[i];
              //   if (n.name == type) {
              //     id = n.id;
              //     break;
              //   }
              // }
              return id;
            }


          },
  }
}
