<template>
  <div>
    <div class=" gri">
        <div class="grid-child">
          <h6 class="select-heading">Select Lending Institution <required-input/></h6>
            <div class="select select-modal2">
              <select id="location" :class="{ 'is-invalid': submitted && $v.form.lender_id.$error }"
                                v-model="form.lender_id">
                <option v-for="(l,i) in lenders" :key="i" :value="l.id">{{l.client_name}}</option>
              </select>
              <span class="focus"></span>
            </div>
              <div v-if="submitted && !$v.form.lender_id.required" class="form-error">select a mortgage bank</div>
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
          lender_id:''
        }
      }
    },
     validations: {
        form: {
            lender_id: { required},
        }
     },
    computed:{
      lenders(){
        return this.$store.state.general.lenders;
      }
    },
    methods:{
      selectLender(){
          this.submitted=true
            this.$v.$touch();
            if (this.$v.$invalid) {
                // this.showValidationToast();
              //  this.scrollErrorSection();
                return;
            }
          this.$store.commit("calculator/SAVE_SELECTED_LENDER",this.form.lender_id)
          this.$store.dispatch("calculator/formStepAction",3);
      }
    },
    created(){
      this.$nuxt.$on("submitLender",()=>{
          this.selectLender();
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
