<template>
  <div>
    <main class="page-content">
      <section>
        <div class="padded-content">
          <section class="preapproval">
            <div class="money grid">
              <div class="amount">
                <p class="figure bold big-font green">
                  $68,000,000.<span class="gray">00</span>
                </p>
                <p class="info color1">Your Maximum Loanable Amount</p>
              </div>
              <div class="amount">
                <p class="figure bold big-font green">
                  $5,286,000.<span class="gray">00</span>
                </p>
                <p class="info color1">Estimated Monthly Repayment</p>
              </div>
              <div class="amount">
                <p class="figure bold big-font green">
                  $68,000,000.<span class="gray">00</span>
                </p>
                <p class="info color1">Maximum Tenure</p>
              </div>
            </div>
            <div class="tabled">
              <div class="scrolly">
                <div class="grid th">
                  <p class="color1">Property Name</p>
                  <p class="color1">Type</p>
                  <p class="color1">Location</p>
                  <p class="color1">Developer</p>
                  <p class="color1">price</p>
                </div>
                <div class="grid">
                  <p class="color1">Lekki Pearl Estate II</p>
                  <p class="color1">Bunglow</p>
                  <p class="color1">Lekki, Lagos</p>
                  <p class="color1">Brains & Hammers</p>
                  <p class="color1">$27,000,000.00</p>
                  <div class="btn">
                    <button class="yellow bold">View</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="heading-step">
              <div class="heading">
                <h2 class="big-font green bold">You are almost there</h2>
                <p class="sub-title color1">
                  These steps are necessary to complete your mortgage
                  application
                </p>
              </div>
                              <!-- Circles which indicates the steps of the form: -->

              <section class="step-indicator steps">
                <div class="step step1 ">
                    <div class="step-icon number">1</div>
                  <p  class="text bold">Affordability Test</p>
                </div>
              <div id="line1" class="indicator-line "></div>
              <div class="step step2">
                  <div class="step-icon number">2</div>
                <p class="text bold">Down Payment</p>
              </div>
              <div id="line2" class="indicator-line"></div>
              <div class="step step3">
                  <div class="step-icon number">3</div>
                <p class="text bold"> Complete Profile</p>
              </div>
            </section>
          
             
              <form id="stepForm"  class="filled-input-with-slider">
                <div class="taby gridy">
                  <div class="grid-child">
                    <label for="propertyValue">Property Value</label>
                    <div class="input-group mb-3">
                      <span
                        class="input-group-text color1"
                        id="inputGroup-sizing-default"
                        >₦</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        value="$ 27,000,000.00"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                  <div class="grid-child">
                    <label for="propertyValue">Loan Amount</label>
                    <div class="input-group mb-3">
                      <span
                        class="input-group-text color1"
                        id="inputGroup-sizing-default"
                        >₦</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        value="$ 27,000,000.00"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                  <div class="grid-child">
                    <label for="propertyValue">Equity Contribution</label>
                    <div class="range-wrap flex">
                      <input
                        class="range"
                        type="range"
                        value="60"
                        min="10"
                        max="100"
                        step="1"
                      />
                      <p class="min color1 abs-value">10%</p>
                      <p class="max color1 abs-value">100%</p>

                      <div class="flex bubbled">
                        <output class="color1 bubble"></output><span>%</span>
                      </div>
                    </div>
                  </div>
                  <div class="grid-child">
                    <label for="propertyValue"
                      >Equity Contribution Amount</label
                    >
                    <div class="input-group mb-3">
                      <span
                        class="input-group-text color1"
                        id="inputGroup-sizing-default"
                        >₦</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        value="$ 27,000,000.00"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                </div>
                <div class="taby gridy">
                  <div class="grid-child">
                    <label for="propertyValue">Property Value</label>
                    <div class="input-group mb-3">
                      <span
                        class="input-group-text color1"
                        id="inputGroup-sizing-default"
                        >₦</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        value="$ 27,000,000.00"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                  <div class="grid-child">
                    <label for="propertyValue">Loan Amount</label>
                    <div class="input-group mb-3">
                      <span
                        class="input-group-text color1"
                        id="inputGroup-sizing-default"
                        >₦</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        value="$ 27,000,000.00"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                
                  <div class="grid-child">
                    <label for="propertyValue"
                      >Equity Contribution Amount</label
                    >
                    <div class="input-group mb-3">
                      <span
                        class="input-group-text color1"
                        id="inputGroup-sizing-default"
                        >₦</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        value="$ 27,000,000.00"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                </div>
                <div class="taby gridy">
                  <div class="grid-child">
                    <label for="propertyValue">Property Value</label>
                    <div class="input-group mb-3">
                      <span
                        class="input-group-text color1"
                        id="inputGroup-sizing-default"
                        >₦</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        value="$ 27,000,000.00"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                  <div class="grid-child">
                    <label for="propertyValue">Loan Amount</label>
                    <div class="input-group mb-3">
                      <span
                        class="input-group-text color1"
                        id="inputGroup-sizing-default"
                        >₦</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        value="$ 27,000,000.00"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
         
                </div>

            
              </form>
            <div class="buttons flex-wrap gg-20">
              <button type="button"  class="xxsm-font white-btn2 s-bold" id="prevBtnStep" onclick="nextPrevStep(-1)">Previous</button>

              <button
              type="button"
              id="nextBtnStep" onclick="nextPrevStep(1)"
              class="xxsm-font green-btn s-bold"
            >
              Continue
            </button>

            </div>
            </div>
          </section>
        </div>

         <!-- <button
                type="button"
                id="modal-trigger"
                data-toggle="modal"
                data-target="#exampleModal"
                class="xxsm-font green-btn s-bold"
              >
                Modal Trigger
              </button> -->

        <!-- Modal -->
        <div
          class="modal preapprovalform modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="pre-approval-form-container">
                <img
                  class="modal-close"
                  src="/img/close.svg"
                  data-dismiss="modal"
                  alt="close"
                />

                <form id="regForm" class="form-tab">
                  <!-- One "tab" for each step in the form: -->
                  <div class="tab-step">
                    <div class="heading">
                      <h1 class="big-font green bold">Property Request</h1>
                      <p class="sub-title color1">
                        Indication form description
                      </p>
                    </div>

                    <div class="doub-grid">
                      <div>
                        <label for="firstName">First Name</label>

                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          class="color1"
                        />
                      </div>
                      <div>
                        <label for="lastName">Last Name</label>

                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          class="color1"
                        />
                      </div>
                    </div>

                    <div class="doub-grid">
                      <div>
                        <label for="Email">Email</label>
                        <input
                          type="email"
                          name="Email"
                          id="Email"
                          class="color1"
                        />
                      </div>
                      <div>
                        <label for="phoneNumber">Home Type</label>

                        <input
                          type="number"
                          name="phoneNumber"
                          id="phoneNumber"
                          class="color1"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="homeType">Home Type</label>
                      <div class="select">
                        <select id="homeType">
                          <option class="selected" value="selected">
                            Please select the type of property
                          </option>
                          <option value="Option 1">Option 1</option>
                          <option value="Option 2">Option 2</option>
                          <option value="Option 3">Option 3</option>
                        </select>
                        <span class="focus"></span>
                      </div>
                    </div>
                    <div>
                      <label for="homeType">Number of Bedrooms</label>
                      <div class="select">
                        <select id="homeType">
                          <option class="selected" value="selected">
                            Please select the number of bedrooms
                          </option>
                          <option value="Option 1">Option 1</option>
                          <option value="Option 2">Option 2</option>
                          <option value="Option 3">Option 3</option>
                        </select>
                        <span class="focus"></span>
                      </div>
                    </div>
                    <div>
                      <label for="homeType">Number of Bathrooms</label>
                      <div class="select">
                        <select id="homeType">
                          <option class="selected" value="selected">
                            Please select the number of bathrooms
                          </option>
                          <option value="Option 1">Option 1</option>
                          <option value="Option 2">Option 2</option>
                          <option value="Option 3">Option 3</option>
                        </select>
                        <span class="focus"></span>
                      </div>
                    </div>
                    <div>
                      <label for="homeType">Payment Options</label>
                      <div class="select">
                        <select id="homeType">
                          <option class="selected" value="selected">
                            Please select the payment option you would prefer
                          </option>
                          <option value="Option 1">Option 1</option>
                          <option value="Option 2">Option 2</option>
                          <option value="Option 3">Option 3</option>
                        </select>
                        <span class="focus"></span>
                      </div>
                    </div>
                    <div>
                      <label for="homeType">Desired State</label>
                      <div class="select">
                        <select id="homeType">
                          <option class="selected" value="selected">
                            Please select the most preferred state
                          </option>
                          <option value="Option 1">Option 1</option>
                          <option value="Option 2">Option 2</option>
                          <option value="Option 3">Option 3</option>
                        </select>
                        <span class="focus"></span>
                      </div>
                    </div>
                    <div>
                      <label for="homeType">Desired City</label>
                      <div class="select">
                        <select id="homeType">
                          <option class="selected" value="selected">
                            Please select the most preferred city
                          </option>
                          <option value="Option 1">Option 1</option>
                          <option value="Option 2">Option 2</option>
                          <option value="Option 3">Option 3</option>
                        </select>
                        <span class="focus"></span>
                      </div>
                    </div>
                    <div class="flex next-prev">
                      <button
                        type="button"
                        id="prevBtn"
                        onclick="nextPrev(-1)"
                        class="next xxsm-font white-btn s-bold"
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        id="nextBtn"
                        onclick="nextPrev(1)"
                        class="next xxsm-font green-btn s-bold"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  <div class="tab-step">
                    <div class="heading">
                      <h1 class="big-font green bold">How much can I Afford</h1>
                      <p class="sub-title color1">
                        Calculate the home loan you qualify for, and how much
                        you can expect to pay monthly on your home loan
                        repayments.
                      </p>
                    </div>
                    <div class="input-group mb-3">
                      <span
                        class="input-group-text color1"
                        id="inputGroup-sizing-default"
                        >₦</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        value="$ 27,000,000.00"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                    <div class="q-radio">
                      <p class="name color1">Do you have Additional Income?</p>
                      <div class="modal-radios flex flex-wrap">
                        <p class="mr-radio">
                          <input
                            type="radio"
                            id="incomeYes"
                            name="incomeYes"
                            checked
                          />
                          <label class="color1 xsm-font" for="incomeYes"
                            >Yes I do</label
                          >
                        </p>
                        <p>
                          <input type="radio" id="incomeNo" name="incomeNo" />
                          <label class="color1 xsm-font" for="incomeNo"
                            >No I do not</label
                          >
                        </p>
                      </div>
                    </div>

                    <div class="input-group mb-3">
                      <span
                        class="input-group-text color1"
                        id="inputGroup-sizing-default"
                        >₦</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        value="$ 27,000,000.00"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                    <div class="q-radio">
                      <p class="name color1">
                        Do you have other Loan Obligations?
                      </p>
                      <div class="modal-radios flex flex-wrap">
                        <p class="mr-radio">
                          <input
                            type="radio"
                            id="obligationsYes"
                            name="obligationsYes"
                            checked
                          />
                          <label class="color1 xsm-font" for="obligationsYes"
                            >Yes I do</label
                          >
                        </p>
                        <p>
                          <input
                            type="radio"
                            id="obligationsNo"
                            name="obligationsNo"
                          />
                          <label class="color1 xsm-font" for="obligationsNo"
                            >No I do not</label
                          >
                        </p>
                      </div>
                    </div>
                    <div class="input-group mb-3">
                      <span
                        class="input-group-text color1"
                        id="inputGroup-sizing-default"
                        >₦</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        value="$ 27,000,000.00"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span
                        class="input-group-text color1"
                        id="inputGroup-sizing-default"
                        ><img src="/img/date.png" alt="date"
                      /></span>
                      <input
                        type="text"
                        value="27/03/1989"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                    <div class="q-radio">
                      <p class="name color1">
                        Are you borrowing with a Partner?
                      </p>
                      <div class="modal-radios flex flex-wrap">
                        <p class="mr-radio">
                          <input
                            type="radio"
                            id="partnerYes"
                            name="partnerYes"
                            checked
                          />
                          <label class="color1 xsm-font" for="partnerYes"
                            >Yes, with Partner</label
                          >
                        </p>
                        <p>
                          <input type="radio" id="partnerNo" name="partnerNo" />
                          <label class="color1 xsm-font" for="partnerNo"
                            >No, I am Borrowing Alone</label
                          >
                        </p>
                      </div>
                    </div>
                    <div class="input-group mb-3">
                      <span
                        class="input-group-text color1"
                        id="inputGroup-sizing-default"
                        >₦</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        value="$ 27,000,000.00"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                    <div class="q-radio">
                      <p class="name color1">
                        How long do you want this Loan for?
                      </p>
                    </div>
                    <div class="range-wrap flex">
                      <input
                        class="range"
                        type="range"
                        value="8"
                        min="1"
                        max="30"
                        step="1"
                      />
                      <p class="min color1 abs-value">1Year</p>
                      <p class="max color1 abs-value">30Years</p>

                      <div class="flex bubbled">
                        <output class="color1 bubble"></output
                        ><span>Years</span>
                      </div>
                    </div>

                    <div class="input-group input-group-select2 mb-5 mt-70">
                      <span
                        class="input-group-text color1"
                        id="inputGroup-sizing-default"
                        ><img
                          src="/img/home/header/location.svg"
                          alt="location"
                      /></span>
                      <div class="select select-modal2">
                        <select id="location">
                          <option value="Lagos">Lagos</option>
                          <option value="Abia">Abia</option>
                          <option value="Ogun">Ogun</option>
                        </select>
                        <span class="focus"></span>
                      </div>
                    </div>

                    <div class="flex next-prev">
                      <button
                        type="button"
                        id="prevBtn"
                        onclick="nextPrev(-1)"
                        class="next xxsm-font white-btn s-bold"
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        id="nextBtn"
                        onclick="nextPrev(1)"
                        class="next xxsm-font green-btn s-bold"
                      >
                        Check Loan Affordability
                      </button>
                    </div>
                  </div>
                  <div class="tab-step tab-success">
                    <div class="mark-icon flex">
                      <img src="/img/mark.png" alt="marked" ">
                    </div>
                    <div class="heading">
                      <h1 class="big-font green bold">
                        You have been Pre-Qualified to Apply for a Mortgage
                      </h1>
                      <p class="sub-title color1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Accumsan auctor aliquam leo posuere.
                      </p>
                    </div>
                    <div class="flex next-prev">
                      <button
                        type="button"
                        id="prevBtn"
                        onclick="nextPrev(-1)"
                        class="next xxsm-font white-btn s-bold"
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        id="nextBtn"
                        onclick="nextPrev(1)"
                        class="next xxsm-font green-btn s-bold"
                      >
                        Start Application
                      </button>
                    </div>
                  </div>

            
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
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
