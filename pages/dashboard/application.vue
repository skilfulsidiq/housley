<template>
  <div>
        <div class="content_body">
          <h3 class="app_head">Applications</h3>
          <p class="app_para">
            Viverra vel rhoncus dui, at donec enim. Eget commodo felis, at
            quisque purus proin libero .
          </p>
        </div>

        <div class="table_cover">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">s/n</th>
                <th scope="col">Application number</th>
                <th scope="col">Date of application</th>
                <th scope="col">Loan Amount</th>
                <th scope="col">Down Payment</th>
                <th scope="col">Tenure</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(a,i) in mortgage_list" :key="a.id">
                <td>{{i+1}}</td>
                <td>{{a.app_ref}}</td>
                <td>{{a.created_at | appDate}}</td>
                <td>{{a.loan_amount|easy_currency}}</td>
                <td>{{a.down_payment|easy_currency}}</td>
                <td>{{a.loan_tenure}} Years</td>
                <td class="td-text">
                  <mortgage-status-badge v-if="determineStatus(a)" :status="a.status.status"/>
                  <mortgage-status-badge v-if="!determineStatus(a)" status="incomplete"/>
                  </td>
                <td class="td-text">

                  <div class="d-flex">
                  <div v-if="!determineStatus(a)" class="action cursor"  @click="completeMortgage"> <i class="fa fa-pencil text-primary"></i>
                  </div>

                      <div class="action cursor" @click=" goDetail(a)">
                      <svg
                        class="svg-icon"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.99994 13.6083C8.00827 13.6083 6.3916 11.9916 6.3916 9.99994C6.3916 8.00827 8.00827 6.3916 9.99994 6.3916C11.9916 6.3916 13.6083 8.00827 13.6083 9.99994C13.6083 11.9916 11.9916 13.6083 9.99994 13.6083ZM9.99994 7.6416C8.69994 7.6416 7.6416 8.69994 7.6416 9.99994C7.6416 11.2999 8.69994 12.3583 9.99994 12.3583C11.2999 12.3583 12.3583 11.2999 12.3583 9.99994C12.3583 8.69994 11.2999 7.6416 9.99994 7.6416Z"
                          fill="#38CB89"
                        />
                        <path
                          d="M9.9999 17.5167C6.86657 17.5167 3.90824 15.6834 1.8749 12.5001C0.991569 11.1251 0.991569 8.8834 1.8749 7.50006C3.91657 4.31673 6.8749 2.4834 9.9999 2.4834C13.1249 2.4834 16.0832 4.31673 18.1166 7.50006C18.9999 8.87506 18.9999 11.1167 18.1166 12.5001C16.0832 15.6834 13.1249 17.5167 9.9999 17.5167ZM9.9999 3.7334C7.30824 3.7334 4.73324 5.35006 2.93324 8.17507C2.30824 9.15006 2.30824 10.8501 2.93324 11.8251C4.73324 14.6501 7.30824 16.2667 9.9999 16.2667C12.6916 16.2667 15.2666 14.6501 17.0666 11.8251C17.6916 10.8501 17.6916 9.15006 17.0666 8.17507C15.2666 5.35006 12.6916 3.7334 9.9999 3.7334Z"
                          fill="#38CB89"
                        />
                      </svg>

                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- View Modal -->
       <mortgage-detail-for-user/>
        <!-- End View Modal -->

        <div class="res_table_cover" v-for="a in mortgage_list" :key="a.id">
          <div class="res_table">
            <!-- 1 -->
            <div class="">
              <span class="res_table_label">Application number</span>
              <h6 class="res_table_data">{{a.app_ref}}</h6>
            </div>
            <!-- 2 -->
            <div class="res_table_">
              <span class="res_table_label">Date of application</span>
              <h6 class="res_table_data">{{a.created_at | appDate}}</h6>
            </div>
            <div class="res_table_">
              <span class="res_table_label">Loan Amount</span>
              <h6 class="res_table_data">{{a.loan_amount|easy_currency}}</h6>
            </div>
            <div class="res_table_">
              <span class="res_table_label">Down Payment</span>
              <h6 class="res_table_data">{{a.down_payment|easy_currency}}</h6>
            </div>
            <div class="res_table_">
              <span class="res_table_label">Tenure</span>
              <h6 class="res_table_data">{{a.loan_tenure}} Years</h6>
            </div>
            <!-- 3 -->
            <div class="res_table_">
              <span class="res_table_label">Status</span>

              <div v-if="determineStatus(a)" class="pill_p res_info"><mortgage-status-badge :status="a.status.status"/></div>
              <div v-if="!determineStatus(a)" class="pill_r res_info"><mortgage-status-badge status="incomplete"/></div>
            </div>
            <!-- 4 -->
            <div class="res_table_">
              <span class="res_table_label">Action</span>
                <div class="d-flex">
                  <div  v-if="!determineStatus(a)" class="action res_info cursor" @click="completeMortgage"> <i class="fa fa-pencil text-primary"></i>&nbsp;&nbsp; Update </div>
                  <div class="action res_info cursor" @click=" goDetail(a)">
                  <svg
                    class="svg-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99994 13.6083C8.00827 13.6083 6.3916 11.9916 6.3916 9.99994C6.3916 8.00827 8.00827 6.3916 9.99994 6.3916C11.9916 6.3916 13.6083 8.00827 13.6083 9.99994C13.6083 11.9916 11.9916 13.6083 9.99994 13.6083ZM9.99994 7.6416C8.69994 7.6416 7.6416 8.69994 7.6416 9.99994C7.6416 11.2999 8.69994 12.3583 9.99994 12.3583C11.2999 12.3583 12.3583 11.2999 12.3583 9.99994C12.3583 8.69994 11.2999 7.6416 9.99994 7.6416Z"
                      fill="#38CB89"
                    />
                    <path
                      d="M9.9999 17.5167C6.86657 17.5167 3.90824 15.6834 1.8749 12.5001C0.991569 11.1251 0.991569 8.8834 1.8749 7.50006C3.91657 4.31673 6.8749 2.4834 9.9999 2.4834C13.1249 2.4834 16.0832 4.31673 18.1166 7.50006C18.9999 8.87506 18.9999 11.1167 18.1166 12.5001C16.0832 15.6834 13.1249 17.5167 9.9999 17.5167ZM9.9999 3.7334C7.30824 3.7334 4.73324 5.35006 2.93324 8.17507C2.30824 9.15006 2.30824 10.8501 2.93324 11.8251C4.73324 14.6501 7.30824 16.2667 9.9999 16.2667C12.6916 16.2667 15.2666 14.6501 17.0666 11.8251C17.6916 10.8501 17.6916 9.15006 17.0666 8.17507C15.2666 5.35006 12.6916 3.7334 9.9999 3.7334Z"
                      fill="#38CB89"
                    />
                  </svg>
                  View
                </div>

                </div>
            </div>
          </div>
        </div>

  </div>
</template>

<script>
import general_mixin from '@/mixins/general_mixin'
import mortgage_mixin from '@/mixins/mortgage_mixin'
import MortgageStatusBadge from '@/components/dashboard/MortgageStatusBadge.vue'
import MortgageDetailForUser from '@/components/dashboard/MortgageDetailForUser.vue'

  export default {
  components: { MortgageStatusBadge, MortgageDetailForUser },
     mixins:[general_mixin,mortgage_mixin],
      layout:"dashboard",
    head(){
      return{
        title:'Application'
      }
    },
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
        let r = this.$store.state.dashboard.user_mortgages;
        console.log('mylist', r)
        return r;
      },

      },
    methods:{
      determineStatus(a){
        let u = this.$store.state.profile.profile;
        if(u.has_profile==1 && a.is_completed==1){
          return true;
        }
        return false;
      },
        goDetail(item){
          this.appLoading(true);
           this.$store.dispatch("dashboard/getMortgageDetailsAction", item.slug).then((res)=>{
              // this.appLoading(false);
              this.$nuxt.$emit("user_mortgage_detail",true);
              // this.$router.push({name:'dashboard-application-slug',params:{slug:item.slug}})
                console.log("mortgage Details")
           }).catch(err=>{
              // this.appLoading(false);
              console.log(err.response)
           });

      },
      completeMortgage(){
        this.$nuxt.$emit("apply_mortgage",true);
      },
      fetchMortgageList() {
      this.$store.dispatch("dashboard/getMortgageListAction");
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

</style>
