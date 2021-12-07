<template>
  <div>
       <form ref="personalform">
      <div class="row" style="padding-top: 30px">
        <div class="col-md-6 col-xs-12">

              <label class="form_one_label custom-field one custom-field one">
                <input class="form_one_input" type="text" placeholder=" " v-model="personal_form.firstname"/>
                <span class="placeholder2">Firstname <required-input/></span>
                <div v-if="submitted && !$v.personal_form.firstname.required" class="error">
                  <small class="error-message">first name is required</small>
                </div>
              </label>

        </div>
        <div class="col-md-6 col-xs-12">

              <label class="form_one_label custom-field one">
                 <input class="form_one_input" type="text" placeholder=" " v-model="personal_form.lastname"/>
                <span class="placeholder2">Lastname <required-input/></span>
                <div v-if="submitted && !$v.personal_form.lastname.required" class="error">
                  <small class="error-message">last name is required</small>
                </div>
              </label>

        </div>
        <div class="col-md-12 col-xs-12">

            <label class="form_one_label custom-field one">
              <input
              class="form_one_input address"
              type="text"
              placeholder=" "
              v-model="personal_form.address"
              />
              <span class="placeholder2">Address <required-input/></span>
               <div v-if="submitted && !$v.personal_form.address.required" class="error">
                  <small class="error-message">Address is required</small>
                </div>
            </label>

        </div>
        <div class="col-md-6 col-xs-12">

              <label class="form_one_label custom-field one">
                <input
                class="form_one_input"
                type="text"
                placeholder=" "
                v-model="personal_form.phone"
                />
                <span class="placeholder2">Phone Number <required-input/></span>
                 <div v-if="submitted && !$v.personal_form.phone.required" class="error">
                  <small class="error-message">Phone is required</small>
                </div>
                 <div v-if="submitted && !$v.personal_form.phone.minLength" class="error">
                  <small class="error-message">invalid phone number</small>
                </div>
                 <!-- <div v-if="submitted && !$v.personal_form.phone.numeric" class="error">
                  <small class="error-message">invalid phone number</small>
                </div> -->
              </label>

        </div>
        <div class="col-md-6 col-xs-12 ">

              <label class="form_one_label custom-field one">
                <input
                class="form_one_input"
                type="date"
                placeholder=" "
                v-model="dob"
                />
                <span class="placeholder2">Date of Birth <required-input/></span>
                <div v-if="submitted && !$v.personal_form.dob.required" class="error">
                  <small class="error-message">Date of Birth is required</small>
                </div>
              </label>

        </div>
        <div class="col-md-6 col-xs-12 mt-4">
                  <div class="selectbox">
                  <select v-model="personal_form.marital_status" class="form-select pop_text" aria-label="Default select example" required >
                    <!-- <option value=""></option> -->
                    <option value="Single"> Single</option>
                    <option value="Married"> Married</option>
                    <option value="Divorced"> Divorced</option>
                    <option value="Widow"> Window</option>
                    </select>
                  <label class="selectlabel" for="pick">Marital Status <required-input/></label>
              </div>
                 <!-- <cool-select
                v-model="personal_form.marital_status"
                :items="['Single','Married','Divorced','Widow']"
                placeholder="Marital Status"
              /> -->
               <div v-if="submitted && !$v.personal_form.marital_status.required" class="error">
                  <small class="error-message">Marital Status is required</small>
                </div>


        </div>

        <div class="col-md-6 col-xs-12 mt-4">
              <div class="selectbox">
                  <select v-model="personal_form.sex" class="form-select pop_text" aria-label="Default select example" required >
                    <!-- <option value=""></option> -->
                    <option value="Male"> Male</option>
                    <option value="Female"> Female</option>
                    </select>
                  <label class="selectlabel" for="pick">Gender <required-input/></label>
              </div>
                 <!-- <cool-select
                v-model="personal_form.sex"
                :items="['Male','Female']"
                placeholder="Gender"
              /> -->
               <div v-if="submitted && !$v.personal_form.sex.required" class="error">
                  <small class="error-message">Gender is required</small>
                </div>


        </div>
        <div class="col-md-6 col-xs-12 mt-4">
           <div class="selectbox">
                  <select v-model="personal_form.current_apartment_status" class="form-select pop_text" aria-label="Default select example" required >
                    <!-- <option value=""></option> -->
                    <option value="Rented"> Rented</option>
                    <option value="Owned"> Owned</option>
                    </select>
                  <label class="selectlabel" for="pick">Current Apartment Status <required-input/></label>
              </div>

                 <!-- <cool-select
                v-model="personal_form.current_apartment_status"
                :items="['Rented','Rented']"
                placeholder="Current Home Status"
              /> -->
               <div v-if="submitted && !$v.personal_form.current_apartment_status.required" class="error">
                  <small class="error-message">Current Apartment Status is required</small>
                </div>


        </div>
        <div class="col-md-6 col-xs-12" v-if="rent_value">

              <label class="form_one_label custom-field one">
                <input
                class="form_one_input"
                type="text"
                placeholder=" "
                v-model="annual_rent"
                />
                <span class="placeholder2">Annual Rent Value <required-input/></span>
                <div v-if="submitted && !$v.personal_form.annual_rent_value.required" class="error">
                  <small class="error-message">Annual Rent is required</small>
                </div>
              </label>

        </div>
        <div class="col-md-6 col-xs-12 mt-4">
             <div class="selectbox">
                  <select v-model="personal_form.state_of_origin" class="form-select pop_text" aria-label="Default select example" required >
                    <option value=""></option>
                    <option v-bind:value="p.id" v-for="p in allStates" :key="p.id">{{p.name}}</option>
                    </select>
                  <label class="selectlabel" for="pick">State of Origin <required-input/></label>
              </div>
               <!-- <div v-if="submitted && !$v.personal_form.state_of_origin.required" class="error">
                  <small class="error-message">State of origin is required</small>
              </div> -->
        </div>
        <div class="col-md-6 col-xs-12 mt-4">
             <div class="selectbox">
                  <select v-model="personal_form.highest_education" class="form-select pop_text" aria-label="Default select example" >
                    <option value="Phd">placeholder</option>
                    <option value="MSc">MSc</option>
                    <option value="PGD">PGD</option>
                    <option value="BSc">BSc / BEd</option>
                    <option value="HND">HND</option>
                    <option value="OND">OND</option>
                    <option value="NCE">NCE</option>
                    <option value="SSCE">NSSCE</option>
                    </select>
                  <label class="selectlabel" for="pick">Highest Educational Qualification <required-input/></label>
              </div>
               <div v-if="submitted && !$v.personal_form.highest_education.required" class="error">
                  <small class="error-message">Education level  is required</small>
              </div>
        </div>

        <div class="col-md-6 col-xs-12 ">

              <label class="form_one_label custom-field one">
                <input
                class="form_one_input"
                type="number"
                placeholder=" "
                v-model="personal_form.no_of_dependents"
                />
                <span class="placeholder2">Number of Dependents <required-input/></span>
                 <div v-if="submitted && !$v.personal_form.no_of_dependents.required" class="error">
                  <small class="error-message">Number of dependents is required</small>
                </div>
                 <div v-if="submitted && !$v.personal_form.no_of_dependents.numeric" class="error">
                  <small class="error-message">Input must be a number</small>
                </div>
              </label>

        </div>
        <div class="col-md-6 col-xs-12">

              <label class="form_one_label custom-field one">
                <input
                class="form_one_input"
                type="text"
                placeholder=" "
                v-model="personal_form.bvn"
                />
                <span class="placeholder2">BVN</span>
                <div v-if="submitted && !$v.personal_form.bvn.numeric" class="error">
                  <small class="error-message">Input must be a number</small>
                </div>
              </label>

        </div>
          <div class="col-md-6 col-xs-12 mt-4">
             <div class="selectbox">
                  <select v-model="personal_form.means_of_identification" class="form-select pop_text" aria-label="Default select example" >
                    <option value="NIN">National ID(NIN)</option>
                    <option value="International Passport">International Passport</option>
                    <option value="Voter Card ID">Voter Card ID</option>
                    <option value="Driver Licence">Driver Licence</option>
                    </select>
                  <label class="selectlabel" for="pick">Means of Identification <required-input/></label>
              </div>
               <div v-if="submitted && !$v.personal_form.means_of_identification.required" class="error">
                  <small class="error-message">Means of identification is required</small>
              </div>
        </div>
            <div class="col-md-6 col-xs-12">

              <label class="form_one_label custom-field one">
                <input
                class="form_one_input"
                type="text"
                placeholder=" "
                v-model="personal_form.id_number"
                />
                <span class="placeholder2">ID Number <required-input/></span>
                <div v-if="submitted && !$v.personal_form.id_number.required" class="error">
                  <small class="error-message">ID number is required</small>
                </div>
              </label>

        </div>
        <div class="col-md-6 col-xs-12 ">

              <label class="form_one_label custom-field one">
                <input
                class="form_one_input"
                type="date"
                placeholder=" "
                v-model="issue_date"
                />
                <span class="placeholder2">ID Issue Date <required-input/></span>
                <div v-if="submitted && !$v.personal_form.id_issue_date.required" class="error">
                  <small class="error-message">ID Issue date is required</small>
                </div>
                <div v-if="submitted && !$v.personal_form.id_issue_date.before" class="error">
                  <small class="error-message">Date can't be greater than today</small>
                </div>
              </label>

        </div>
        <div class="col-md-6 col-xs-12 ">
              <label class="form_one_label custom-field one">
                <input
                class="form_one_input"
                type="date"
                placeholder=" "
                v-model="expire_date"
                />
                <span class="placeholder2">ID Expire Date <required-input/></span>
                <div v-if="submitted && !$v.personal_form.id_expire_date.required" class="error">
                  <small class="error-message">ID expire date is required</small>
                </div>
                 <div v-if="submitted && !$v.personal_form.id_expire_date.after" class="error">
                  <small class="error-message">Date cannot be below today</small>
                </div>
              </label>

        </div>
      </div>




    </form>
  </div>
</template>

<script>
import general_mixin from '@/mixins/general_mixin'
import {optional} from '@/mixins/general_mixin'
  import {rules} from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
import mortgage_mixin from '@/mixins/mortgage_mixin'
import store_mixin from '@/mixins/store_mixin'
import { required, email,minLength,requiredIf,numeric} from "vuelidate/lib/validators";
import moment from 'moment';
  export default {
    // layout:'dashboard',
     mixins:[general_mixin,form_mixin,mortgage_mixin,store_mixin],
    data(){
        return{
          submitted:false,
          personal_form:{
              firstname: "",
              lastname: "",
              address: "",
              current_apartment_status: "",
              annual_rent_value:"",
              sex: "",
              dob: "",
              bvn: "",
              marital_status: "",
              state_of_origin: "",
              phone: "",
              // email: "",
              no_of_dependents: "",
              means_of_identification: '',
              id_number: '',
              id_issue_date: '',
              id_expire_date: '',
              highest_education: '',
          }
        }
      },
    validations: {
        personal_form: {
          //  email:{optional},
          firstname:{required},
          lastname:{required},
          address:{required},
          current_apartment_status:{required},
          annual_rent_value:{required:requiredIf((form) =>form.current_apartment_status=='Rented')},
          dob:{required},
          sex:{required},
          marital_status:{required},
          bvn:{optional,numeric},
          sex:{required},
          state_of_origin:{optional},
          phone:{required,minLength:rules.main_phone,numeric},
          no_of_dependents:{required,numeric},
          means_of_identification: {required},
          id_number: {required},
          id_issue_date: {required,before:rules.before_date},
          id_expire_date: {required,after:rules.after_date},
          highest_education: {required},

        }
    },
    computed:{
           rent_value() {
              if (this.personal_form.current_apartment_status == 'Rented') {
                return true
              }
              return false
            },
            annual_rent: {
              get() {
                return this.formatCurrency(this.personal_form.annual_rent_value);
              },
              set(v) {
                this.personal_form.annual_rent_value = this.clearCommas(v);
              }
            },
            dob: {
             set: function (v) {
               this.personal_form.dob = v;
             },
             get: function () {
              return moment(new Date(this.personal_form.dob)).format('yyyy-MM-DD')
             }
            },
           issue_date: {
             set(v) {
               this.personal_form.id_issue_date = v;
             },
             get() {
               return moment(this.personal_form.id_issue_date).format('yyyy-MM-DD')
             }
           },
           expire_date: {
             set(v) {
               this.personal_form.id_expire_date = v;
             },
             get() {
               return moment(this.personal_form.id_expire_date).format('yyyy-MM-DD')
             }
           },
    },
    methods:{

        submitFirstProfileForm(){
            this.submitted=true;
          this.$v.$touch();
        if(this.$v.$invalid){
            return;
        }
        let isForEdit = this.$store.state.profile.toggle_edit;
         this.$store.dispatch("profile/savePersonalInfoFormAction",this.form);
        if(isForEdit){

           let main_form = this.$store.state.profile.profile
          this.$store.dispatch("profile/savePersonalAndEmploymentDataAction",main_form).then((res)=>{
             this.mortgageLoading(false);
              this.moveToMortgageNextStep(5);
              this.$store.commit("profile/TOGGLE_EDIT",false);
               this.$nuxt.$emit('submit_third_mortgage_form',false);
          }).catch(err=>{
             this.mortgageLoading(false);
          })

        }else{
           this.moveToMortgageNextStep(2);
            this.mortgageLoading(false);
          //   let main_form = this.$store.state.profile.profile
          // this.$store.dispatch("profile/savePersonalAndEmploymentDataAction",main_form).then((res)=>{
            //  this.mortgageLoading(false);

          //       this.prefillMortgageForm();
          //      this.$nuxt.$emit('submit_personal_form',false);
          // }).catch(err=>{

          // })
        }


        },
      prefillForm(){
        let r = this.$store.state.profile.profile;
        this.mapIncomingDataToForm(this.personal_form, r);

      },
      fillAuthUserData(){
            let r = this.$store.state.profile.profile;
              this.personal_form.firstname = r.firstname;
              this.personal_form.lastname = r.lastname;
              this.personal_form.email = r.email;
              this.personal_form.phone = r.phone;
                this.personal_form.address=r.address
            this.personal_form.current_apartment_status=r.current_apartment_status
            this.personal_form.annual_rent_valu=r.annual_rent_valu
            this.personal_form.sex=r.sex
            this.personal_form.dob=r.dob
            this.personal_form.bvn=r.bvn
            this.personal_form.marital_status=r.marital_status
            this.personal_form.state_of_origin=r.state_of_origin
            this.personal_form.no_of_dependents=r.no_of_dependents

            this.personal_form.means_of_identification=r.means_of_identification
            this.personal_form.id_number=r.id_number
            this.personal_form.id_issue_date=r.id_issue_date
            this.personal_form.id_expire_date=r.id_expire_date
            this.personal_form.highest_education=r.highest_education
      }
    },
    created(){
        this.prefillForm();
      this.$store.commit("profile/GO_TO_STEP", 1);
    },
    mounted(){
      this.$nuxt.$on('submit_first_mortgage_form',(param)=>{
        if(param){
          this.submitFirstProfileForm();
        }


      })

    },
  }
</script>

<style lang="scss" scoped>

</style>
