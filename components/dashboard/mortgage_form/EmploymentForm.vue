<template>
  <div>
     <div class="row">
            <div class="col-md-6 col-xs-12">
              <label class="form_one_label custom-field one">
                <input v-model="form.employer_name"
                class="form_one_input"
                type="text"
                placeholder=" "
                />
                <span class="placeholder2">Employer Name</span>
              </label>
              <div v-if="submitted && !$v.form.employer_name.required" class="error">
                  <small class="error-message">Employer Name  is required</small>
                </div>
            </div>
             <div class="col-md-6 col-xs-12">
                <label class="form_one_label custom-field one">
                      <input class="form_one_input"  type="text" placeholder=" " v-model="gross_income"/>
                    <span class="placeholder2">Monthly Gross Income</span>
                    <div v-if="submitted && !$v.form.monthly_gross_pay.required" class="error">
                      <small class="error-message">Monthly Gross Income is required</small>
                    </div>
                  </label>
              </div>
           <div class="col-md-6 col-xs-12">

            <label class="form_one_label custom-field one">
              <input  v-model="form.profession"
              class="form_one_input "
              type="text"
              placeholder=" "
              />
              <span class="placeholder2">Profession</span>
            </label>
            <div v-if="submitted && !$v.form.profession.required" class="error">
                  <small class="error-message">Profession is required</small>
                </div>
          </div>

          <div class="col-md-6 col-xs-12">
            <label class="form_one_label custom-field one">
              <input v-model="form.employment_present_position"
              class="form_one_input"
              type="text"
              placeholder=" "
              />
              <span class="placeholder2">Employment Position</span>
            </label>
            <div v-if="submitted && !$v.form.employment_present_position.required" class="error">
                <small class="error-message">Employment position is required</small>
              </div>
          </div>
            <div class="col-md-6 col-xs-12">
            <label class="form_one_label custom-field one">
              <input v-model="form.work_experience"
              class="form_one_input"
              type="number"
              placeholder=" "
              />
              <span class="placeholder2">Years of Experience</span>
                <div v-if="submitted && !$v.form.work_experience.required" class="error">
                <small class="error-message">Work experience is required</small>
              </div>
            </label>

          </div>
          <div class="col-md-6 col-xs-12 mt-4">
             <div class="selectbox">
                  <select v-model="form.employment_state" class="form-select pop_text" aria-label="Default select example" required >
                    <option value=""></option>
                    <option v-bind:value="p.id" v-for="p in allStates" :key="p.id">{{p.name}}</option>
                    </select>
                  <label class="selectlabel" for="pick">Employment State</label>
              </div>
              <div v-if="submitted && !$v.form.employment_state.required" class="error">
                  <small class="error-message">Employment State is required</small>
                </div>
          </div>

          <div class="col-md-6 col-xs-12">

            <label class="form_one_label custom-field one">
              <input  v-model="form.employer_address"
              class="form_one_input address"
              type="text"
              placeholder=" "
              />
              <span class="placeholder2">Employer's Address</span>
              <div v-if="submitted && !$v.form.employer_address.required" class="error">
                  <small class="error-message">Employment address is required</small>
                </div>
            </label>
          </div>
           <div class="col-md-6 col-xs-12">
            <label class="form_one_label custom-field one">
              <input v-model="form.year_to_retirement"
              class="form_one_input"
              type="number"
              placeholder=" "
              />
              <span class="placeholder2">Years to Retirement</span>
              <!-- <div v-if="submitted && !$v.form.year_to_retirement.required" class="error">
                <small class="error-message">Gender is required</small>
              </div> -->
            </label>
          </div>
          <div class="col-md-6 col-xs-12 mt-4">
             <div class="selectbox">
                  <select v-model="form.employment_is_confirmed" class="form-select pop_text" aria-label="Default select example">
                    <option v-bind:value="p.value" v-for="p in yesNoOption" :key="p.text">{{p.text}}</option>
                    </select>
                  <label class="selectlabel" for="pick">Has your employment been confirmed?</label>
              </div>
              <div v-if="submitted && !$v.form.employment_is_confirmed.required" class="error">
                  <small class="error-message">Employment Confirmation is required</small>
                </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <label class="form_one_label custom-field one">
              <input v-model="form.nhf_registration_number"
              class="form_one_input"
              type="text"
              placeholder=" "
              />
              <span class="placeholder2">NHF Number</span>
            </label>
          </div>
      </div>
  </div>
</template>

<script>
 import general_mixin from '@/mixins/general_mixin'
 import {optional} from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
import mortgage_mixin from '@/mixins/mortgage_mixin'
import store_mixin from '@/mixins/store_mixin'
import { required, email,minLength,requiredIf,numeric} from "vuelidate/lib/validators";
  export default {
    layout:'mortgage',
     mixins:[general_mixin,form_mixin,mortgage_mixin,store_mixin],
    data(){
        return{
          next_form_step:'',
          submitted:false,
            form:{
                employer_name:'',
                monthly_gross_pay:'',
                profession:"",
                // employment_id:"",
                employment_present_position:"",
                employer_address:"",
                employment_state:"",
                work_experience:"",
                year_to_retirement:"",
                nhf_registration_number:"",
                employment_is_confirmed:""

                },
        }
      },
      validations: {
        form: {
          employer_name:{required},
          monthly_gross_pay:{required},
          profession:{required},
          employment_present_position:{required},
           employer_address:{required},
          employment_state:{required},
          work_experience:{required},
          year_to_retirement:{optional},
          nhf_registration_number:{optional},
          employment_is_confirmed:{required}

        }
      },
      computed:{
          gross_income: {
              get() {
                return this.formatCurrency(this.form.monthly_gross_pay);
              },
              set(v) {
                this.form.monthly_gross_pay = this.clearCommas(v);
              }
           },
      },
      methods:{

        submitThirdProfileForm(){
              this.submitted=true;
          this.$v.$touch();
        if(this.$v.$invalid){
            return;
        }
          this.mortgageLoading(true);
           this.$store.dispatch("profile/savePersonalInfoFormAction",this.form);
           let main_form = this.$store.state.profile.profile
          this.$store.dispatch("profile/savePersonalAndEmploymentDataAction",main_form).then((res)=>{
             this.mortgageLoading(false);
             console.log("profile submitted")
            //  if(this.user.have_apply_for_mortgage){
              //  this.$apptoast.success("Profile Info Updated")
               this.nuxt.$emit('apply_mortgage',false);
               this.nuxt.$emit('show_checklist_modal',true);
                // this.$router.push("/dashboard");
            //  }else{
            //     this.moveToMortgageNextStep(4);
            //  }

               this.$nuxt.$emit('submit_third_mortgage_form',false);
              //  this.$refs.profileform.resetValidation();
              // this.goNextFormStep('profiling');
              // this.$router.push(this.next_form_step)
          }).catch(err=>{
             this.mortgageLoading(false);
          })



        },
          prefillForm(){
        let r = this.$store.state.profile.profile;
        // this.mapIncomingDataToForm(this.form, r);
      //    this.form.profession  = r.profession;
      //  this.form.monthly_gross_pay  = r.monthly_gross_pay;
      // // this.form.employment_id = r.employment_id,
      // this.form.employment_present_position=r.employment_present_position,
      // this.form.employer_address=r.employer_address,
      // this.form.employment_state=r.employment_state,
      // this.form.work_experience=r.work_experience,
      // this.form.year_to_retirement=r.year_to_retirement,
      // this.form.nhf_registration_number=r.nhf_registration_number,
      // this.form.employment_status=r.employment_status,
      // this.form.employer_name=r.employer_name
      this.mapIncomingDataToForm(this.form, r);

      },
    },
    created(){

          this.$store.commit("mortgage/GO_TO_STEP", 3);
    },
    mounted(){
        this.prefillForm();
      this.$nuxt.$on('submit_third_mortgage_form',(param)=>{
        if(param){
            // if(this.$refs.employment){
                this.submitThirdProfileForm();
            // }
            // this.next_form_step = param.next;

        }


      })

    },
    unmounted() {
      this.$refs.employment.reset();
    },
  }
</script>

<style lang="scss" scoped>

</style>
