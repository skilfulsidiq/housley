<template>
    <div>
      <modal title="Affordability Result" name="affordability_modal" width="500">
           <template v-slot:content>
                <v-simple-table>
                  <template v-slot:default>

                    <tbody>
                      <tr>
                        <td>Status</td>
                        <td>
                          <slot name="status"></slot>
                        </td>
                      </tr>
                      <tr
                        v-for="(item,i) in result"
                        :key="i"
                      >
                        <td>{{ item.title }}</td>
                        <td class="value" >
                            <span v-if="item.showNaira"> {{item.value|easy_currency}}</span>
                            <span v-if="!item.showNaira">{{item.value}} Years</span>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
            </template>
       </modal>
    </div>
</template>
<script>
import general_mixin from '@/mixins/general_mixin'
export default {
    name:"AllApplications",
    mixins:[general_mixin],
    props:{
        info:{type:Object},

    },
    data(){
        return{
            search:'',
            status:'',
            from:'',



        }
    },
    computed:{
      result(){
        return [
              {title:'Maximum Loanable Amount',showNaira:true,value:this.info.user.loanable_amount},
              {title:'Property Value',showNaira:true,value:this.info.property_value},
              {title:'Equity Deposit',showNaira:true,value:this.info.down_payment},
              {title:'Loan Amount',showNaira:true,value:this.info.loan_amount},
              {title:'Monthly Repayment',showNaira:true,value:this.info.monthly_repayment},
              {title:'Tenure',showNaira:false,value:this.info.loan_tenure},
              {title:'Monthly Income',showNaira:true,value:this.info.user.monthly_net_pay},
              {title:'Qualifying Salary',showNaira:true,value:this.info.user.monthly_gross_pay},
              {title:'Age',showNaira:false,value:this.info.user.age},
            ]
      }
    }


}
</script>
<style lang="scss" scoped>
    .value{
      font-weight: 800;
    }
    .dotted{
        border:1px dashed $dashboard_color;
    }
</style>
