<template>
  <div>
    {{user_mortgage}}
       <v-container id="appprint" v-if="mortgage">
          <v-card elevation="0" class="negative">
            <mortgage-form-title left="" right=""  class="no-print">
                <template v-slot:action>
                    <v-btn text @click="printPreview" class="no-print"> <v-icon size="30">mdi-printer</v-icon> &nbsp; Print</v-btn>

                </template>
              </mortgage-form-title>

              <v-card-text>

                  <div class="wrapper-preview">
                      <div class="top-border-text">
                          Personal Information
                      </div>
                      <v-btn  class="top-btn" depressed dark > <v-icon size="25">mdi-pencil</v-icon></v-btn>
                      <div class="text-box">
                          <div class="text-content">
                              <div class="title">Title</div>
                              <div class="text">Mr</div>
                          </div>
                          <div class="text-content">
                              <div class="title">First Name</div>
                              <div class="text">{{checkValueExist(user.firstname)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Last Name</div>
                              <div class="text">{{checkValueExist(user.lastname)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Middle Name</div>
                              <div class="text">{{checkValueExist(user.middlename)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Address</div>
                              <div class="text">{{checkValueExist(user.address)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Email Address</div>
                              <div class="text">{{checkValueExist(user.email)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Phone Number</div>
                              <div class="text">{{checkValueExist(user.phone)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Date of Birth</div>
                              <div class="text">{{checkValueExist(user.dob )| appDate}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Sex</div>
                              <div class="text">{{checkValueExist(user.sex)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Marital Status</div>
                              <div class="text">{{checkValueExist(user.marital_status)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Place of Birth</div>
                              <div class="text">{{checkValueExist(user.place_of_birth)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Nationality</div>
                              <div class="text">{{checkValueExist(user.nationality)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">State of Origin</div>
                              <div class="text">{{checkValueExist(user.state_of_origin)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Education Qualification</div>
                              <div class="text">{{checkValueExist(user.highest_education)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Profession</div>
                              <div class="text">{{checkValueExist(user.profession)}}</div>
                          </div>

                      </div>
                  </div>
                  <div class="wrapper-preview">
                      <div class="top-border-text">
                          Other Personal Information
                      </div>
                      <v-btn  class="top-btn" depressed dark > <v-icon size="25">mdi-pencil</v-icon></v-btn>
                      <div class="text-box">
                          <div class="text-content">
                              <div class="title">Have Children</div>
                              <div class="text">{{user.have_children==1?'Yes':'No'}}</div>
                          </div>

                          <div class="text-content">
                              <div class="title">Next of Kin Name</div>
                              <div class="text">{{user.next_of_kin_name}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Next of Kin Age</div>
                              <div class="text">{{checkValueExist(user.next_of_kin_dob)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Next of Kin Email</div>
                              <div class="text">{{checkValueExist(user.next_of_kin_email)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Next of Kin Phone</div>
                              <div class="text">{{checkValueExist(user.next_of_kin_phone)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Next of Kin Address</div>
                              <div class="text">{{checkValueExist(user.next_of_kin_address)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Next of Kin Relationship</div>
                              <div class="text">{{checkValueExist(user.next_of_kin_relationship)}}</div>
                          </div>
                      </div>
                  </div>
                  <div class="wrapper-preview">
                      <div class="top-border-text">
                          Employment Information
                      </div>
                      <v-btn  class="top-btn" depressed dark> <v-icon size="25">mdi-pencil</v-icon></v-btn>
                          <div class="text-box">
                            <div class="text-content">
                                <div class="title">Employer Name</div>
                                <div class="text">{{checkValueExist(user.employer_name)}}</div>
                            </div>
                            <div class="text-content">
                                <div class="title">Employer Email</div>
                                <div class="text">{{checkValueExist(user.employer_email)}}</div>
                            </div>
                            <div class="text-content">
                                <div class="title">Employer Phone</div>
                                <div class="text">{{checkValueExist(user.employer_phone)}}</div>
                            </div>
                            <div class="text-content">
                                <div class="title">Employment State</div>
                                <div class="text">{{checkValueExist(user.employment_state)}}</div>
                            </div>
                            <div class="text-content">
                                <div class="title">Employment Present Position</div>
                                <div class="text">{{checkValueExist(user.employment_present_position)}}</div>
                            </div>
                            <div class="text-content">
                                <div class="title">Year of Experience</div>
                                <div class="text">{{checkValueExist(user.work_experience)}}</div>
                            </div>
                          </div>

                      <!-- <div class="employ-text-box">
                          <h4>OTHER EMPLOYMENTS</h4>
                      <v-data-table
                          :headers="headers"
                          :items="desserts"
                          hide-default-footer
                          class="elevation-1 mb-8"
                      ></v-data-table>
                      </div>
                      <div class="text-box">
                          <div class="employment-text-content">
                              <div class="title">Employment income (total annual pay)</div>
                              <div class="text">4,570,00</div>
                          </div>
                          <div class="employment-text-content">
                              <div class="title">employment income ( monthly gross pay )</div>
                              <div class="text">70,000</div>
                          </div>
                          <div class="employment-text-content">
                              <div class="title">employment income ( monthly net pay )</div>
                              <div class="text">377,488</div>
                          </div>
                          <div class="employment-text-content">
                              <div class="title">estimated monthly living expenses</div>
                              <div class="text">0.00</div>
                          </div>

                          <h4>OTHER SOURCES OF INCOME</h4>
                          <v-data-table
                          :headers="headers_1"
                          :items="desserts_1"
                          hide-default-footer
                          class="table elevation-1"
                      ></v-data-table>
                          <h4 class="standing">TOTAL : 60000</h4>
                          <h4 class="outstanding">OUTSTANDING LOANS</h4>
                          <v-data-table
                          :headers="headers_2"
                          :items="desserts_2"
                          hide-default-footer
                          class="table elevation-1 mb-5"
                          flat
                      ></v-data-table>
                      <div class="employment-text-content">
                              <div class="title">outstanding loans ( if any)</div>
                              <div class="text">no</div>
                          </div>
                      </div> -->
                  </div>


              <div class="wrapper-preview mg-bottom">
                      <div class="top-border-text">
                          Financial/Loan Information
                      </div>
                      <v-btn  class="top-btn" depressed dark> <v-icon size="25">mdi-pencil</v-icon></v-btn>
                      <div class="text-box">
                          <div class="text-content">
                              <div class="title">Total Annual Pay</div>
                              <div class="text">{{checkValueExist(user.total_annual_pay)|easy_currency}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Monthly Net Pay</div>
                              <div class="text">{{checkValueExist(user.monthly_net_pay)|easy_currency}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Monthly Gross Pay</div>
                              <div class="text">{{checkValueExist(user.monthly_gross_pay)|easy_currency}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Monthly Repayment</div>
                              <div class="text">{{checkValueExist(user.monthly_repayment)|easy_currency}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Property Value</div>
                              <div class="text">{{checkValueExist(mortgage.property_value)|easy_currency}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Loan Amount</div>
                              <div class="text">{{checkValueExist(mortgage.loan_amount)|easy_currency}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Down Payment</div>
                              <div class="text">{{checkValueExist(mortgage.down_payment)|easy_currency}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Max Loanable Amount</div>
                              <div class="text">{{user.loanable_amount|easy_currency}}</div>
                          </div>
                            <div class="text-content">
                              <div class="title">Estimated Loan Tenure</div>
                              <div class="text">{{checkValueExist(user.loan_tenure)}} years</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Loan type</div>
                              <div class="text">{{checkValueExist(mortgage.type)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Property Name</div>
                              <div class="text">{{checkValueExist(mortgage.property_name)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Property Title</div>
                              <div class="text">{{checkValueExist(mortgage.property_title)}}</div>
                          </div>
                          <div class="text-content">
                              <div class="title">Property Address</div>
                              <div class="text">{{checkValueExist(mortgage.property_address)}}</div>
                          </div>

                      </div>
              </div>
              </v-card-text>
                  </v-card>
      </v-container>
                        <!-- <v-card-actions class="card-action-btn">
                        <v-btn

                            outlined
                            width="150px"
                            class="modal-left-btn"
                            @click="dialog = false"
                        >
                            Close
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="green lighten-4"
                            text
                            width="150px"
                            @click="dialog = false"
                        >
                            Save
                        </v-btn>
                        </v-card-actions> -->
  </div>
</template>

<script>
import MortgageFormTitle from './MortgageFormTitle.vue';
import general_mixin from '@/mixins/general_mixin'
  export default {
    mixins:[general_mixin],
  components: { MortgageFormTitle },
    data(){
      return{
          headers: [
              {
                text: 'S/n',
                align: 'start',
                sortable: false,
                value: 'no',
                class:'green lighten-5'
              },
              { text: 'Company Name', value: 'company', class:'green lighten-5' },
              { text: 'Company Phone', value: 'phone', class:'green lighten-5' },
              { text: 'Company Address', value: 'address', class:'green lighten-5' },
              { text: 'Years', value: 'year', class:'green lighten-5' },
            ],
           headers_1: [
          {
            text: 'S/n',
            align: 'start',
            sortable: false,
            value: 'no',
            class:'green lighten-5'
          },
          { text: 'Sources', value: 'source', class:'green lighten-5' },
          { text: 'Amount / Year($)', value: 'amount', class:'green lighten-5' },
            ],
            headers_2: [
              {
                text: 'S/n',
                align: 'start',
                sortable: false,
                value: 'no',
                class:'green lighten-5'
              },
              { text: 'Lender', value: 'lender', class:'green lighten-5' },
              { text: 'Type', value: 'type', class:'green lighten-5' },
              { text: 'Frequency', value: 'frequency', class:'green lighten-5' },
              { text: 'Outstanding Amount ($)', value: 'amount', class:'green lighten-5' },
            ],
                headers_3: [
              {
                text: 'S/n',
                align: 'start',
                sortable: false,
                value: 'no',
                class:'green lighten-5'
              },
              { text: 'Docunments', value: 'docunment',class:'green lighten-5' },
              { text: 'Files', value: 'file', class:'green lighten-5'},
              { text: 'Status', value: 'status',class:'green lighten-5' },
              { text: 'Actions', value: 'action',class:'green lighten-5' },
            ],
            desserts: [
              {
                no: '1',
                company:'-',
                phone: '-',
                address:'-',
                year:'-',
              },
              {
                no: '2',
                company:'-',
                phone: '-',
                address:'-',
                year:'-',
              },
            ],
            desserts_1: [
              {
                no: '1',
                source:'60000',
                amount: '60000',
              },
            ],
            desserts_2: [
              {
                no: '1',
                lender:'-',
                type: '-',
                frequency:'-',
                amount:'-',
              },
            ],
            desserts_3: [
              {
                no: '1',
                docunment:'Passport Photo',
                file: '',
                status:'',
                action:'',
              },
              {
                no: '2',
                docunment:'Evidence of Employment',
                file: '',
                status:'',
                action:'',
              },
                {
                no: '3',
                docunment:'Sales/Allocation Offer Letter',
                file: '',
                status:'',
                action:'',
              },
                {
                no: '4',
                docunment:'Duly Completed Copy of Current Account Opening Form',
                file: '',
                status:'',
                action:'',
              },
              {
                no: '5',
                docunment:'Property Title Docunment',
                file: '',
                status:'',
                action:'',
              },
            ],
            mortgage:{}
      }
    },
    computed:{
      user_mortgage(){
        let t =  this.$store.state.mortgage.mortgage_status;
        this.mortgage =t;
      }
    },
    methods:{
      printPreview(){
        console.log("about to print")
        const prtHtml = document.getElementById('appprint').innerHTML;

              // Get all stylesheets HTML
              let stylesHtml = '';
              for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
                stylesHtml += node.outerHTML;
              }

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
       this.$store.dispatch("mortgage/getCurrentMortgageStatusAction")
    }
  }
</script>


<style lang="scss" scoped>

.negative{
  margin-top:-1rem;
}
.wrapper{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5rem;
}
.wrap{
    width: 100%;
    position: relative;
}
.span-icon{
    position: absolute;
    right: 0;
    top: 0;
    padding-left: 0.95rem;
    padding-top: 0.45rem;
    background: rgba(96, 97, 97, 0.808);
    width: 50px;
    height:40px;
}
.mg-top{
    margin-top: -1.5rem;
    display: flex;
}

.left,.right{
    position: absolute;
    top:0;
    height: 40px;
    width: 40px;
}
.left{
    left: 0;
    padding:0.45rem;
    padding-left:0.75rem;
    border-right: 1px solid grey;

}
.right{
    right: 0;
    background: rgba(128, 128, 128, 0.336);
    color: #000;
    font-size: 0.758rem;
    width: 55px;
    padding-top: 0.65rem;
    padding-left: 0.65rem;
}
h3{
    margin-top: -2rem;
    margin-bottom: 0.95rem;
}
#checkbox{
    margin-top:1.3rem!important;
}
.plus-btn{
    width:30%;
    height: 25px!important;
    margin-top:-2.5rem;
}
.plus-btn span{
     font-size:0.458rem;
}
.minus-btn{
    margin-top: -1.2rem;
    height: 45px!important;
}
.btn-top{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.ordinary{
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 3rem;
}
.wrapper-preview{
    position: relative;
    border: 1px solid $dashboard_color;
    border-radius: 10px;
    padding: 1rem;
    width: 100%;
    min-height: auto;
    margin-bottom: 2.5rem;
}
.wrapper-preview.mg-bottom{
    // margin-bottom: 1rem;
}
.top-border-text{
    width:15rem;
    font-weight: 500;
    font-size: 0.875rem;
    text-align: center;
    background: #fff;
    padding: 0.65rem;
    margin-top: -2.3rem;
    margin-left: 1.5rem;
    color: $dashboard_color;
    text-transform: uppercase;
    white-space:nowrap;
}
.top-btn{
    float: right;
    margin-top:-0.45rem;
    margin-bottom:1rem;
    background: transparent!important;
    color: grey!important;
    border: none!important;
}
.text-box{
    display: flex;
    align-items: center;
    justify-content:space-between;
    flex-wrap: wrap;
    width:100%;
}
.wrapper-preview h4{
    margin: 2rem 0;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.875rem!important;
    color: rgba(0, 0, 0, 0.87);
}
.standing,.outstanding{
    width: 100%;
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    font-size: 0.875rem!important;
    color: rgba(0, 0, 0, 0.87);
}
.outstanding{
    margin-top: -2rem!important;
}
.text-content{
     display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-bottom:0.75rem;
    width: 200px;
}
.employment-text-content{
    width: 30rem;
    margin-bottom: 1rem;
}
.table{
    width: 100%;
}
.title{
    color: rgba(0, 0, 0, 0.87);
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    font-size: 0.875rem!important;
}
.text{
    text-transform: capitalize;
    color: #666;
    font-size: 0.875rem!important;
    margin-top:-0.45rem;
}
.card-action-btn{
    width: 92%;
    margin-inline: auto;
    margin-top: -5rem!important;
}
.v-btn.modal-left-btn{
    background: transparent!important;
    color:$dashboard_color!important;;
}
@media(max-width:1000px){
    .top-border-text{
         margin-left:0rem;
    }
    .top-btn{
        margin-top:0.45rem;
        margin-bottom:1rem;
    }
}
</style>

