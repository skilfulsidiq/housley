<template>
  <div>
    <main class="page-content mt-2">
      <section>
        <div class="padded-content mt-183">
          <div v-if="!loading">
                <finance-summary-card :result="finance"/>
                  <div class="" v-if="properties && properties.length>0">
                      <div class="ppt-heading">
                          <h3 class="title bold big-font">Filtered result for you</h3>
                          <p class="sub-titl color1">
                            Based on your affordability result, we have filtered down <br>properties that are suitable and affordable to you
                          </p>
                        </div>

                      <property-list :properties="properties" :isChoose="true"/>
                        <property-page-pagination :pagination="pagination"  mutator="AFFORDABLE_PROPERTIES" method="post" source="filter" />
                  </div>


                <div v-if="!properties || properties.length<=0">
                  <no-property title="Can't find property within your Loanable Amount" :showRequestBtn="true" btnText="View All Properties" rightBtnText="Request for Property"
                  :action="showAllProperty" :rightAction="showRequestModal"
                  />
                </div>
          </div>
          <property-loading v-if="loading"/>

        </div>
      </section>
      <request-mailing-card/>
    </main>
  </div>
</template>

<script>
import PropertyList from '@/components/property/PropertyList.vue'
import form from "@/mixins/form_mixin"
import general_mixin from "@/mixins/general_mixin"
import FinanceSummaryCard from '@/components/affordability/FinanceSummaryCard.vue'
import RequestMailingCard from '@/components/RequestMailingCard.vue'
import NoProperty from '@/components/property/NoProperty.vue'
import PropertyLoading from '../../components/property/PropertyLoading.vue'
  export default {
  components: { PropertyList,FinanceSummaryCard,RequestMailingCard,NoProperty,PropertyLoading },
  mixins:[form,general_mixin],
    auth:false,
      head(){
            return{
                link:[
                      { rel: 'stylesheet', href:"/css/custom/header-color.css"  },
                ]
            }
        },
        data(){
          return{
            fetching:false,
            property_length:0
          }
        },
        computed:{
              finance(){
              let result = this.$store.state.calculator.form;
              return result;
            },
            properties(){
                let all = this.$store.state.property.affordable_properties;
                let property= all.data;
                this.fillPagination(all);
                this.property_length = all.total;
                // console.log("property_lenth",this.property_length);
                // if(property && property.length>0){
                //   return property;
                // }

                return property;
              }
        },
        methods:{
                showRequestModal(){
                  this.$nuxt.$emit("show_request_modal",true);
                },
               showAllProperty(){
                    //
                    this.$router.push("/properties")
                  },
            fetchProperties(){
                let p = this.$store.state.calculator.form;
                let data = {price:p.max_loan_amount,location:p.location};
                console.log("afod form: ",data);
                this.appLoading(true);

                this.$store.dispatch("property/affordablePropertiesAction",data).then((res)=>{
                this.appLoading(false);

                });
              },
        },
        created(){
          this.fetchProperties()
           this.$store.commit("property/CLEAR_SELECTED_PROPERTY",'');
            this.$store.commit("calculator/PROPERTY_IS_SELECTED",true);
        }
  }
</script>

<style lang="scss" scoped>
.page-content {
    position: relative;
    margin-top: -12rem;
}

</style>
