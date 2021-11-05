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
            <li><nuxt-link  @click="goToPropertiesPage" :to="{name:'properties'}">Properties</nuxt-link></li>
            <li><nuxt-link to="/info/mortgage">Home Loans</nuxt-link></li>
            <li><nuxt-link to="/info/contact">Contact Us</nuxt-link></li>
            <li><nuxt-link to="/info/faq">FAQs</nuxt-link></li>
              <li class="nav-item dropdown " v-if="$auth.user">
                        <a class="nav-link dropdown-toggle auth-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <!-- <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="25" height="25" class="rounded-circle"> -->
                          <!-- -->
                          <span class="mdi mdi-account-outline icon-size">{{$auth.user.firstname}} </span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <nuxt-link v-if="$auth.user.have_apply_for_mortgage"  to="/dashboard" class="dropdown-item" >Dashboard</nuxt-link>
                          <!-- <a class="dropdown-item" href="#">Edit Profile</a> -->
                          <a class="dropdown-item " href="#" @click.prevent="logout">Log Out</a>
                        </div>
              </li>
          </ul>
        </nav>

        <div class="action-buttons">
          <div class="login" v-if="!$auth.user">
            <nuxt-link to="/login">Login</nuxt-link>
          </div>

          <div class="signup" v-if="!$auth.user">
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
            <li @click.prevent="goPage"><nuxt-link to="/info/about">About Us</nuxt-link></li>
            <li @click.prevent="goPage"><nuxt-link to="/pre-approval">Pre-approval</nuxt-link></li>
            <li @click.prevent="goPage"><nuxt-link :to="{name:'properties'}">Properties</nuxt-link></li>
            <li @click.prevent="goPage"><nuxt-link to="/info/mortgage">Home Loans</nuxt-link></li>
            <li @click.prevent="goPage"><nuxt-link to="/info/contact">Contact Us</nuxt-link></li>
            <li @click.prevent="goPage"><nuxt-link to="/info/faq">FAQs</nuxt-link></li>
            <li v-if="!$auth.user" @click.prevent="goPage"><nuxt-link to="/login">Login</nuxt-link></li>
            <li v-if="!$auth.user">
              <nuxt-link to="/register"
                style="
                  border: 1px solid #ffffff;
                  padding: 6px 15px;
                  border-radius: 12px;
                "
                >Signup</nuxt-link
              >
            </li>
             <li v-if="$auth.user" @click.prevent="goPage"><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
             <li v-if="$auth.user" @click.prevent="logout">Logout</li>

        </ul>
      </nav>
      <div class="mobile-nav-overly"></div>
    </div>
  </section>
  </div>
</template>

<script>
  export default {
      watch: {
     '$route': function (value) {
       window.scrollTo(0,0)

      }
    },
    methods:{
      goToPropertiesPage(){
           this.$store.commit("property/LIST_STYLE",'all');
        this.$router.push('/properties');
      },
      goPage(){
         this.$store.commit("property/LIST_STYLE",'all');
        $(".mobile-nav").toggleClass('mobile-nav-state');
         $(".mobile-nav-overly").toggleClass('mobile-nav-overly-state');
        $('.hamburger').toggleClass("is-active");
      },
      logout(){
        this.$auth.logout();
      }
    }
  }
</script>

<style lang="scss" scoped>
// .trasparent{
//     background: #0D4566;
//     }

//     .trasparent-container .action-buttons .signup{
// border: 1px solid #0d4566;
//     }

.auth-ul{
  list-style: none;
}
.auth-link{
      margin-left:1.5rem;
      // width:5rem;
      margin-top:-0.5rem;
}
.icon-size{
  width:24px;
  height: 24px;
}
.dropdown-item{
  color:#000 !important;
}
</style>
