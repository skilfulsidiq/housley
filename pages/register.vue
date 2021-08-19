<template>
  <div>
            <h1>Signup</h1>
           <div class="form-container">
            <form @submit.prevent="register">
              <div>
                <span><img class="email" src='/img/login/email.svg' ></span>
                <input required type='email' placeholder="Email address" v-model="form.email" id="email" >
                 <div v-if="submitted && !$v.form.email.required" class="form-error">Valid email is required</div>
              </div>


                <div>
                  <span><img class="lock" src='/img/login/lock.svg' ></span>
                <input required type='password' placeholder="Password" v-model="form.password">

                 <div v-if="submitted && !$v.form.password.required" class="form-error">password is required</div>
                 <div v-if="submitted && !$v.form.password.minLength" class="form-error">Password must have at least 6 characters</div>
                </div>

               <div>
                  <span><img class="lock2" src='/img/login/lock.svg' ></span>
                <input required type='password' placeholder="Confirm Password"  v-model="form.confirm_password">
                 <div v-if="submitted && !$v.form.password.sameAsPassword" class="form-error">Password must be identical</div>
               </div>





                <!-- <div class="forgot-password"><span>This must be corrected with the password</span></div> -->

                <input type='submit'  value="Signup">
                <div class="signup">Already have an account? <nuxt-link to="/login">&nbsp; Login</nuxt-link>
                   </div>

                <div class="google-signon">
                    <span><img src='/img/login/google.svg' ></span>

                    <span>Continue with Google</span>
                </div>

            </form>

           </div>
  </div>
</template>

<script>
 import { required, email, minLength, sameAs,requiredIf,numeric } from "vuelidate/lib/validators";
  export default {
    layout:'auth',
    auth:'guest',
    middleware:['app_guest'],
    head(){
            return{
                link:[
                      { rel: 'stylesheet', href:"/css/custom/header-color.css"  },
                ]
            }
        },
        data(){
          return{
            submitted:false,
            form:{
              email:'',
              password:'',
              confirm_password:''
            }
          }
        },
        validations: {
            form: {
                  email: { required, email },
                  password: { required,minLength:minLength(6) },
                  confirm_password:{ sameAsPassword: sameAs('password')},
            }
      },
      computed:{
          user_form(){
            return this.$store.state.calculator.form;
          }
      },
      methods:{
        register(){
           this.submitted=true
                  this.$v.$touch();
                  if (this.$v.$invalid) {
                        return;
                  }
        }
      },
      created(){
        this.form.email = this.user_form.email
      }
  }
</script>

<style lang="scss" scoped>

</style>
