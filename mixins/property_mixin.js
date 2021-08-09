export default{
  methods: {


    chooseProperty(){
      this.$store.commit("property/SELECTED_PROPERTY", this.property);
      this.$router.push("/affordability")
    }
  },
}
