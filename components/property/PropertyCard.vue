<template>
    <div>
        <div class="ppt-card">
                <img src="/img/properties/house-card.jpg" alt="" />
                <div class="ppt-card-details">
                  <div class="upper">
                    <div class="lhs">
                      <p class="bold color1 font-16">₦ 27,000,000</p>
                      <div class="located flex">
                        <img
                          src="/img/properties/locationIcon.svg"
                          alt="locationIcon"
                        /><span class="color1"
                          >Lekki Pearl Estate II, Lagos, Nigeria</span
                        >
                      </div>
                    </div>
                    <div class="rhs flex">
                      <p class="color1">Financial Status</p>
                      <p class="color1">Mortgage</p>
                    </div>
                  </div>
                  <div class="lower flex j-btw flex-wrap">
                    <div class="flex icons">
                      <div class="with-icon flex j-btw">
                        <div>
                          <img
                            src="/img/properties/bed.svg"
                            alt="bed"
                          />
                        </div>
                        <p class="color1">4 Beds</p>
                      </div>
                      <div class="with-icon flex j-btw">
                        <div>
                          <img
                            src="/img/properties/bath.svg"
                            alt="bed"
                          />
                        </div>
                        <p class="color1">4 Baths</p>
                      </div>
                      <div class="with-icon flex j-btw">
                        <div>
                          <img
                            src="/img/properties/building.svg"
                            alt="bed"
                          />
                        </div>
                        <p class="color1">4 2980 sqft</p>
                      </div>
                    </div>
                    <button
                      id="modal-trigger"
                      class="dark-btn see-details"
                      href="#myModal1"
                    >
                      See details
                    </button>
                  </div>
                  <div class="bottom flex flex-wrap j-btw">
                    <div class="lhs">
                      <p class="upper-case faded">Buy on Mortgage</p>
                      <div class="located flex">
                        <p class="bold color1 font-16">₦ 227,723</p>
                        <span class="slash faded"> / Month</span>
                      </div>
                    </div>
                    <div class="rhs">
                      <p class="upper-case faded">Payback Over</p>
                      <div class="located flex">
                        <p class="bold color1 font-16">20</p>
                        <span class="slash faded"> / Years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
</template>

<script>
    export default {
        name:"PropertyCard"
    }
</script>

<style lang="scss" scoped>

</style>