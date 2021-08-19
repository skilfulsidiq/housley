<template>
    <div>
         <breadcrumb page="My Applications">
            <template v-slot:right>

            </template>
        </breadcrumb>
        <v-container class="no-print">
          <v-row justify="center" >
            <v-col class="col-12" md="12">
               <v-card elevation="0" class="pa-2">
                <v-card-title>
                  <div class="float-right">
                  <h5>Submitted Applications</h5>
                  <ActionButton color="accent" text="Apply for Mortgage" height="35px" :block="false" type="button" :action="apply"/>
                </div>
                </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col md="4">
                    <v-text-field
                      v-model="search"
                      append-icon="mdi-magnify"
                      outlined
                      dense
                      hide-details
                      ></v-text-field>
                  </v-col>
                </v-row>
                <v-divider class="mt-5"></v-divider>
                <v-data-table
                  :headers="headers"
                  :items="mortgage_list"
                  :search="search"
                  hide-default-footer
                  >
                  <template slot="item.no" slot-scope="props">
                          {{ props.index+1 }}
                      </template>
                    <template v-slot:item.loan_amount="{ item }"><span>N {{formatCurrency(item.loan_amount)  }}</span></template>
                    <template v-slot:item.property_value="{ item }"><span>N {{formatCurrency(item.property_value)  }}</span></template>
                    <template v-slot:item.down_payment="{ item }"><span>N {{formatCurrency(item.down_payment)  }}</span></template>
                    <template v-slot:item.status="{ item }"><span>{{item.status.status }}</span></template>
                    <template v-slot:item.action="{ item }">
                      <nuxt-link :to="{name:'dashboard-application-slug',params:{slug:item.slug}}">
                           <v-btn icon > <v-icon>mdi-eye-outline</v-icon></v-btn>
                      </nuxt-link>

                    </template>
                  </v-data-table>
              </v-card-text>
              </v-card>
            </v-col>
          </v-row>

        <!-- <ViewModal/> -->
        </v-container>
    </div>
</template>

<script>
import ApplicationStatus from '@/components/dashboard/ApplicationStatus.vue'
import ActionButton from '@/components/ActionButton.vue'
import general_mixin from '@/mixins/general_mixin'
import mortgage_mixin from '@/mixins/mortgage_mixin'
export default {
    mixins:[general_mixin,mortgage_mixin],
      name:"application",
      layout:'dashboard',
      components:{ActionButton,ApplicationStatus},
      data () {
        return {
          search:'',
          tab: null,
          headers: [
            {
              text: 'S/n',
              align: 'start',
              sortable: false,
              value: 'no',
              class:"green lighten-5"
            },
            { text: 'Ref No', value: 'app_ref',class:"green lighten-5" },
            { text: 'Property value', value: 'property_value',class:"green lighten-5" },
            { text: 'Loan value', value: 'loan_amount',class:"green lighten-5" },
            { text: 'Down payment', value: 'down_payment',class:"green lighten-5" },
            { text: 'Tenure (Y)', value: 'loan_tenure',class:"green lighten-5" },
            { text: 'Status', value: 'status',class:"green lighten-5" },
            { text: 'Action', value: 'action',class:"green lighten-5" },
          ],

        }
      },
      computed:{
         mortgage_list() {
        let r = this.$store.state.mortgage.mortgages_list;
        console.log('mylist', r)
        return r;
      },
      },
    methods:{
        goDetail(item){
          this.appLoading(true);
           this.$store.dispatch("mortgage/getMortgageDetailsAction", item.slug).then((res)=>{
              this.appLoading(false);
              this.$router.push({name:'dashboard-application-slug',params:{slug:item.slug}})
                console.log("mortgage Details")
           }).catch(err=>{
              this.appLoading(false);
              console.log(err.response)
           });

      },
      fetchMortgageList() {
      this.$store.dispatch("mortgage/getMortgageListAction");
       },
       apply(){
         this.$router.push('/dashboard/mortgage')
       }

    },
    created(){
          this.fetchMortgageList()
    }
  }
</script>

<style lang="scss" scoped>

.float-right{
 display: flex;
 align-items: center;
 justify-content: space-between;
 flex-wrap: wrap;
 width: 100%;
}
</style>
