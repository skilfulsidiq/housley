<template>
  <div>
        <div  id="verify">
            <h1>Verify Account</h1>
           <div class="form-container">
            <form>
                <span><img class="email" src='/img/login/email.svg' ></span>
                <input required type='email' placeholder="Email address" id="email" name="email">

                <span><img class="lock" src='/img/login/lock.svg' ></span>
                <input required type='password' placeholder="Password" id="email" name="email">

                <input type='submit' id="email" name="email" value="Submit">
                <div class="signup">Do not have an account? <a href="#">Sign Up</a> </div>

                <div class="google-signon">
                    <span><img src='/img/login/google.svg' ></span>

                    <span>Continue with Google</span>
                </div>

            </form>

           </div>
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
