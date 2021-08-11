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
            <form>
                <span><img class="email" src='/img/login/email.svg' ></span>
                <input required type='email' placeholder="Email address" id="email" name="email">

                <span><img class="lock" src='/img/login/lock.svg' ></span>
                <input required type='password' placeholder="Password" id="email" name="email">

                <div class="forgot-password">
                  <nuxt-link to="/forgot" class="anchor"> <span>Forgot password?</span> </nuxt-link>

                  </div>

                <input type='submit' id="email" name="email" value="Login">
                <div class="signup">Do not have an account? <nuxt-link to="/register">&nbsp; Sign Up</nuxt-link> </div>

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
       head(){
            return{
                link:[
                      { rel: 'stylesheet', href:"/css/custom/header-color.css"  },
                ]
            }
        },
  }
</script>

<style lang="scss" scoped>

</style>
