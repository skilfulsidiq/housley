<template>
     <v-app id="inspire">
     <dashboard-header/>

    <v-main>
      <client-only>

            <nuxt/>
      </client-only>

    </v-main>
  </v-app>
</template>

<script>

import DashboardMenu from "../components/DashboardMenu.vue"
import NavList from '@/components/navigation/NavList.vue'
import SideNavProfile from '../components/navigation/SideNavProfile.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import DashboardHeader from '../components/navigation/DashboardHeader.vue'
    export default {
      middleware:['verify'],
      components:{DashboardMenu, NavList, SideNavProfile, Breadcrumb, DashboardHeader},
        data(){
            return{
                drawer:null,
                app_menu: [
                   {icon:'mdi-view-dashboard', text:'Dashboard',link:'/dashboard'},
                   {icon:'mdi-lan-connect', text:'My Applications',link:'/dashboard/application'},
                  //  {icon:'mdi-home-flood', text:'Mortgage',link:'/mortgage'},
                   {icon:'mdi-file-document-outline', text:'My Docunments',link:'/dashboard/upload'},
                  //  {icon:'mdi-ticket-confirmation-outline', text:'Property Request',link:'/propertyrequest'},
                  //  {icon:'mdi-ticket-confirmation-outline', text:'Property Request Form',link:'/propertyrequestform'},
                  //  {icon:'mdi-ticket-confirmation-outline', text:'Register',link:'/register'},
                  //  {icon:'mdi-ticket-confirmation-outline', text:'Account Verification',link:'/accountverification'},
                  //  {icon:'mdi-ticket-confirmation-outline', text:'Affordability Test',link:'/affordabilitytest'},
                  //  {icon:'mdi-ticket-confirmation-outline', text:'Step Form',link:'/stepform'},

                    // {//employee
                    //     icon:'mdi-account-tie-outline',
                    //     icon_alt: 'mdi-chevron-up',
                    //     text:'Employees',
                    //     model: false,
                    //     prepend_icon:'mdi-chevron-down',
                    //     hasChildren:true,
                    //     children: [
                    //         { text:'All Employees',link:'all_employee'},
                    //             { text:'Holidays',link:'employee_holiday'},
                    //             { text:'Leaves(Admin)',link:'employee_leave_admin'},
                    //             { text:'Leaves(Employee)',link:'employee_leave_employee'},
                    //             { text:'Leaves Settings',link:'leave_setting'},
                    //             { text:'Attendance (Admin)',link:'attendance_admin'},
                    //             { text:'Attendance (Employee)',link:'attendance_employee'},
                    //             { text:'Departments',link:'department'},
                    //             { text:'Designation',link:'designation'},
                    //             { text:'Timesheet',link:'time_sheet'},
                    //             { text:'Shift & Schedule',link:'shift_schedule'},
                    //             { text:'Overtime',link:'over_time'},



                    //     ],
                    // },

               ],
               user_menu:[
                 {icon:"mdi-account-outline",title:'Profile',link:''},
                 {icon:"mdi-logout",title:'Logout',link:'logout'},
               ]
            }
        },
      methods:{
            fetchDashboardData(){
              this.$store.dispatch("dashboard/getDocumentCountAction")
              this.$store.dispatch("dashboard/getDocumentListAction")
              this.$store.dispatch("mortgage/getCurrentMortgageStatusAction")
              this.$store.dispatch("dashboard/getUserPropertyRequestAction")
            }
        },
        created(){
          this.fetchDashboardData();
        }
    }
</script>

<style lang="scss" scoped>
  .v-main {
    background: #f2f2f2;
  }


</style>
