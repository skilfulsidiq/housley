<template>
  <div style="background: #f9fbfd;min-height:100vh;">
    <client-only>
    <app-header />
      <mobile-nav/>
    <side-nav/>
    <div class="start-body">
      <div class="start-here">
       <nuxt/>
      </div>
    </div>
     <mortgage-application-modal/>
     <check-list-modal/>
    </client-only>

  </div>
</template>

<script>
import AppHeader from '@/components/dashboard/AppHeader.vue'
import SideNav from '@/components/dashboard/SideNav.vue'
import MobileNav from '@/components/dashboard/MobileNav.vue'
import MortgageApplicationModal from '@/components/dashboard/MortgageApplicationModal.vue'
import CheckListModal from '@/components/dashboard/CheckListModal.vue'
// import mortgage_mixin from '@/mixins/mortgage_mixin'
  export default {
  components: { AppHeader,SideNav,MobileNav,MortgageApplicationModal,CheckListModal },
   middleware:['have_mortgage'],
  //  mixins:[mortgage_mixin],
   head(){
      return{
        link:[
          {rel:'stylesheet',href:'/styles/profiler.css'},
          {rel:'stylesheet',href:'/styles/sidebar.css'},
          {rel:'stylesheet',href:'/styles/header.css'},
          {rel:'stylesheet',href:'/styles/dashboard.css'},
          {rel:'stylesheet',href:'/styles/main.css'},
          {rel:'stylesheet',href:'/styles/app.css'},
          {rel:'stylesheet',href:'/styles/form_slider.css'},
        ],
        script:[
          // {src:"/js/dashboard/popper.min.js"},/*  */
          // {src:"/js/dashboard/bootstrap.min.js"},/*  */
          // {src:"/js/dashboard/mobileSidebar.js"},/*  */

        ]
      }
    },
      methods:{
        fetchDashboardData(){
          this.$store.dispatch("dashboard/getDocumentCountAction")
          this.$store.dispatch("dashboard/getDocumentListAction")
          this.$store.dispatch("mortgage/getCurrentMortgageStatusAction")
          this.$store.dispatch("dashboard/getUserPropertyRequestAction")

          this.$store.dispatch("general/getAllStatesAction");
          this.$store.dispatch("general/getAllFinanceOptionAction");
          this.$store.dispatch("general/getPropertyTypeAction");
          this.$store.dispatch("general/getMortgageChecklistAction");


        },


    },
    created(){
      this.fetchDashboardData();

      // this.prefillForm();
    }

  }
</script>

<style lang="scss" scoped>

</style>
