<template>
  <div>
     <main class="page-content">
      <div class="void"></div>

      <section>
        <div class="padded-content">
          <section class="contact-us">
            <div class="form-container">
              <div class="heading">
                <h2 class="green bold big-font">Contact Us</h2>
                <p class="sub-title">
                  We are available 24/7 to take your enquiries and complaints
                </p>
              </div>
              <div class="grid">
                <div class="lhs">
                  <div class="form">
                    <form action="" class="form-tab contact-form">
                      <label for="name ">Name</label>
                      <input type="text" name="name" id="name" class="color1" />
                      <label for="email ">Email</label>

                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="color1"
                      />
                      <label for="message ">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Address line 1"
                        rows="7"
                      ></textarea>

                      <button type="button" class="xxsm-font green-btn s-bold">
                        Send Message
                      </button>
                    </form>
                  </div>
                  <div class="footer-contact flex">
                    <p class="text color1">Or Reach us on our Social media</p>
                    <div class="flex socials">
                      <a href="#" class="mr-img"
                        ><img
                          src="/img/contact/facebook.svg"
                          alt="facebook"
                      /></a>
                      <a href="#"
                        ><img src="/img/contact/insta.svg" alt="insta"
                      /></a>
                    </div>
                  </div>
                </div>
                <img class="man" src="/img/contact/man.png" alt="man" />
              </div>
            </div>
            <img
              class="abs-img abs-green"
              src="/img/contact/greenslash.png"
              alt="greenslash"
            />
            <img
              class="abs-img abs-yellow"
              src="/img/contact/yellowDots.png"
              alt="dots"
            />
            <!-- <img src="/img/contact/man.png" alt="man" class="man"> -->
          </section>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    auth:false
  }
</script>

<style lang="scss" scoped>

</style>
