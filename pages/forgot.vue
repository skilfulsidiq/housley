<template>
  <div>
    <!-- <section   class="login">
    <div class="login-container">
        <div class="left item">
        
        </div>

      

    </div>
</section> -->
  <div class="right item">
            <h1>Forgot Password</h1>
           <div class="form-container">
            <form>
                <span><img class="email" src='/img/login/email.svg' ></span>
                <input required type='email' placeholder="Email address" id="email" name="email">

                <div class="forgot-password"><span>Forgot password?</span></div>

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
  export default {
    layout:'auth'
  }
</script>

<style lang="scss" scoped>

</style>
