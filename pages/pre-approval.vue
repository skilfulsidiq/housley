<template>
    <div>
          <main class="page-content">
      <div class="pre-approval-form-container  preapproval-content">
        <!-- <img class="modal-close" src="/img/close.svg" data-dismiss="modal" alt="close"> -->
 
        <form id="regForm" class="form-tab">
          <!-- One "tab" for each step in the form: -->
        
         
            <div class="heading">
              <h1 class="big-font green bold">How much can I Afford</h1>
              <p class="sub-tite color1">
                Calculate the home loan you qualify for, and how much
                you can expect to pay monthly on your home loan
                repayments.
              </p>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text color1" id="inputGroup-sizing-default">₦</span>
              <input type="text" class="form-control" aria-label="Sizing example input" value="$ 27,000,000.00" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="q-radio">
              <p class="name color1">Do you have Additional Income?</p>
              <div class="modal-radios flex flex-wrap">
                <p class="mr-radio">
                  <input type="radio" id="incomeYes" name="incomeYes" checked="">
                  <label class="color1 xsm-font" for="incomeYes">Yes I do</label>
                </p>
                <p>
                  <input type="radio" id="incomeNo" name="incomeNo">
                  <label class="color1 xsm-font" for="incomeNo">No I do not</label>
                </p>
              </div>
            </div>
 
            <div class="input-group mb-3">
              <span class="input-group-text color1" id="inputGroup-sizing-default">₦</span>
              <input type="text" class="form-control" aria-label="Sizing example input" value="$ 27,000,000.00" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="q-radio">
              <p class="name color1">
                Do you have other Loan Obligations?
              </p>
              <div class="modal-radios flex flex-wrap">
                <p class="mr-radio">
                  <input type="radio" id="obligationsYes" name="obligationsYes" checked="">
                  <label class="color1 xsm-font" for="obligationsYes">Yes I do</label>
                </p>
                <p>
                  <input type="radio" id="obligationsNo" name="obligationsNo">
                  <label class="color1 xsm-font" for="obligationsNo">No I do not</label>
                </p>
              </div>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text color1" id="inputGroup-sizing-default">₦</span>
              <input type="text" class="form-control" aria-label="Sizing example input" value="$ 27,000,000.00" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text color1" id="inputGroup-sizing-default"><img src="/img/date.png" alt="date"></span>
              <input type="text" value="27/03/1989" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="q-radio">
              <p class="name color1">
                Are you borrowing with a Partner?
              </p>
              <div class="modal-radios flex flex-wrap">
                <p class="mr-radio">
                  <input type="radio" id="partnerYes" name="partnerYes" checked="">
                  <label class="color1 xsm-font" for="partnerYes">Yes, with Partner</label>
                </p>
                <p>
                  <input type="radio" id="partnerNo" name="partnerNo">
                  <label class="color1 xsm-font" for="partnerNo">No, I am Borrowing Alone</label>
                </p>
              </div>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text color1" id="inputGroup-sizing-default">₦</span>
              <input type="text" class="form-control" aria-label="Sizing example input" value="$ 27,000,000.00" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="q-radio">
              <p class="name color1">
                How long do you want this Loan for?
              </p>
            </div>
            <div class="range-wrap flex">
              <input class="range" type="range" value="8" min="1" max="30" step="1" style="background-image: linear-gradient(to right, rgb(58, 170, 53) 24%, rgb(159, 199, 218) 24%);">
              <p class="min color1 abs-value">1Year</p>
              <p class="max color1 abs-value">30Years</p>
 
              <div class="flex bubbled" style="left: calc(24.1379% + 4.37931px);">
                <output class="color1 bubble">8</output><span>Years</span>
              </div>
            </div>
 
            <div class="input-group input-group-select2 mb-5 mt-70">
              <span class="input-group-text color1" id="inputGroup-sizing-default"><img src="/img/home/header/location.svg" alt="location"></span>
              <div class="select select-modal2">
                <select id="location">
                  <option value="Lagos">Lagos</option>
                  <option value="Abia">Abia</option>
                  <option value="Ogun">Ogun</option>
                </select>
                <span class="focus"></span>
              </div>
            </div>
 
           
          <div class="continue">
             <a href="filter-properties.html">  <button type="button" id="continue" onclick="nextPrev(1)" class="next xxsm-font green-btn s-bold">
            Continue
           </button></a>
         </div>
          </form></div>
        
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