<template>
  <div>
    <main class="page-content">
      <section>
        <div class="padded-content mt-183">
         
          <div class="amount-cards grid">
            <div class="amount-card">
              <p class="figure bold big-font green">
                $68,000,000.<span class="gray">00</span>
              </p>
              <p class="info color1">Your Maximum Loanable Amount</p>
            </div>
            <div class="amount-card">
              <p class="figure bold big-font green">
                $5,286,000.<span class="gray">00</span>
              </p>
              <p class="info color1">Estimated Monthly Repayment</p>
            </div>
            <div class="amount-card">
              <p class="figure bold big-font green">
                $68,000,000.<span class="gray">00</span>
              </p>
              <p class="info color1">Maximum Tenure</p>
            </div>
          </div>

          <div class="ppt-heading">
            <h3 class="title bold big-font">Filtered result for you</h3>
            <p class="sub-titl color1">
              Based on your affordability result, we have filtered down <br>properties that are suitable and affordable to you
            </p>
          </div>

          <section class="paginate">
            <!-- <div class="page_box" id="list_page_new">
              <span id="get_list_total"></span>
              <span id="page_pre" style="visibility: hidden">
                <a href="javascript:;">Previous page</a>
              </span>
              <span id="get_list_page"></span>
              <span id="page_next"></span>
            </div> -->

            <div class="grid-ppt-cards grid">
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
                    <button class="dark-btn see-details" href="#myModal1">
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
                    <button class="dark-btn see-details" href="#myModal1">
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
                    <button class="dark-btn see-details" href="#myModal1">
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
                    <button class="dark-btn see-details" href="#myModal1">
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
                    <button class="dark-btn see-details" href="#myModal1">
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
                    <button class="dark-btn see-details" href="#myModal1">
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

            <div class="pagination-footer flex-wrap">
              <button type="button" class="xxsm-font green-btn s-bold" id="modal-trigge" data-toggle="modal" data-target="#exampleModal">
                Take the Affordability Test
              </button>
              <div class="pagination-control flex">
                <div class="rhs flex  page-numbers">
                 <div class='page-item'> 
                   <button class="fade-btn" type="button">
                  <img src="/img/properties/back.png" alt="back" />
                </button>
                </div>
                  <div class="pg-no page-item">
                    <p>Page <span class="green">2... </span>of 10</p>
                  </div>
                  <div class='page-item'>
                    <button class="fade-btn" type="button">
                      <img src="/img/properties/next.png" alt="next" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- firtst Modal -->
            <div id="myModal1" class="modal">
              <!-- Modal content -->
              <div class="modal-content">
                <span class="close">&times;</span>
                <div class="grid gridy">
                  <div class="lhs">
                    <div class="ppt-card-details">
                      <div class="upper grid">
                        <div class="lhs">
                          <p class="bold color1 big-text">
                            4 Bedrooms semi-detached duplex with BQ
                          </p>
                          <div class="located flex">
                            <img
                              src="/img/properties/locationIcon.svg"
                              alt="locationIcon"
                            /><span class="color1"
                              >Lekki Pearl Estate II, Lagos, Nigeria</span
                            >
                          </div>
                        </div>
                        <div class="rhs">
                          <p class="color1 bold">From</p>
                          <p class="color1 bold big-text">$ 27,000,000.00</p>
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
                          <div class="with-icon flex j-btw">
                            <div>
                              <img
                                src="/img/properties/car.svg"
                                alt="bed"
                              />
                            </div>
                            <p>4 Cars</p>
                          </div>
                        </div>
                        <a href='affordability.html'><button type="button" class="green-btn s-bold">
                          Get Prequalified
                        </button>
                      </a>
                      </div>
                    </div>
                    <img
                      src="/img/properties/modal-img.png"
                      alt="single property"
                    />
                    <a href="/property-details.html" class="last-btn flex">
                      <button type="button" class="green-btn s-bold">
                        View More
                      </button>
                    </a>
                  </div>
                  <div class="tab-form">
                    <div class="tab flex">
                      <button
                        class="tablinks xsm-font"
                        onclick="openCity(event, 'scheduleTour')"
                        id="defaultOpen"
                      >
                        Schedule Tour
                      </button>
                      <button
                        class="tablinks xsm-font"
                        onclick="openCity(event, 'requestInfo')"
                      >
                        Request info
                      </button>
                    </div>

                    <div id="scheduleTour" class="tabcontent">
                      <form action="" class="form-tab">
                        <input
                          type="text"
                          name="date"
                          id="date"
                          class="color1"
                          placeholder="Select a prefered date"
                        />
                        <input
                          type="text"
                          name="time"
                          id="time"
                          class="color1"
                          placeholder="Select a prefered time"
                        />
                        <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          class="color1"
                          placeholder="Full Name"
                        />

                        <input
                          type="number"
                          name="phone"
                          id="phone"
                          class="color1"
                          placeholder="Phone"
                        />
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="color1"
                          placeholder="Email"
                        />
                        <div class="grid radios">
                          <p>
                            <input
                              type="radio"
                              id="inPerson"
                              name="radio-group"
                              checked
                            />
                            <label class="color1 xsm-font" for="inPerson"
                              >In Person</label
                            >
                          </p>
                          <p>
                            <input
                              type="radio"
                              id="videoChat"
                              name="radio-group"
                            />
                            <label class="color1 xsm-font" for="videoChat"
                              >Video Chat</label
                            >
                          </p>
                        </div>
                        <button
                          type="button"
                          class="xxsm-font green-btn s-bold"
                        >
                          Schedule a Tour
                        </button>
                      </form>
                    </div>

                    <div
                      id="requestInfo"
                      class="tabcontent"
                      style="display: none"
                    >
                      <form action="" class="form-tab">
                        <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          class="color1"
                          placeholder="Full Name"
                        />

                        <input
                          type="number"
                          name="phone"
                          id="phone"
                          class="color1"
                          placeholder="Phone"
                        />
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="color1"
                          placeholder="Email"
                        />
                        <textarea
                          name="request"
                          id="request"
                          placeholder="Type in your request"
                          rows="10"
                        ></textarea>
                        <button
                          type="button"
                          class="xxsm-font green-btn s-bold"
                        >
                          Request info
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- second Modal -->
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
