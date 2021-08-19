<template>
  <div>
        <div  id="verify">
            <h1>Verify Account </h1>
            <p class="sub-text">Enter the code sent to your email</p>
           <div class="form-container">
            <form @submit.prevent="verifyMycode">
              <div>
                 <span><img class="email" src='/img/login/email.svg' ></span>
                <input type='number' placeholder="code"  v-model="form.code" :class="{'is-invalid': submitted && $v.form.code.$error }">
                 <div v-if="submitted && !$v.form.code.required" class="form-error">Code  is required</div>


                <input type='submit'  value="Verify">
              </div>


              <div class=" mt-5 space-row">
                     <div class="cursor" @click="retry">Resend Code</div>
                     <div class="cursor" @click="logout">Logout</div>
              </div>
            </form>


           </div>
           </div>



  </div>
</template>

<script>
 import { required, email, minLength, sameAs,requiredIf,numeric } from "vuelidate/lib/validators";
 import general_mixin from "@/mixins/general_mixin";
  export default {
    layout:'auth',
    head(){
        return{
            link:[
                  { rel: 'stylesheet', href:"/css/custom/header-color.css"  },
            ]
        }
    },
    mixins:[general_mixin],
    data() {
      return {
            // loading:false,
            submitted:false,
            form:{
              code:'',

            }
      }
    },
    validations:{
      form:{
        code:{required,numeric}
      }
    },
    computed: {

    },
    methods: {
      retry() {
        this.$store.dispatch("app/resendCodeAction").then((res)=>{
          let m =  res.data;
          toast.success(m);
        });
      },
     async verifyMycode(){
        this.submitted=true;
        this.$v.$touch();
          if (this.$v.$invalid) {
              // this.scrollErrorSection();
              return;
          }
        this.appLoading(true);
        try{
          let result = await this.$store.dispatch("app/verifyUserMailAction",this.form);
          if(result){
            console.log('verify result:', result);
             this.appLoading(false);
             this.$auth.setUser(result)
               this.$apptoast.success('Email verified successfully');
              this.$router.push('/dashboard');
          }
          this.appLoading(false);

        }catch(err){
          this.appLoading(false);
          console.log(err.response.data.data[0]);
          this.showErrorMsg(err,'could not verified email, try again');
        }
      },
      logout(){
        this.$auth.logout();
      }
    },
  }
</script>

<style lang="scss" scoped>
.sub-text{
  margin-top:-1rem;
  margin-bottom: 1rem;
}
.space-row{
  display: flex;
  justify-content: space-between;
}
</style>
