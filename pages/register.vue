<template>
  <div>
      <section   class="signup">
    <div class="signup-container">
        <div class="left item">
        
        </div>

        <div class="right item">
            <h1>Signup</h1>
           <div class="form-container">
            <form>
                <span><img class="email" src='/img/login/email.svg' ></span>
                <input required type='email' placeholder="Email address" id="email" name="email">

                <span><img class="lock" src='/img/login/lock.svg' ></span>
                <input required type='password' placeholder="Password" id="email" name="email">

                <span><img class="lock2" src='/img/login/lock.svg' ></span>
                <input required type='password' placeholder="Confirm Password" >


                


                <div class="forgot-password"><span>This must be corrected with the password</span></div>

                <input type='submit'  value="Signup">
                <div class="signup">Already have an account? <a href="login.html"> &nbsp; Login</a> </div>

                <div class="google-signon">
                    <span><img src='/img/login/google.svg' ></span>

                    <span>Continue with Google</span>
                </div>
                
            </form>

           </div> 
           
        </div>

    </div>
</section>
  </div>
</template>

<script>
  export default {
    auth:false
  }
</script>

<style lang="scss" scoped>

</style>
