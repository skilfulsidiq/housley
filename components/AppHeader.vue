<template>
  <div>
      <section id="header" class="trasparent" >
    <!--Transparent header-->
    <div class="trasparent-container">
      <div class="logo">
        <nuxt-link to="/">
          <img src="/logo/houzzley-white-logo.svg" />
        </nuxt-link>
      </div>
      <div class="navigation">
        <nav>
          <ul>
            <li><nuxt-link to="/info/about">About Us</nuxt-link></li>
            <li><nuxt-link to="/pre-approval">Pre-approval</nuxt-link></li>
            <li><nuxt-link to="/property">Property</nuxt-link></li>
            <li><nuxt-link to="/info/mortgage">Mortgage</nuxt-link></li>
            <li><nuxt-link to="/info/contact">Contact Us</nuxt-link></li>
            <li><nuxt-link to="/info/faq">FAQs</nuxt-link></li>
          </ul>
        </nav>

        <div class="action-buttons">
          <div class="login">
            <nuxt-link to="login.html">Login</nuxt-link>
          </div>

          <div class="signup">
            <nuxt-link to="signup.html">Sign Up</nuxt-link>
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
          <li><nuxt-link to="about.html">About Us</nuxt-link></li>
          <li><nuxt-link to="pre-approval.html">Pre-approval</nuxt-link></li>
          <li><nuxt-link to="property.html">Property</nuxt-link></li>
          <li><nuxt-link to="mortgage.html">Mortgage</nuxt-link></li>
          <li><nuxt-link to="contact-us.html">Contact Us</nuxt-link></li>
          <li><nuxt-link to="faq.html">FAQs</nuxt-link></li>
          <li><nuxt-link to="login.html">Login</nuxt-link></li>
          <li>
            <nuxt-link
              to="signup.html"
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

</style>
