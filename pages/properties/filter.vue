<template>
  <div>
    <main class="page-content mt-2">
      <section>
        <div class="padded-content mt-183">

          <finance-summary-card/>

          <div class="ppt-heading">
            <h3 class="title bold big-font">Filtered result for you</h3>
            <p class="sub-titl color1">
              Based on your affordability result, we have filtered down <br>properties that are suitable and affordable to you
            </p>
          </div>

             <property-list :properties="properties"/>
               <property-page-pagination :pagination="pagination"  mutator="AFFORDABLE_PROPERTIES" method="get" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import PropertyList from '@/components/property/PropertyList.vue'
import form from "@/mixins/form_mixin"
import general_mixin from "@/mixins/general_mixin"
import FinanceSummaryCard from '@/components/affordability/FinanceSummaryCard.vue'
  export default {
  components: { PropertyList,FinanceSummaryCard },
  mixins:[form,general_mixin],
    auth:false,
      head(){
            return{
                link:[
                      { rel: 'stylesheet', href:"/css/custom/header-color.css"  },
                ]
            }
        },
        computed:{
            properties(){
                let all = this.$store.state.property.properties;
                console.log(all)
                let property= all.data;
                this.fillPagination(all);
                this.property_length = all.total;

                return property;
              }
        }
  }
</script>

<style lang="scss" scoped>
.page-content {
    position: relative;
    margin-top: -12rem;
}
</style>
