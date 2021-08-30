<template>
  <div>
       <main class="page-content">
      <section class="about-first relative">
        <img
          src="/img/about/greendot.png"
          alt="greendot"
          class="dot1 abs abs-opac"
        />
        <div class="padded-content">
          <div class="search-homes common-section grid">
            <div class="search-homes-lhs">
              <h4 class="sub-head font-17 color1">About Us</h4>
              <h2 class="title big-font color1 bold">
                We are democratising affordable home ownership in Nigeria
              </h2>
              <p class="info color1 xsm-font">
                Houzzley is a digital platform providing housing solutions that
                will democratize access to affordable housing by matching
                homebuyers with developers and affordable home loans in Nigeria
              </p>
              <button type="button" class="xxsm-font green-btn s-bold hoverable" @click="searchHome">
                Search Homes
              </button>
            </div>
            <div class="search-homes-rhs w100-xmd">
              <div class="grid img-grid">
                <div class="flex w100-xmd">
                  <img
                    class="dot"
                    src="/img/about/orangepattern.png"
                    alt="pattern"
                  />

                  <img
                    class="home1"
                    src="/img/about/home1.png"
                    alt=""
                  />
                </div>
                <img class="home2" src="/img/about/home3.png" alt="" />
                <img
                  class="home3 abs"
                  src="/img/about/home2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="lemon-bg">
        <section class="take-test take-test1 relative">
          <img
            class="abs dot abs-opac"
            src="/img/about/take-test.png"
            alt=""
          />
          <div class="padded-content-normal">
            <div class="common-section">
              <h2 class="title big-font color1 bold">
                We put the customer first by blending technology with local
                intermediaries to deliver innovative service at a better value.
              </h2>
              <p class="info color1 xsm-font">
                We are leading efforts to simplify and eliminate multiple costs
                and processes for homebuyers and make fees more transparent.
              </p>
              <!-- <button type="button" class="xxsm-font green-btn s-bold hoverable" @click="showModal"> -->
              <button type="button" class="xxsm-font green-btn s-bold hoverable" >
                Contact a Home Loan Advisor
              </button>
            </div>
          </div>
        </section>

        <!-- </div>
<div class="padded-content-lemon2"> -->
        <section class="relative take-test2">
          <img
            src="/img/about/greenslash.png"
            alt="pattern"
            class="abs abs2 abs-opac"
          />
          <div class="padded-content-normal">
            <div class="grid gridy relative">
              <img
                src="/img/about/orangeslash.png"
                alt="pattern"
                class="abs abs-opac abs1"
              />
              <img
                class="w-100 mb-md-30"
                src="/img/about/test1.png"
                alt="house"
              />
              <div class="common-section">
                <h2 class="title big-font color1 bold">
                  Sustainable housing quality is important to us
                </h2>
                <p class="info color1 xsm-font">
                  we pre-qualify all participating developers on our platform
                  after integrity checks and satisfactory due diligence on
                  health, safety and environment (HSE), building standards, and
                  proven track record.
                </p>
                <button type="button" class="xxsm-font green-btn s-bold hoverable" @click="showModal">
                  Find an Affordable Home
                </button>
              </div>
            </div>
          </div>
        </section>

        <section class="take-test2 take-testy2 take-test3">
          <img
            src="/img/about/orangeslash.png"
            alt="pattern"
            class="abs abs-opac abs1"
          />
          <img
            src="/img/about/greenslash.png"
            alt="pattern"
            class="abs abs-opac abs2"
          />
          <div class="padded-content-normal">
            <div class="grid gridy">
              <div class="common-section">
                <h2 class="title big-font color1 bold">
                  Affordability is essential for inclusive homeownership,
                </h2>
                <p class="info color1 xsm-font">
                  through our partnership with <a href="#">Housing Solution Fund</a> , you can
                  access blended single-digit home loans on our platform from
                  participating licensed lending banks
                </p>
                <button type="button" class="xxsm-font green-btn s-bold" @click="showModal">
                  Take the Affordability Test
                </button>
              </div>
              <img
                class="w-100 mb-md-30"
                src="/img/about/test3.png"
                alt="couple"
              />
              <!-- <div class="bg">

			</div> -->
            </div>
          </div>
        </section>

        <section class="mission">
          <div class="bg">
            <div class="padded-content-normal">
              <img
                class="abs"
                src="/img/about/missionslash.png"
                alt="pattern"
              />

              <div class="mission-hero">
                <h3 class="big-font title bold color1">Our mission</h3>
                <p class="info color1">
                  is to use innovative technology and strategic partnerships to
                  create a new value network and redefine the cost structure for
                  homeownership so that more people can access affordable homes
                  and save money.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    auth:false,
      head(){
            return{
                link:[
                      { rel: 'stylesheet', href:"/css/custom/header-color.css"  },
                ]
            }
        },
        methods:{
          showModal(){
            $("#AffordabilityTestModal").modal("show")
          },
          searchHome(){
            this.$router.push('/properties')
          }
  }
  }
</script>

<style lang="scss" scoped>

</style>
