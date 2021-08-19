<template>
   <div>
     <breadcrumb page="Application Summary">
            <template v-slot:right>

            </template>
        </breadcrumb>
     {{mortgage_data}}
       <v-container>
          <div class="d-flex justify-space-between">
            <span class="cursor"  @click="$router.go(-1)"><v-icon size="30">mdi-chevron-left</v-icon> Go back </span>
            <div class="">
              <v-menu class=""
                rounded="b-xl"
                offset-y
                >
                <template v-slot:activator="{ attrs, on }">
                    <v-btn width="150px"
                    class="menu-btn"
                    outlined
                    v-bind="attrs"
                    v-on="on"
                    >Action
                    <v-spacer></v-spacer>
                    <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item class=""
                    v-for="(item,i) in action_menu"
                    :key="i"
                    link
                    >
                    <v-list-item-title> <v-icon>{{item.icon}}</v-icon> {{item.text}}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            </div>
        </div>

        <v-card elevation="1"  class="summary-card">
            <v-card-text>
                <div class="first flex-wrap" v-if="mortgage.user">
                    <title-sub class="p" title="Ref Number" :subtitle="mortgage.app_ref"/>
                    <title-sub class="p" title="Name" :subtitle="`${mortgage.user.firstname+' '+mortgage.user.lastname}`"/>
                    <title-sub class="p" title="Date of Birth" :subtitle="mortgage.user.dob| appDate"/>
                    <title-sub class="p" title="Employment Status" :subtitle="mortgage.user.employment_status"/>
                </div>
                <div class="loan-amount-info " v-if="mortgage.user">
                    <div class="amount">
                        <p class="amount-name">Monthly Income</p>
                        <p class="amount-price">{{mortgage.user.monthly_net_pay|easy_currency}}</p>
                    </div>
                    <div class="amount-divider"></div>
                    <div class="amount">
                        <p class="amount-name">Loanable</p>
                        <p class="amount-price">{{mortgage.loan_amount|easy_currency}}</p>
                    </div>
                    <div class="amount-divider"></div>
                    <div class="amount">
                        <p class="amount-name">Tenure</p>
                        <p class="amount-price">{{mortgage.loan_tenure}} Years</p>
                    </div>
                </div>
                <div class="affordability-info">
                    <title-sub  class="p" title="Application Status" :subtitle="mortgage.status.status"/>
                     <title-sub class="p"  title="Application type" :subtitle="mortgage.type"/>
                     <title-sub class="p"  title="Affordability Status" :showBadge="true"  >
                            <template v-slot:badge>
                               <v-chip class="ma-2" :color="mortgage.eligibility_result==1?'green':'red'" label
                                text-color="white">{{mortgage.eligibility_result==1?'Pass':'Fail'}}
                                 <v-icon right class="cursor" @click="showAffordability()">
                                    mdi-eye
                                </v-icon>
                                </v-chip>
                            </template>
                     </title-sub>
                </div>
                <!-- <div class="property-info">
                    <span class="label">
                        Property Request Data
                    </span>
                    <div class="detail d-flex flex-wrap">
                         <v-col cols="12" md="3"><title-sub  title="Property Value" subtitle="Mort2345678"/></v-col>
                         <v-col cols="12" md="3"><title-sub  title="Property State" subtitle="Mort2345678"/></v-col>
                         <v-col cols="12" md="3"><title-sub  title="Property City" subtitle="Mort2345678"/></v-col>
                         <v-col cols="12" md="3"><title-sub  title="Property Type" subtitle="Mort2345678"/></v-col>
                         <v-col cols="12" md="3"><title-sub  title="Property Bedroom" subtitle="Mort2345678"/></v-col>
                         <v-col cols="12" md="3"><title-sub  title="Property Bathroom" subtitle="Mort2345678"/></v-col>
                    </div>
                </div> -->

            </v-card-text>
        </v-card>
        <affordability-result :info="mortgage" >
              <template v-slot:status>
                <!-- <v-chip class="ma-2" color="green" label
                text-color="white">Pass
                </v-chip> -->
                <v-chip class="ma-2" :color="mortgage.eligibility_result==1?'green':'red'" label
                    text-color="white">{{mortgage.eligibility_result==1?'Pass':'Fail'}}
                </v-chip>
            </template>
        </affordability-result >
       </v-container>
    </div>
</template>
<script>
import general_mixin from '@/mixins/general_mixin'
import mortgage_mixin from '@/mixins/mortgage_mixin'
import AffordabilityResult from '@/components/dashboard/AffordabilityResult.vue'
import {mapState} from 'vuex'
export default {
  components: { AffordabilityResult },
    name:"ApplicationSummary",
    mixins:[general_mixin,mortgage_mixin],
    layout:'dashboard',
    data(){
        return{
            slug:this.$route.params.slug,
            action_menu:[
                {icon:'mdi-eye-outline',text:'View Details',action:'view'},
                // {icon:'mdi-comment-question-outline',text:'Query Application',action:'query'},
                // {icon:'mdi-bookmark-check-outline',text:'Verify Application',action:'verify'},
                // {icon:'mdi-check-box-outline',text:'Approve Application',action:'approve'},
                // {icon:'mdi-text-box-remove-outline',text:'Decline Application',action:'decline'},
            ],
            mortgage:{}


        }
    },
    computed:{
        mortgage_data() {
          let m = this.$store.state.details;
          this.mortgage = m;
          console.log('mortage-detail:',m);
          // return m;
        },
    },

    methods:{
        showAffordability(){
            this.activateModal('affordability_modal',true);
        },
         fetchMortgageDetails(slug) {
      this.$store.dispatch("getMortgageDetailsAction", slug);
    }


    },
    created(){
        this.fetchMortgageDetails(this.slug);
    }
}
</script>
<style lang="scss" scoped>
.menu-btn{
    float: right;

}
    .summary-card{
        background-color: #ffffff;
        border-radius: 10px !important;
        padding: 43px 37px;
        margin-top: 2rem;
        margin-bottom:50px;
          .first{
            display: flex;
            border-bottom: 1px solid rgba(46, 106, 240, 0.1);
            padding-bottom: 30px;
            justify-content: space-between;
            .p{
              // width:25%;
            }
        }
        .loan-amount-info{
                display: flex;
                justify-content: space-around;
                margin-top: 29px;
                border: 1px dashed $dashboard_color;
                background-color: $green_lighten_five;
                border-radius: 16px;
                margin-bottom: 18px;
                .amount{
                        text-align: center;
                        padding: 40px 0px;

                    .amount-name{
                        font-size: 14px;
                        color: #666666;
                        margin-bottom: 3px;
                    }
                    .amount-price{
                        margin-bottom: 0;
                        font-size: 24px;
                        font-weight: 700;
                        line-height: 29px;
                        color: $dashboard_color;
                    }

                }
                .amount-divider{
                        border: 1px solid rgba(46, 106, 240, 0.1);

                }
        }
        .affordability-info{
            display: flex;
            border-top: 1px solid rgba(46, 106, 240, 0.1);
            border-bottom: 1px solid rgba(46, 106, 240, 0.1);
            padding-top: 34px;
            padding-bottom: 20px;
            margin-bottom: 25px;
            justify-content: space-around;
        }
        .property-info {
            width:100%;
            .label{
            background-color: $green_lighten_five;
            color: #333333;
            font-size: 13px;
            right: -54px;
            position: relative;
            display: inline-block;
            font-size: 11px;
            top: 9px;
            right: -13px;
            color: #333333;
            // background-color: #fff;
            padding: 0px 13px;
            z-index: 23;
            }
            .detail{
                display: flex;
                padding: 21px 0px 21px 42px;
                border: 1px dashed rgba(46, 106, 240, 0.1);
                border-radius: 8px;
                justify-content: flex-start;
            }
        }

        .doc-div{
            border: 1px dashed blue;
            // padding:20px 10px;
            min-height: 200px;
        }
    }
  @media (max-width:900px){
      .summary-card{
        background-color: #ffffff;
        // border-radius: px !important;
        padding: 15px 5px;
        // margin-top: 55px;
          .first{
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid rgba(46, 106, 240, 0.1);
            padding-bottom: 30px;
            justify-content: space-between;
            align-items: flex-start;
            .p{
              margin:.5rem;
            }
        }
      }
      .affordability-info{
            flex-direction: column;
            justify-content: space-between;
            .p{
              margin:0.5rem;
            }
        }
       .loan-amount-info{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                margin-top: 29px;
                // border: 1px dashed #2e6af0;
                // background-color: #
                border-radius: 16px;
                margin-bottom: 18px;
             .amount{
                width:100%;
                text-align: center;
            }
       }
      .amount-price{
          font-size:12px;
      }
  }
</style>
