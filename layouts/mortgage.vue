<template>
 <v-app id="inspire">
     <dashboard-header/>
     <v-main>
        <breadcrumb page="Mortgage Application Form">
            <template v-slot:right>

            </template>
        </breadcrumb>
       <client-only>
        <div>
    <v-container>
       <div class="form-parent">
         <div class="form-info mb-3" v-if="$route.path !=='/dashboard/mortgage.preview'">
            <mortgage-form-title left="Mortgage" :right="determineRight">
              <template v-slot:action>
                    <v-progress-linear class="progress-bar"
                    v-model="stepPercent"
                    color="accent"
                    height="8"
                  >
                  <!-- <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                  </template> -->
              </v-progress-linear>

              </template>
              </mortgage-form-title>
         </div>
          <div class="mt-8">
               <nuxt/>
          </div>

    </div>

    </v-container>


     <bottom-navigation :width="$vuetify.breakpoint.smAndDown?'8rem':'12rem'" :showBlock="false" :showPrevious="mortgagestep>1?true:false" :previousAction="previousAction" :nextAction="nextAction"
            :continueText="mortgagestep<mortgageTotalStep?'Continue':'Submit'" />
  </div>
       </client-only>
     </v-main>
 </v-app>
</template>

<script>
import BottomNavigation from '@/components/navigation/BottomNavigation.vue'
  import general_mixin from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
import mortgage_mixin from '@/mixins/mortgage_mixin'
import DashboardHeader from '@/components/navigation/DashboardHeader.vue'
import MortgageFormTitle from '@/components/dashboard/mortgage/MortgageFormTitle.vue'
  export default {
    layout:'dashboard',
    mixins:[general_mixin,form_mixin,mortgage_mixin],
    components: { BottomNavigation,DashboardHeader,  MortgageFormTitle  },
    data(){
      return{

        percent:20,
        form_type: ['Personal','Other Personal','Employment','Financial','Property'],
        form_pages:['/dashboard/mortgage','/dashboard/mortgage/info','/dashboard/mortgage/employment','/dashboard/mortgage/loan','/dashboard/mortgage/preview']
      }
    },
    computed:{
      determineRight(){
        let t = this.form_type[this.mortgagestep-1];
        console.log('title:',t)
        return t;
      },
      stepPercent(){
        switch(this.mortgagestep){
          case 1:
            this.percent = 20;
             return this.percent;
          case 2:
            this.percent = 40;
               return this.percent;
          case 3:
            this.percent = 60;
               return this.percent;
          case 4:
            this.percent = 80;
              return this.percent;
          case 5: this.percent = 100;
            return this.percent;

        }
      }
    },
    methods:{

      previousAction(){
          this.goMortgageBackStep();
        },
        nextAction(){

               let param = {status:true,next:this.form_pages[1]}
            switch(this.mortgagestep){
              case 1:
                param =  {status:true,next:this.form_pages[1]}
                console.log("am click")
                this.$nuxt.$emit('submit_first_mortgage_form',param);
                break;
              case 2:
                 param = {status:true,next:this.form_pages[2]}
                this.$nuxt.$emit('submit_second_mortgage_form',param);
                break;
              case 3:
                  param = {status:true,next:this.form_pages[3]}
                this.$nuxt.$emit('submit_third_mortgage_form',param);
                break;
              case 4:
                  param = {status:true,next:this.form_pages[4]}
                this.$nuxt.$emit('submit_fourth_mortgage_form',param);
                break;
              case 5:
                  param = {status:true,next:this.form_pages[5]}
                this.$nuxt.$emit('submit_preview_mortgage_form',param);
                break;
            }


        },
        getData(){
           this.$store.dispatch("general/getAllStatesAction");
          this.$store.dispatch("dashboard/getUserPropertyRequestAction")
          // this.$store.dispatch("general/getAllFinanceOptionAction");
          // this.$store.dispatch("general/getAllPropertyTypeAction");
           this.$store.dispatch("profile/prefillPersonalFormAction",this.user);
        }
    },
    created(){
      this.getData();
      // this.prefillMortgageForm();
    }
  }
</script>

<style lang="scss" scoped>
 .v-main {
    background: #f2f2f2;
  }
  .form-parent{
    padding:2rem;
    background-color: #fff;
    min-height: 10rem;
    border-radius: 10px;
    margin-bottom: 10rem;
  }
  .form-info{

  }
  .progress-bar{
    width:70%;
  }
</style>
