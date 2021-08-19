<template>
    <div>
      <breadcrumb page="New Application">
            <template v-slot:right>

            </template>
        </breadcrumb>

        <v-container>
          <v-card rounded class="mortgage-form">
            <mortgage-form-title left="Mortgage" right="Personal">
              <template v-slot:action>
                    <v-progress-linear class="progress"
                    v-model="percent"
                    color="accent"
                    height="15"
                  >
                  <template v-slot:default="{ value }">
                    <!-- <strong>{{ Math.ceil(value) }}%</strong> -->
                    <span>{{step }} of 5  </span>
                  </template>
              </v-progress-linear>

              </template>
            </mortgage-form-title>
            <v-card-text>
               <form >
                <div class="content" v-if="step===1">
                    <div class="view">
                      <v-row class="mb-8">

                          <v-col class="col-12" md="6">
                              <div class="mg-top">
                                   <v-text-field :rules="[rules.required]" label="First Name" outlined  ></v-text-field>
                              </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                               <div class="mg-top">
                                    <v-text-field :rules="[rules.required]" label="Last Name" outlined  ></v-text-field>
                               </div>
                          </v-col>
                          <v-col class="col-12" md="6">
                              <div class="mg-top">
                                  <v-text-field :rules="[rules.required]" label="Middle Name" outlined  ></v-text-field>
                              </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Mother's Maiden Name" outlined  ></v-text-field>
                               </div>
                          </v-col>
                           <v-col class="col-12" md="12">
                               <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Address" outlined  ></v-text-field>
                               </div>
                          </v-col>
                          <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Email Address" type="email" outlined  ></v-text-field>
                               </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Phone" type="Tel" outlined  ></v-text-field>
                               </div>
                          </v-col>
                          <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-text-field
                                label="Date of Birth"
                                outlined

                                type="date"
                                ></v-text-field>
                               </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-select
                                label="Sex"
                                :items="['Male','Female']"
                                outlined


                                ></v-select>
                               </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Place of Birth" type="text" outlined  ></v-text-field>
                               </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-select
                                label="Nationality"
                                :items="['Nigeria','Ghana','USA']"
                                outlined


                                ></v-select>
                               </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-select
                                label="State of Origin"
                                :items="['Osun','Lagos','Ibadan']"
                                outlined


                                ></v-select>
                               </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-select
                                label="Highest Educational Qualification"
                                :items="['Mst','Bse','HND']"
                                outlined


                                ></v-select>
                               </div>
                          </v-col>
                          <v-col class="col-12" md="12">
                               <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Profession" type="text" outlined  ></v-text-field>
                               </div>
                          </v-col>
                           <v-col class="col-12" md="3">
                               <div class="mg-top">
                                <v-select
                                label="Means of Identification"
                                :items="['Voters Card','National Id','Tax id']"
                                outlined


                                ></v-select>
                               </div>
                          </v-col>
                          <v-col class="col-12" md="3">
                               <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Id Number" type="tel" outlined  ></v-text-field>
                               </div>
                          </v-col>
                            <v-col class="col-12" md="3">
                               <div class="mg-top">
                                <v-text-field
                                outlined

                                label="Date of Issue"
                                type="date"
                                ></v-text-field>
                               </div>
                          </v-col>
                          <v-col class="col-12" md="3">
                               <div class="mg-top">
                                <v-text-field
                                outlined

                                label="Expiry Date"
                                type="date"
                                ></v-text-field>
                               </div>
                          </v-col>
                      </v-row>
                    </div>
                </div>
                <div class="content" v-if="step===2">
                    <div class="view">
                      <v-row class="mb-8">
                          <v-col class="col-12" md="12">
                               <p>Ordinary Mortgage | Personal Info</p>
                          </v-col>
                          <v-col class="col-12" md="12">
                               <h3>Nice to meet you Oba! Moving on,please tell me about your current employment</h3>
                          </v-col>
                          <v-col class="col-12" md="6">
                              <div class="mg-top">
                                      <v-text-field :rules="[rules.required]" label="Company Name" outlined  ></v-text-field>
                              </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                               <div class="mg-top">
                                      <v-text-field :rules="[rules.required]" label="Company Email Address" type="email" outlined  ></v-text-field>
                               </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Address of Employer ( If less than three years, give name of previous employer )" outlined  ></v-text-field>
                               </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Employee Phone no" type="Tel" outlined  ></v-text-field>
                               </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Present Position" outlined  ></v-text-field>
                               </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Number of Years to Retirement" outlined  ></v-text-field>
                               </div>
                          </v-col>
                          <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Years at Current Employment" outlined  ></v-text-field>
                               </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-select
                                label="Has your Employment be Confirm"
                                :items="['Yes','No']"
                                outlined


                                ></v-select>
                               </div>
                          </v-col>
                      </v-row>
                    </div>
                </div>
                 <div class="content" v-if="step===3">
                   <div class="view">
                      <v-row class="mb-8">
                          <v-col class="col-12" md="12">
                               <p>Ordinary Mortgage | Personal Info</p>
                          </v-col>
                          <v-col class="col-12" md="12">
                                <h3>Hope you don't mind me getting a little personal... Don't worry, it's nothing outside what is required</h3>
                          </v-col>
                          <v-col class="col-12" md="6">
                              <div class="mg-top">
                                   <v-select
                                :items="['Owned','Rented','Others']"
                                outlined
                                label="Current home type"


                                ></v-select>
                              </div>
                          </v-col>
                          <v-col class="col-12" md="6">
                              <div class="mg-top">
                                   <v-select
                                :items="['Single','Married','Divorce']"
                                outlined
                                label="Marital Status"


                                ></v-select>
                              </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                               <div class="mg-top">
                                    <v-select
                                label="Children"
                                :items="['Yes','No']"
                                outlined


                                ></v-select>
                               </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Next-of-Kin's Name" outlined  ></v-text-field>
                               </div>
                          </v-col>
                          <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Next-of-Kin's Relationship" type="email" outlined  ></v-text-field>
                               </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Next-of-Kin's Age" type="Tel" outlined  ></v-text-field>
                               </div>
                          </v-col>
                          <v-col class="col-12" md="12">
                               <div class="mg-top">
                                <v-text-field
                                outlined
                                label="Next-of-Kin's Address"

                                ></v-text-field>
                               </div>
                          </v-col>
                      </v-row>
                    </div>
                </div>
                <div class="content" v-if="step===4">
                     <div class="view">
                      <v-row class="mb-8">
                          <v-col class="col-12" md="12">
                               <p>Ordinary Mortgage | Personal Info</p>
                          </v-col>
                          <v-col class="col-12" md="12">
                               <h3>Looking good Oba! Let's talk about your Finances, our partner lenders will need info below</h3>
                          </v-col>
                          <v-col class="col-12" md="6">
                              <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Total Annual Pay" outlined    full-width></v-text-field>
                              </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                                <div class="mg-top">
                                    <v-text-field :rules="[rules.required]" label="Monthly Gross Pay" outlined   ></v-text-field>
                                </div>
                          </v-col>
                            <v-col class="col-12" md="6">
                                <div class="mg-top">
                                    <v-text-field :rules="[rules.required]" label="Monthly Net Pay" outlined   ></v-text-field>
                                </div>
                          </v-col>
                            <v-col class="col-12" md="6">
                                <div class="mg-top" v-if="appear=1">
                                    <v-select
                                    :items="['Male','Female']"
                                    outlined
                                    ></v-select>
                                </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                                <div class="mg-top">
                                    <v-text-field
                                    label="Other Sources of Income"
                                    outlined
                                    ></v-text-field>
                                </div>
                          </v-col>
                            <v-col class="col-12" md="5">
                                <div class="mg-top">
                                    <v-text-field
                                    outlined
                                    ></v-text-field>
                                </div>
                          </v-col>
                           <v-col class="col-12" md="1">
                                <div class="btn-top">
                                <v-btn dark depressed color="primary" class="plus-btn"> <v-icon size="12">mdi-plus</v-icon> <span>Total:0.00</span> </v-btn>
                                  <v-btn dark depressed color="primary" class="minus-btn"> <v-icon>mdi-minus</v-icon> </v-btn>
                                </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                                <div class="mg-top">
                                    <v-select
                                    :items="['Yes','No']"
                                    label="Outstanding Loan ( if yes )"
                                    outlined
                                    ></v-select>
                                </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                                <div class="mg-top">
                                    <v-select
                                    :items="['Yes','No']"
                                    label="Other Monthly expenses"
                                    outlined
                                    ></v-select>
                                </div>
                          </v-col>
                      </v-row>
                    </div>
                </div>
                <div class="content" v-if="step===5">
                    <div class="view">
                      <v-row class="mb-8">
                          <v-col class="col-12" md="12">
                               <p>Ordinary Mortgage | Personal Info</p>
                          </v-col>
                          <v-col class="col-12" md="12">
                                <h3>Looking good Oba! Let's talk about your Finances, our partner lenders will need info below</h3>
                          </v-col>
                          <v-col class="col-12" md="6">
                              <div class="mg-top">
                                   <v-select
                                :items="['Owned','Rented','Others']"
                                outlined
                                label="Proposed Equity Contribution"
                                ></v-select>
                              </div>
                          </v-col>
                          <v-col class="col-12" md="6">
                              <div class="mg-top">
                                    <v-text-field label="Loan Amount" outlined  ></v-text-field>
                              </div>
                          </v-col>
                           <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Property Title" outlined   ></v-text-field>
                               </div>
                          </v-col>
                          <v-col class="col-12" md="6">
                               <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Property Address" type="email" outlined  ></v-text-field>
                               </div>
                          </v-col>
                           <v-col class="col-12" md="12">
                               <div class="mg-top">
                                <v-text-field :rules="[rules.required]" label="Property Value"  outlined  ></v-text-field>
                               </div>
                          </v-col>
                          <v-col class="col-12" md="12">
                               <div class="mg-top">
                                <v-textarea
                                label="Property Description"
                                outlined
                                 name="input-7-4"
                                 auto-grow
                                 autocomplete

                                ></v-textarea>
                               </div>
                          </v-col>
                          <v-col class="col-12" md="12">
                              <div class="mg-top">
                                    <v-checkbox
                                    v-model="ex4"
                                    color="red"
                                    value="red"
                                    hide-details
                                    ></v-checkbox> <p  id="checkbox">i Oba declare that the information provided above is Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequuntur saepe doloribus maxime, esse, porro dolorem vitae officiis repudiandae voluptatum sapiente corporis. Fugiat ipsa nesciunt sit explicabo necessitatibus doloribus eius quidem debitis soluta reiciendis quas dolor asperiores expedita, illo in distinctio minus id eveniet doloremque dolores iure cum. Voluptatibus, neque!</p>
                              </div>
                          </v-col>
                      </v-row>
                    </div>
                </div>

            </form>
            <div class="content" v-if="step==6">
                    <preview-layout/>
                </div>
            </v-card-text>
          </v-card>
        </v-container>
           <bottom-navigation :width="$vuetify.breakpoint.smAndDown?'8rem':'12rem'" :showBlock="false" :showPrevious="step>1?true:false" :previousAction="previousAction" :nextAction="nextAction"
            :continueText="step<totalStep?'Continue':'Submit'" />



    </div>
</template>

<script>
// import PropertyCard from '../components/property/PropertyCard.vue'
import general_mixin from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
// import RequestParent from '../components/profiling/request/RequestParent.vue'
import FormBottom from '@/components/navigation/FormBottom.vue'
import BottomNavigation from '@/components/navigation/BottomNavigation.vue'
import PreviewLayout from '@/components/dashboard/mortgage/PreviewLayout.vue'
import MortgageFormTitle from '@/components/dashboard/mortgage/MortgageFormTitle.vue'
    export default {
        name:"mortgage",
        layout:'dashboard',
        components: { FormBottom,BottomNavigation,PreviewLayout,MortgageFormTitle},
        mixins:[general_mixin,form_mixin],
        data(){
            return{
              percent:20,
                step:1,
                sheet:true,
                appear:1,
                search: '',
                dialog: false,
            date:'',
            items:['Male','Female'],

            }
        },
          computed:{
        dob:{
            set:function(v){
                this.form.dob = v;
            },
            get:function(){
                // return this.$moment(String(this.form.dob)).format('yyyy-MM-DD')
            }
        },
        marital_status:{
            set:function(v){

                this.form.marital_status = v.toLowerCase()
            },
            get:function(){
                console.log(this.form.marital_status.toUpperCase())
                return this.capitalizeFirst(this.form.marital_status)
            }
        },
        mode_of_contact:{
            set:function(v){
                this.form.mode_of_contact = v.toLowerCase

            },
            get:function(){
                 return this.capitalizeFirst(this.form.mode_of_contact)
            }
        },

        showPreviousButton(){
            if(this.step > 1){
                return true;
            }
            return false;
        }
    },
        methods:{
            nextAction(){
                this.step++


            },
            previousAction(){
                this.step--
            },
            previous(){
                this.step--
            },
               next(){
                this.step++
            },
               submit(){
                alert('Congratulation')
            },
            print(){
                window.print();
            },
            showPreview(){
            this.activateModal('application_preview',true);
            },
        },

    }
</script>

<style lang="scss" scoped>
  .mortgage-form{
    margin-top:-1rem;
    margin-bottom: 10rem;
  }
    .progress{
    width:70%;
  }


  @media (max-width:900px){
   .v-card__text{
      padding:5px;
    }
  }
.form-group{
        padding-bottom:15px;
    }
   .v-text-field .v-input__control .v-input__slot {
    min-height: auto !important;
    height: 45px;
    display: flex !important;
    align-items: center !important;
  }




  /* progressbar */
  #progressbar {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    overflow: hidden;
    // color: lightgrey;
    width:100%;

}
#progressbar li{
    list-style: none;
    width:25%;

}
.step{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    // margin: 0 auto 5px auto;
    .circle{
        width:40px;
        height: 40px;
        border-radius: 50%;
        background:#BDBDBD;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
          @include app-font(normal,800,18px,28px);
        color:#6E7191;

    }
    h4{
        margin-top:10px;
    }
    .inactive-text{
         @include app-font(normal,500, 0.8rem,1rem);
        color:#A0A3BD;
        letter-spacing: 0.02em;
        text-align: center;
    }
    .active-text{
     @include app-font(normal,800, 0.8rem,1rem);
        color:#16465C;
        letter-spacing: 0.02em;
        text-align: center;
    }
    .active-circle{
        width:40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;
    @include app-font(normal,800,18px,28px);
            color:#fff;
            background:#6FA73D;
    }
}

.step::after{
    content: '';
    width: 100%;
    height: 2px;
    background:#A0A3BD;
    position: absolute;
    right: -50%;
    top: 20px;
    z-index: 0;
}
#profile::after {
 content: none
}


.mortgage-form{
  border-radius: 12px;
    background: #fff;
}

.view{
    min-height:auto;
    position: relative;
    padding:1.5rem;
}
.content{
    width: 100%;
    min-height: auto;
}

.action-btn{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
}
.v-btn{
    text-transform: capitalize!important;;
    background: #039c71!important;
    color: #fff!important;
    border-radius: 6px;
    font-size:0.875rem!important;
    font-weight: 700;
    margin: 20px auto;
    transition: all .4s;
}
.v-btn:hover{
    background: #039c71!important;
    color: #fff!important;
}
.v-btn.next{
    background: transparent!important;
    color: #039c71!important;
    border: 1px solid #039c71!important;
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
    border: 1px solid green;
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
    color: green;
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
    color: green!important;;
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
