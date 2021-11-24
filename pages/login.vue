<template>
  <div>
    <!-- <section   class="login">
    <div class="login-container">
        <div class="left item">

        </div>



    </div>
</section> -->

            <h1>Log In</h1>
           <div class="form-container">
            <form @submit.prevent="login">
              <div class="form-group">
                      <span><img class="email" src='/img/login/email.svg' ></span>
                <input  type='email' placeholder="Email address" id="email" v-model="login_form.email" :class="{'is-invalid': submitted && $v.login_form.email.$error }">
                  <div v-if="submitted && !$v.login_form.email.required" class="form-error">Email is required</div>
                  <div v-if="submitted && !$v.login_form.email.email" class="form-error">valid Email is required</div>
              </div>
                <!-- <div class="my-5"></div> -->
                <div class="form-group mt-3">
                  <span><img class="lock" src='/img/login/lock.svg' ></span>
                  <input type='password' placeholder="Password" id="email" v-model="login_form.password" :class="{'is-invalid': submitted && $v.login_form.password.$error }">
                  <div v-if="submitted && !$v.login_form.password.required" class="form-error">Password is required</div>
                </div>


                <div class="forgot-password mt-3">
                  <nuxt-link to="/forgot" class="anchor"> <span>Forgot password?</span> </nuxt-link>

                  </div>

                <input type='submit' id="email" name="email" :value="loading?'Loading...':'Login'">
                <div class="signup mt-3">Do not have an account? <nuxt-link to="/register">&nbsp; Sign Up</nuxt-link> </div>

                <!-- <div class="google-signon">
                    <span><img src='/img/login/google.svg' ></span>

                    <span>Continue with Google</span>
                </div> -->

            </form>

           </div>


  </div>
</template>

<script>
 import { required, email, minLength, sameAs,requiredIf,numeric } from "vuelidate/lib/validators";
 import general_mixin from "@/mixins/general_mixin";
 import form_mixin from "@/mixins/form_mixin";
  export default {
    layout:'auth',
    middleware:['app_guest'],
    head(){
          return{
              link:[
                    { rel: 'stylesheet', href:"/css/custom/header-color.css"  },
              ]
          }
    },

    name:"login",
    mixins: [general_mixin,form_mixin],
  data() {
    return {
      show_pass: false,
      submitted:false,
      busy:false,
      login_form: {
        email: "",
        password: ""
      },


      theme:false,

    }
  },
   validations: {
        login_form: {
            email: { required,email},
            password: { required, },
            // email: { required, email },
            // password: { required, minLength: minLength(6) },
            // confirmPassword: { required, sameAsPassword: sameAs('password') }
        }
    },
  computed: {
    showtheme(){
      if(this.theme){
        return $vuetify.theme.themes.light
      }
      return $vuetify.theme.themes.dark
    }
  },
  methods: {
    toggle(){
      return this.theme != this.theme;
    },
    goForgot() {
      this.$router.push({
        name: "forgot"
      });
    },
    async login() {
         this.submitted=true
          this.$v.$touch();
          if (this.$v.$invalid) {
              this.scrollErrorSection();
              return;
          }

            try{
            this.appLoading(true);
            let response =  await this.$auth.loginWith('local', { data: this.login_form});
            let data = response.data;

            let u = this.$store.state.auth.user;
            this.$store.commit("profile/PREFILL_PERSONAL_FORM",u);

            if(data.token){
              this.appLoading(false);
              this.$router.push("/dashboard")
              this.$apptoast.success('Successfully authenticated');
            }else{
                this.appLoading(false);
            }
            }catch(err){
              this.appLoading(false);
              console.log(err);
                let e = err.response.data.data;
            this.$apptoast.error(e)
            }
  }
  }
  }
</script>

<style lang="scss" scoped>
.login-container .right .form-container form input {
  margin-bottom: 0;
}
.login-container .right .form-container form span img.lock {
    top: 24%;
}
</style>
