<template>
  <div>
      <section id="header" class="trasparent" >
    <!--Transparent header-->
    <div class="trasparent-container">
      <div class="logo">
        <nuxt-link to="/">
          <img src="/img/logo/houzzley-white-logo.svg" />
        </nuxt-link>
      </div>
      <div class="navigation">
        <nav>
          <ul>
            <li><nuxt-link to="/info/about">About Us</nuxt-link></li>
            <li><nuxt-link to="/pre-approval">Pre-approval</nuxt-link></li>
            <li><nuxt-link :to="{name:'properties'}">Property</nuxt-link></li>
            <li><nuxt-link to="/info/mortgage">Mortgage</nuxt-link></li>
            <li><nuxt-link to="/info/contact">Contact Us</nuxt-link></li>
            <li><nuxt-link to="/info/faq">FAQs</nuxt-link></li>
          </ul>
        </nav>

        <div class="action-buttons">
          <div class="login">
            <nuxt-link to="/login">Login</nuxt-link>
          </div>

          <div class="signup">
            <nuxt-link to="/register">Sign Up</nuxt-link>
          </div>

          <div class="mobile-hamburger">
            <button class="hamburger hamburger--collapse" type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <!--Navigation-->

      <nav class="mobile-nav">
        <ul>
          ul>
            <li><nuxt-link to="/info/about">About Us</nuxt-link></li>
            <li><nuxt-link to="/pre-approval">Pre-approval</nuxt-link></li>
            <li><nuxt-link to="/property">Property</nuxt-link></li>
            <li><nuxt-link to="/info/mortgage">Mortgage</nuxt-link></li>
            <li><nuxt-link to="/info/contact">Contact Us</nuxt-link></li>
            <li><nuxt-link to="/info/faq">FAQs</nuxt-link></li>
            <li><nuxt-link to="/login">Login</nuxt-link></li>
          <li>
            <nuxt-link
              to="/register"
              style="
                border: 1px solid #ffffff;
                padding: 6px 15px;
                border-radius: 12px;
              "
              >Signup</nuxt-link
            >
          </li>
        </ul>
      </nav>
      <div class="mobile-nav-overly"></div>
    </div>
  </section>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
// .trasparent{
//     background: #0D4566;
//     }

//     .trasparent-container .action-buttons .signup{
// border: 1px solid #0d4566;
//     }
</style>
