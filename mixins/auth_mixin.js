import moment from "moment";
export default {

  computed: {

    user() {
      return this.$store.state.auth.user;
    },
    authStatus() {
      return this.$store.state.auth.loggedIn;

    },
    getUserInitial() {
      // let u = this.$store.state.auth.user;
      // if(u !=null){
      //   return u.firstname.charAt(0) + u.lastname.charAt(0);
      // }
      return '';
    }
  },

  methods: {
    logout(){
       this.$auth.logout();
    }
  }
}
