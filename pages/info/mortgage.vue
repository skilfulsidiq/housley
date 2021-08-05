<template>
    <div>
           <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <h1>Looking for <br />Mortgage?</h1>
        <h4>Let Houzzley be your guide! <br />Take the First step.</h4>
        <button
          class="fade-btn"
          id="modal-trigger-mortagage"
          data-toggle="modal"
          data-target="#mortagage"
        >
          <div class="button"><a href="#"> Get Prequalified</a></div>
        </button>
      </div>
    </section>

    <!-- Modal -->
    <div
      class="modal"
      id="mortagage"
      tabindex="-1"
      role="dialog"
      aria-labelledby="mortagageLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="mortagage-modal">
            <img
              class="close-btn"
              src="/img/close.svg"
              data-dismiss="modal"
              alt="close"
            />
            <div class="heading">
              <h1 class="big-font green bold">
                Easy steps to Mortgage Experience
              </h1>
              <p class="sub-titl color1">
                Calculate your Mortgage and apply in minutes.
              </p>
            </div>
            <div class="grid gridy-mortagage">
              <div class="lhs ">
                <div class="grid-child mb-4">
                  <label for="propertyValue">Enter the Price*</label>
                  <div class="input-group">
                    <span
                      class="input-group-text color1"
                      id="inputGroup-sizing-default"
                      >₦</span
                    >
                    <input
                      type="number"
                      required
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                  <div class="flex j-btw helper">
                    <p>From ₦ 1,000,000</p>
                    <p>Limit ₦ 100,000,000</p>
                  </div>
                </div>
                <div class="grid-child mb-4">
                  <label for="propertyValue">Down Payment</label>
                  <p class="boldy bold color1">₦ 10,000,000</p>
                  <div class="range-wrap flex">
                    <input
                      class="range"
                      type="range"
                      value="60"
                      min="10"
                      max="100"
                      step="1"
                    />
                  </div>
                  <label class="mt-4">10% of more purchase price</label>
                </div>
                <div class="grid-child mb-5">
                  <label for="term">Term</label>
                  <p class="boldy bold color1">15 Years</p>
                  <div class="range-wrap flex">
                    <input
                      class="range"
                      type="range"
                      value="10"
                      min="1"
                      max="25"
                      step="1"
                    />
                    <p class="min color1 abs-value">1Year</p>
                    <p class="max color1 abs-value">25Years</p>
                  </div>
                </div>
              </div>
              <div class="rhs flex">
               <div class="cardy">
                <div class="card-top">
                    <div class="heading">
                      <p class="sub-title color1">Total repayment is</p>
                      <p class="color1 bolder">₦ 10,000,000</p>
                    </div>
                  </div>
                  <div class="card-bottom flex j-btw flex-wrap">
                      <div class="left">
                        <label>Rate</label>
                        <p class="boldy bold color1">0.05</p>
                      </div>
                      <div class="right flex">
                        <label>Number of Payments</label>
                        <p class="boldy bold color1">150</p>
                      </div>
                    </div>
               </div>
               <div class="buttons grid">
                <button
                type="button"
                data-dismiss="modal"
                id="nextBtn"
                class="xxsm-font green-btn s-bold"
              >
              Go Back
              </button>
                <button
                type="button"
                id="nextBtn"
                class="xxsm-font green-btn s-bold"
              >
                Get Started
              </button>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero Section END -->

    <!-- Benefit Section -->
    <section class="benefits">
      <div class="benefits-container">
        <div class="benefit">
          <span
            ><img src="/img/home/benefits-cta/free-service.svg"
          /></span>

          <h3>100% Free Service</h3>
        </div>

        <span class="line"
          ><img src="/img/home/benefits-cta/Line 6.svg"
        /></span>

        <div class="benefit">
          <span
            ><img src="/img/home/benefits-cta/no-commission-fee.svg"
          /></span>

          <h3>No commission fees</h3>
        </div>

        <span class="line"
          ><img src="/img/home/benefits-cta/Line 6.svg"
        /></span>

        <div class="benefit">
          <span
            ><img src="/img/home/benefits-cta/affordable-finance.svg"
          /></span>

          <h3>Access to Affordable finance</h3>
        </div>
      </div>
    </section>

    <section class="ctas">
      <div class="ctas-container">
        <div class="ctas-card">
          <div class="img">
            <img
              src="/img/mortgage/we-find-your-perfect-mortgage.svg"
              alt=""
            />
          </div>

          <h4>We find your perfect mortgage</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur consectetur adipiscing elit.
            Praesent non nisl sed adipiscing.
          </p>
          <div class="button">Search Home</div>
        </div>

        <div class="ctas-card">
          <div class="img">
            <img
              src="/img/mortgage/get-your-mortgage-approved.svg"
              alt=""
            />
          </div>
          <h4>Get your Mortgage Approved</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur consectetur adipiscing elit.
            Praesent non nisl sed adipiscing.
          </p>
          <div class="button">View Rates</div>
        </div>

        <div class="ctas-card">
          <div class="img">
            <img src="/img/mortgage/get-your-keys.svg" alt="" />
          </div>

          <h4>Get your Keys</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur consectetur adipiscing elit.
            Praesent non nisl sed adipiscing.
          </p>
          <div class="button">Get screened</div>
        </div>
      </div>
    </section>

    <!-- Benefit Section End -->

    <section class="partnership">
      <div class="partnership-container">
        <div class="left item">
          <h1>Our Partnership</h1>
          <p>
            We partner with the Best Mortgage brokers in the business with mouth
            watering Rates!
          </p>
        </div>

        <div class="right item">
          <div class="stats">
            <div class="stat">
              <img src="/img/mortgage/first-trust.svg" alt="" />
            </div>

            <div class="stat">
              <img src="/img/mortgage/imperial-homes.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Real Estate Developers + Statistics END-->
    </div>
</template>

<script>
    export default {
        auth:false,
        layout:"default",
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