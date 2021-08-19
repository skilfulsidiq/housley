<template>
<div>
  <v-container>
     <v-row>
        <v-col class="col-12" md="12">
            <p class="text-left good-morning">Welcome <span class="font-weight-bold">{{user.firstname}} {{user.lastname}}</span></p>
        </v-col>
        </v-row>
    <div class="content">
        <v-row justify="center">
            <v-col class="col-12" md="12">
              {{mortgage_status_data}}
                <application-status :mortgage_status="mortgage_status"/>
            </v-col>
            <v-col class="col-12" md="7">
                 <document-upload/>
                 <property-request-card class="mt-3"/>
            </v-col>
            <v-col class="col-12" md="5">
                <affordability-card/>
            </v-col>
            <v-col class="col-12" md="12">
                 <mortgage-card/>
            </v-col>
        </v-row>
    </div>
</v-container>
</div>

</template>

<script>
import CountCard from '@/components/dashboard/CountCard.vue'
import CounterCard from '@/components/dashboard/CounterCard.vue'
import general_mixin from '@/mixins/general_mixin'
import Donut from '@/components/dashboard/Donut.vue'
import ApplicationStatus from '@/components/dashboard/ApplicationStatus.vue'
import AffordabilityCard from '@/components/dashboard/AffordabilityCard.vue'
import MortgageCard from '@/components/dashboard/MortgageCard.vue'
import DocumentUpload from '@/components/dashboard/DocumentUpload.vue'
import PropertyRequestCard from '@/components/dashboard/PropertyRequestCard.vue'
import { mapState } from 'vuex'
export default {
  components: { CountCard,CounterCard,Donut,ApplicationStatus,
    AffordabilityCard,MortgageCard,DocumentUpload,PropertyRequestCard
     },
  mixins:[general_mixin],
  layout:'dashboard',
  data(){
    return{
      mortgage_status:{},
    }
  },
  computed:{

      mortgage_status_data(){
        let m =  this.$store.state.mortgage.mortgage_status;
        this.mortgage_status = m;
        }
      },

}
</script>

<style lang="scss" scoped>

.content{
    width: 100%;
    margin:0 auto;
    // background: #f2f2f2;
    padding:0 0rem;
}
</style>
