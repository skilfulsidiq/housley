<template>
  <div>
    <div class=" gri">
        <div class="grid-child">
          <h6 class="select-heading">Select Home Loan Advisor</h6>
            <div class="select select-modal2">
              <select id="location" :class="{ 'is-invalid': submitted && $v.form.broker_id.$error }"
                                v-model="form.broker_id">
                <option v-for="(l,i) in brokers" :key="i" :value="l.id">{{l.client_name}}</option>
              </select>
              <span class="focus"></span>
            </div>
              <div v-if="submitted && !$v.form.broker_id.required" class="form-error">select a Loan Advisor</div>
        </div>

      </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import form_mixin from '@/mixins/form_mixin.js'
  export default {
    mixins:[form_mixin],
       data(){
      return{
        submitted:false,
        form:{
          broker_id:''
        }
      }
    },
     validations: {
        form: {
            broker_id: { required},
        }
     },
    computed:{
      brokers(){
        return this.$store.state.general.brokers;
      }
    },
    methods:{
      selectBroker(){
          this.submitted=true
            this.$v.$touch();
            if (this.$v.$invalid) {
                // this.showValidationToast();
              //  this.scrollErrorSection();
                return;
            }
             this.$store.commit("calculator/SAVE_SELECTED_BROKER",this.form.broker_id)
         this.$store.dispatch("calculator/formStepAction",4);
      }
    },
    created(){
      this.$nuxt.$on("submitBroker",()=>{
          this.selectBroker();
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
