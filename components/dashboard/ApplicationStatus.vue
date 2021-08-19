<template>
    <div>
        <div class="application-status" >
          <div v-if="mortgage_status" >
                <v-row justify="space-between" >
                  <v-col cols="8" class="" lg="10">
                    <h4 class="application">Mortgage Application status</h4>
                </v-col>
                  <v-col cols="4" lg="2" class="float-right">
                    <v-btn @click="showPreview" color="accent"> <v-icon >mdi-eye</v-icon> View</v-btn>
                </v-col>
                <!-- <v-col class="col-6" md="2">
                    <v-btn depressed dark class="review" id="mobile-review-btn">Under Review</v-btn>

                </v-col> -->
                <application-preview-modal/>
            </v-row>
            <div class="content-box">

                    <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left top-table-color">
                              Home Name
                            </th>
                            <th class="text-left top-table-color">
                              Location
                            </th>
                            <th class="text-left top-table-color">
                              Property value
                            </th>
                            <th class="text-left top-table-color">
                              Loan Amount
                            </th>
                            <th class="text-left top-table-color">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="py-5 table-font">{{mortgage_status.property_name}} </td>
                            <td class="py-5 table-font">{{ mortgage_status.property_address }}</td>
                            <td class="py-5 table-font">{{formatCurrency( mortgage_status.property_value )}}</td>
                            <td class="py-5 table-font">{{ formatCurrency(mortgage_status.loan_amount )}}</td>
                            <td class="py-5 table-font"> {{mortgage_status.status.status}} </td>
                          </tr>
                        </tbody>
                      </template>
                  </v-simple-table>
            </div>
          </div>
          <div v-if="!mortgage_status" class="d-flex justify-space-between">
              <h4 class="application">No Active Mortgage Application </h4>
               <nuxt-link to="/dashboard/mortgage"><v-btn depressed dark class="apply-btn" outlined>Apply</v-btn></nuxt-link>
              </div>
        </div>



    </div>
</template>

<script>
import general_mixin from '@/mixins/general_mixin'
import ApplicationPreviewModal from './mortgage/ApplicationPreviewModal.vue'
    export default {
  components: { ApplicationPreviewModal },
      mixins:[general_mixin],
        name:"dashboard",
        props:{
          mortgage_status:{type:Object}
        },
        computed:{

        },
        methods:{
          showPreview(){
            this.activateModal("application_preview",true)
          }
        }
    }
</script>

<style lang="scss" scoped>
.top-table-color{
  color:$gray-text !important;
}
.table-font{
  font-size:16px !important;
  font-weight: 500;
  // border-right:1px solid #666;
}
.application-status{
    width: 100%;
    background-color: #fff;
    border-radius: 6px;
    padding: 1rem 3.5rem 1rem 1rem;
    // padding: 1rem;
}
.content-box{
    width: 96.5%;
    margin-left:0;
}
.good-morning{
    font-size: 17px;
    color: rgba(0,0,0,.603);
    padding: 29px 0 1rem;
    margin-bottom: 0;
}
.apply-btn{
    display:block;
    border: 1px solid #039c71;
    color: #039c71;
    border-radius: 6px;
    font-size:0.875rem!important;
    padding: 8px 54px!important;
    font-weight: 700;
    // margin: 20px auto;
    transition: all .4s;
}
.apply-btn:hover{
    background: #039c71!important;
    color: #fff!important;
}
.application{
    color:$dashboard_color;
    font-weight: 500;
    font-size:0.875rem;
}
// .v-icon{
//     color: #1359f2;
//     font-weight: 700;
//     font-size: 13px;
//     margin-right: 10px;
// }
.view{
    color: #1359f2;
    background-color: rgba(135, 155, 197, 0.1)!important;
    font-weight: 700;
    font-size: 13px;
    border-radius: 6px;
    padding: 8px 17px;
    cursor: pointer;
     Width:131px!important;
    Height:40px!important;
    // margin-top: -0.85rem;
}



.bedroom{
    font-size:0.75rem;
    font-weight: 700;
    line-height: 17px;
    text-align: left;
    color: #666666;
     width: 164px;
     margin-top: -0.75rem;
}
.cash{
    font-size:1.25rem;
    line-height: 36px;
    letter-spacing: -0.005em;
    text-align: left;
    color: #666666;
     margin-top: -0.75rem;
}


@media(max-width:900px){
    .application-status{
        width: 100%;
        margin:0 auto;
        padding:0.65rem!important;
    }
    .content-box{
        width: 100%;
        margin:0 auto;
    }

}
</style>

