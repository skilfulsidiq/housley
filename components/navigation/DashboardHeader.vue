<template>
  <div>
     <v-navigation-drawer   v-model="drawer"  app left class="no-print">

            <!-- add logo with margin-bottom of 5 -->
          <!-- <div class="logo my-5">  <v-img src="/logo/logo.png"></v-img></div> -->
          <!-- <div class="logo my-5">  <v-img :src="appclient.client_logo"></v-img></div> -->
          <v-divider></v-divider>
           <!-- <side-nav-profile /> -->
             <v-list dense class="mt-5">
                    <nav-list   v-for="(item,i) in app_menu" :key="i"
                        :data=" { icon: item.icon, text: item.text,link:item.link,children:item.children, prepend_icon:item.prepend_icon,heading:item.heading }"

                        :hasChildren=item.hasChildren :show_heading="item.show_heading" />
              </v-list>
               <div class="pa-2 text-center owner_div mb-8">
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title class=" first" color="secondary" style="font-size:10px">Support. Report . Terms of Use</v-list-item-title>
                                    <v-list-item-subtitle class="second"  color="accent">
                                        <span>&copy; Afreal Limited | All Right reserve</span>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </div>
        </v-navigation-drawer>
    <v-app-bar app color="white" class="no-print" elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer" v-if="$vuetify.breakpoint.smAndDown"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <side-nav-profile :menu= "user_menu"/>
    </v-app-bar>
  </div>
</template>

<script>
import NavList from './NavList.vue'
import SideNavProfile from './SideNavProfile.vue'
import general_mixin from '@/mixins/general_mixin';
  export default {
  components: { NavList, SideNavProfile },
  mixins:[general_mixin],
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

  }
</script>

<style lang="scss" scoped>
  .logo{
    width:120px;
    height: 40px;
    margin-left: 1rem;
    margin-top: 1rem;
  }
   .owner_div{
        position: absolute;
        width: 224px;
        height: 33px;
        /*left: 31px;*/
        margin:5px auto;
        bottom: 0;
        /*top: 764px;*/
    }
    .owner_div .first{
        color: #379392;
        font-size: 10px;
        line-height: 13px;
    }
    .owner_div .second{
        font-size: 10px;
        line-height: 13px;
        color:rgba(0, 0, 0, 0.47);
    }
</style>
