<template>
  <div
            class="modal fade"
            id="mortDetail"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-two" id="printableArea">
              <div class="modal-content modal-content-one">
                <div
                  class="modal-header2" >
                    <!-- <div style="width:100px"></div> -->
                  <button @click="close"
                    type="button"
                    class="btn-close float-end "
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body-two" style=" margin-top:-20px;">
                    <h5 v-if="detail.app_ref"
                    class="modal-title text-center"
                    id="exampleModalLabel"
                    style="
                      font-style: normal;
                      font-weight: bold;
                      font-size: 16px;
                      line-height: 19px;
                       margin-bottom:20px;

                    "
                  >
                    REF : {{detail.app_ref}} - Mortgage Application
                  </h5>
                  <!-- 1 -->
                  <div class="img_major" style="display: flex">
                    <div class="img_detials">
                      <div class="user_img passport"></div>

                    </div>
                    <div
                      class="general_user_info img_major_info"
                    >
                      <div class="bg_head">
                        <span class="bg_text">Personal Information</span>
                      </div>
                      <div class="user_info_body" style="margin-top: 20px">
                        <div class="info_detials">
                          <h6 class="info_h6">Title</h6>
                          <span class="info_span">{{user.sex.toLowerCase()=='male'?'Mr':'Mrs'}}</span>
                        </div>
                        <div class="info_detials">
                          <h6 class="info_h6">First Name</h6>
                          <span class="info_span">{{user.firstname}}</span>
                        </div>
                        <div class="info_detials">
                          <h6 class="info_h6">Last Name</h6>
                          <span class="info_span">{{user.lastname}}</span>
                        </div>
                        <div class="info_detials">
                          <h6 class="info_h6">Other Name</h6>
                          <span class="info_span">{{user.middlename}}</span>
                        </div>
                        <div class="info_detials">
                          <h6 class="info_h6">Date of Birth</h6>
                          <span class="info_span">{{user.dob}}</span>
                        </div>
                      </div>
                      <div class="user_info_body" style="margin-top: 20px">
                        <div class="info_detials">
                          <h6 class="info_h6">Sex</h6>
                          <span class="info_span" v-if="user.sex">{{user.sex}}</span>
                        </div>
                        <div class="info_detials">
                        <h6 class="info_h6">Marital Status</h6>
                        <span class="info_span">{{user.marital_status}}</span>
                      </div>
                        <div class="info_detials">
                          <h6 class="info_h6">State</h6>
                          <span class="info_span">{{user.state_of_origin}}</span>
                        </div>
                        <div class="info_detials">
                          <h6 class="info_h6">Place of Birth</h6>
                          <span class="info_span">{{user.place_of_origin}}</span>
                        </div>
                        <div class="info_detials">
                          <h6 class="info_h6">Profession</h6>
                          <span class="info_span">{{user.profession}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 2 -->
                  <div
                    class="general_user_info"
                    style="width: 100%; margin-top: 30px"
                  >
                    <div class="bg_head">
                      <span class="bg_text">Contact Information</span>
                    </div>
                    <div class="user_info_body" style="margin-top: 20px">
                      <div class="info_detials">
                        <h6 class="info_h6">House Address</h6>
                        <span class="info_span">{{user.address}}</span>
                      </div>
                      <div class="info_detials">
                        <h6 class="info_h6">Email Address</h6>
                        <span class="info_span">{{user.email}}</span>
                      </div>
                      <div class="info_detials">
                        <h6 class="info_h6">Phone Number</h6>
                        <span class="info_span">{{user.phone}}</span>
                      </div>

                    </div>
                  </div>
                  <!-- 3 -->
                  <div
                    class="general_user_info"
                    style="width: 100%; margin-top: 30px"
                  >
                    <div class="bg_head">
                      <span class="bg_text">Other Personal Information</span>
                    </div>
                    <div class="user_info_body" style="margin-top: 20px">
                      <div class="info_detials">
                        <h6 class="info_h6">Current Apartment Status</h6>
                        <span class="info_span">{{user.current_apartment_status}}</span>
                      </div>
                      <div class="info_detials">
                        <h6 class="info_h6">Annual Rent</h6>
                        <span class="info_span">{{user.annual_rent_value|easy_currency}}</span>
                      </div>
                      <div class="info_detials">
                        <h6 class="info_h6">Next-of-kin</h6>
                        <span class="info_span">{{user.next_of_kin_name}}</span>
                      </div>
                      <div class="info_detials">
                        <h6 class="info_h6">Next-of-kin’s Relationship</h6>
                        <span class="info_span">{{user.next_of_kin_relationship}}</span>
                      </div>

                    </div>
                    <div class="user_info_body" style="margin-top: 20px">
                       <div class="info_detials">
                        <h6 class="info_h6">Next-of-kin’s Age</h6>
                        <span class="info_span">{{user.next_of_kin_dob}}</span>
                      </div>

                      <div class="info_detials">
                        <h6 class="info_h6">Next-of-kin’s Phone</h6>
                        <span class="info_span">{{user.next_of_kin_phone}}</span>
                      </div>

                      <div class="info_detials">
                        <h6 class="info_h6">Next-of-kin’s Address</h6>
                        <span class="info_span">{{user.next_of_kin_address}}</span>
                      </div>
                    </div>
                  </div>
                  <!-- 4 -->
                  <div
                    class="general_user_info"
                    style="width: 100%; margin-top: 30px"
                  >
                    <div class="bg_head">
                      <span class="bg_text">Employment Information</span>
                    </div>
                    <div class="user_info_body" style="margin-top: 20px">
                      <div class="info_detials">
                        <h6 class="info_h6">Company Name</h6>
                        <span class="info_span">{{user.employer_name}}</span>
                      </div>
                      <div class="info_detials">
                        <h6 class="info_h6">Company Email</h6>
                        <span class="info_span">{{user.employer_email}}</span>
                      </div>
                      <div class="info_detials">
                        <h6 class="info_h6">Employer’s Phone Number</h6>
                        <span class="info_span">{{user.employer_phone}}</span>
                      </div>
                      <div class="info_detials">
                        <h6 class="info_h6">Employers Address</h6>
                        <span class="info_span">{{user.employer_address}}</span>
                      </div>
                    </div>
                  </div>
                  <!-- 5 -->
                  <div
                    class="general_user_info"
                    style="width: 100%; margin-top: 30px"
                  >
                    <div class="bg_head">
                      <span class="bg_text">Financial Information</span>
                    </div>
                    <div class="user_info_body" style="margin-top: 20px">
                      <div class="info_detials">
                        <h6 class="info_h6">Annual Income</h6>
                        <span class="info_span">{{user.total_annual_pay | easy_currency}}</span>
                      </div>
                      <div class="info_detials">
                        <h6 class="info_h6">
                          Monthly Gross Income
                        </h6>
                        <span class="info_span">{{user.monthly_gross_pay | easy_currency}}</span>
                      </div>
                      <div class="info_detials">
                        <h6 class="info_h6">Monthly Net Income</h6>
                        <span class="info_span">{{user.monthly_net_pay | easy_currency}}</span>
                      </div>
                      <div class="info_detials">
                        <h6 class="info_h6">
                          Monthly Expenses
                        </h6>
                        <span class="info_span">{{user.monthly_expenses | easy_currency}}</span>
                      </div>
                    </div>
                    <div class="user_info_body" style="margin-top: 20px">

                      <div class="info_detials">
                        <h6 class="info_h6">
                          Loanable Amount
                        </h6>
                        <span class="info_span">{{user.loanable_amount | easy_currency}}</span>
                      </div>
                        <div class="info_detials">
                        <h6 class="info_h6">Equity Contribution</h6>
                        <span class="info_span">{{detail.down_payment | easy_currency}}</span>
                      </div>
                      <div class="info_detials">
                        <h6 class="info_h6">Monthly Repayment</h6>
                        <span class="info_span">{{detail.monthly_repayment | easy_currency}}</span>
                      </div>


                    </div>
                  </div>
                  <!-- 6 -->
                  <div
                    class="general_user_info"
                    style="width: 100%; margin-top: 30px"
                  >
                    <div class="bg_head">
                      <span class="bg_text">Loan Information</span>
                    </div>
                    <div class="user_info_body" style="margin-top: 20px">
                       <div class="info_detials">
                        <h6 class="info_h6">Property Value</h6>
                        <span class="info_span">{{detail.property_value | easy_currency}}</span>
                      </div>
                       <div class="info_detials">
                        <h6 class="info_h6">Loan Amount</h6>
                        <span class="info_span">{{detail.loan_amount | easy_currency}}</span>
                      </div>
                       <div class="info_detials">
                        <h6 class="info_h6">Loan Tenure</h6>
                        <span class="info_span">{{detail.loan_tenure}} Years</span>
                      </div>


                      <!-- <div class="info_detials">
                        <h6 class="info_h6">Employers Guarantee</h6>
                        <span class="info_span">--</span>
                      </div> -->
                    </div>
                  </div>
                </div>
                <div
                  class="modal-footer"
                  style="
                    border-top: none;
                    display: flex;
                    justify-content: center;
                  "
                >
                  <button
                    type="button"
                    class="btn btn_print"
                    @click="printDiv('printableArea')"
                  >
                    Print
                  </button>
                  <button @click="close"
                    type="button"
                    class="btn btn_close"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
  </div>
</template>

<script>
import store_mixin from '@/mixins/store_mixin'
  export default {
    mixins:[store_mixin],
    computed:{
      detail(){
        return this.$store.state.dashboard.user_mortgage_detail;
      }
    },
    methods:{
      show(){
        $("#mortDetail").modal('show');
      },
      close(){
         $("#mortDetail").modal('hide');
      },
      printDiv(divName) {
        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;

        window.print();

        document.body.innerHTML = originalContents;
      },
      printPreview(){
        console.log("about to print")
        const prtHtml = document.getElementById('appprint').innerHTML;

              // Get all stylesheets HTML
              let stylesHtml = '';
              for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
                stylesHtml += node.outerHTML;
              }
              console.log(stylesHtml);

              // Open the print window
              const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');

              WinPrint.document.write(`<!DOCTYPE html>
              <html>
                <head>
                   ${stylesHtml}

                </head>
                <body>
                  ${prtHtml}
                </body>
              </html>`);

              WinPrint.document.close();
              WinPrint.focus();
              WinPrint.print();
              WinPrint.close();
    }
    },
    created(){
      this.$nuxt.$on("user_mortgage_detail",(param)=>{
        if(param){
          this.show();
        }else{
          this.close();
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
.passport{
  background-color: #f2f2f2;
  height: 150px;
  width: 150px;
  border-radius: 15px;
}
</style>
