<template>
  <div>
            <h1>Forgot Password</h1>
           <div class="form-container">
            <form>
                <span><img class="email" src='/img/login/email.svg' ></span>
                <input required type='email' placeholder="Email address" id="email" name="email">

                <!-- <div class="forgot-password"><span>Forgot password?</span></div> -->

                <input type='submit' id="email" name="email" value="Submit">
                <div class="signup">Back to  <nuxt-link to="/login">&nbsp; Login</nuxt-link> </div>

                <!-- <div class="google-signon">
                    <span><img src='/img/login/google.svg' ></span>

                    <span>Continue with Google</span>
                </div> -->

            </form>

           </div>


  </div>
</template>

<script>
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
