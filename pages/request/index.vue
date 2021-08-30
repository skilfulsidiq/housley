<template>
  <div class="givme_mb">
      <!-- <div class="d-flex justify-space-between flex-wrap">

      </div> -->
      <v-row>
        <v-col cols="12" md="4" v-for="p in properties" :key="p.id">
          <property-card :property="p"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8" offset-md="2">
           <paginator  :pagination="pagination" title="Affordability" mutator="AFFORDABLE_PROPERTIES" method="get" />
        </v-col>
      </v-row>

      <request-modal-form/>
      <request-confirmation-modal/>
      <property-detail-modal/>
  </div>
</template>

<script>
import general_mixin from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
import RequestModalForm from '@/components/profiling/request/RequestModalForm.vue'
import RequestConfirmationModal from '@/components/profiling/request/RequestConfirmationModal.vue'
import PropertyListCard from '@/components/property/PropertyListCard.vue'
import PropertyCard from '@/components/property/PropertyCard.vue'
import PropertyDetailModal from '@/components/property/PropertyDetailModal.vue'
  export default {
  components: { RequestModalForm, RequestConfirmationModal, PropertyListCard, PropertyCard, PropertyDetailModal },
    mixins:[general_mixin,form_mixin],
        layout:'dashboard',
    computed:{
      properties(){
        let all = this.$store.state.property.affordable_properties;

        let p = all.data;
          // console.log(p);
         this.fillPagination(all);
        return p;
      },
      amount(){
        let t = this.$store.state.auth.user;
        console.log(t.loanable_amount);
        return t.loanable_amount;
      }
    },

      methods:{
        getAffordableProperties(){
          console.log(this.amount);
          let pro = this.$store.dispatch("property/getAffordablePropertiesAction",this.amount);
        },
        // prefillForm(){
        //   let r = this.$store.state.auth.user;
        //   this.mapIncomingDataToForm(this.personal_form, r);

        // },
      },
      created(){
         this.$store.commit("profile/GO_TO_STEP", 4);
        this.getAffordableProperties();
      }




  }
</script>

<style lang="scss" >
   .control-btn{
    margin-top:-50%;
    z-index:100;
    left:10px;
    right: 10px;
    height: 60px;
    width: 60px;
    background-color: green;
    color:#fff;
    }
    .prev {
        float: left;
    }
    .next{
        float:right;
    }
    .pad-card{
      padding:20px;
    }
    .modal-title{
      padding:10px;
    }
    // .title-div{
    //   width:30rem;
    // }
    .v-application .headline {
    font-size: 1rem !important;
    text-align: center !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: normal !important;
  }
  .modal-p {
    font-weight: 325;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #666;
}
</style>
