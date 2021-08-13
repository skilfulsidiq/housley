<template>
  <div>
       <div class="form-wrapper confirmation">
       <form action="#">
               <div class='row'>
                  <div class=' col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <label class="form-control-label">First Name</label>
                        <input type='text' v-model="form.firstname" class='form-control'
                        placeholder='First Name' :class="{ 'is-invalid': submitted && $v.form.firstname.$error }" />
                         <div v-if="submitted && !$v.form.firstname.required" class="form-error">First name is required</div>
                  </div>

                  <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <label class="form-control-label">Last Name</label>
                        <input type='text' v-model="form.lastname" class='form-control'
                        placeholder='Last Name'  :class="{ 'is-invalid': submitted && $v.form.lastname.$error }"/>
                          <div v-if="submitted && !$v.form.lastname.required" class="form-error">Last name is required</div>
                  </div>

                  <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <label class="form-control-label">Email</label>
                        <input type='email' v-model="form.email" class='form-control'
                        placeholder='Email Address'  :class="{ 'is-invalid': submitted && $v.form.email.$error }"/>
                         <div v-if="submitted && !$v.form.email.required" class="form-error">Email is required</div>
                         <div v-if="submitted && !$v.form.email.email" class="form-error">Email is invalid</div>
                  </div>

                  <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
                            <label class="form-control-label">Date of Birth</label>
                        <input type='text' readonly v-model="dob" class='form-control '
                        placeholder='Date of Birth' />
                  </div>

                  <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
                         <label class="form-control-label">Phone Number</label>
                        <input type='text' v-model="form.phone" class='form-control '
                        placeholder='phone number' :class="{ 'is-invalid': submitted && $v.form.phone.$error }" />
                          <div v-if="submitted && !$v.form.phone.required" class="form-error">Phone number is required</div>
                          <div v-if="submitted && !$v.form.phone.numeric" class="form-error">Phone number must be a number</div>
                  </div>

                  <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                         <label class="form-control-label">Employment Status</label>
                        <select  v-model="form.employment_status" class='form-control' :class="{ 'is-invalid': submitted && $v.form.employment_status.$error }">
                              <option value="">Employment Status</option>
                              <option value="employed">Employed</option>
                              <option value="unemployed">Unemployed</option>
                              <option value="self employed">Self Employed</option>
                        </select>
                        <div v-if="submitted && !$v.form.employment_status.required" class="form-error">Employment Status is required</div>
                  </div>

               </div>
                    <div class='form-group row'>

                   <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12 ' v-show="form.employment_status=='employed'">
                          <label class="form-control-label">Employer Name</label>
                        <input type='text' v-model="form.employer_name" class='form-control '
                        placeholder='Employer name' :class="{ 'is-invalid': submitted && $v.form.employer_name.$error }" />
                          <div v-if="submitted && !$v.form.employer_name.required" class="form-error">Employer name is required</div>

                  </div>

                    <div class=' col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                           <label class="form-control-label">Do you have NHF number ?</label>
                        <select  v-model="form.is_rsa_holder" class='form-control' :class="{ 'is-invalid': submitted && $v.form.is_rsa_holder.$error }">
                              <option value="" selected></option>
                              <option value="1">Yes</option>
                              <option value="0">No</option>
                        </select>
                        <div v-if="submitted && !$v.form.is_rsa_holder.required" class="form-error">Option is required</div>
                  </div>

                    <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12 topme' v-show="form.is_rsa_holder==1">
                           <label class="form-control-label">NHF Number</label>
                        <input type='text' v-model="form.pfa_name" class='form-control '
                        placeholder='NHF Number' :class="{ 'is-invalid': submitted && $v.form.pfa_name.$error }" />
                          <div v-if="submitted && !$v.form.pfa_name.required" class="form-error">NHF number is required</div>

                  </div>
                      </div>



            <div class='form-group row'>
                  <div class='col-lg-12 col-md-6 col-sm-12 col-xs-12 '>
                         <label class="form-control-label">Address</label>
                        <input type='text' v-model="form.address" class='form-control '
                        placeholder='Address' :class="{ 'is-invalid': submitted && $v.form.address.$error }" />
                           <div v-if="submitted && !$v.form.address.required" class="form-error">Address is required</div>
                  </div>
            </div>
       </form>


    </div>
  </div>
</template>

<script>
 import { required, email, minLength, sameAs,requiredIf,numeric } from "vuelidate/lib/validators";
//  import form_mixin from '@/mixins/form_mixin';
export default {
    name:"ProfileForm",
    // mixins:[form_mixin],
    props:{
        inputBg:{type:String,default:'#fff'}
    },
    data(){
        return{
              min_range:5,
            max_range:50,
            submitted:false,
            form:{
                  firstname:'',
                  lastname:'',
                  email:'',
                  phone:'',
                  dob:'',
                  employment_status:'',
                  employer_name:'',
                  is_rsa_holder:'',
                  pfa_name:'',
                  address:''
            }

        }
    },
    computed:{
          dob(){
                let d = this.$store.state.calculator.form.dob;
                this.form.dob = d;
                return d;
          }
    },
    validations: {
            form: {
                  firstname: { required },
                  lastname: { required },
                  dob: { required },
                  employment_status: { required },
                  employer_name:{required:requiredIf((form) =>form.employment_status=='employed')},
                  address: { required },
                  email: { required, email },
                  phone: { required, numeric,minLength:minLength(10) },
                  is_rsa_holder:{required},
                  pfa_name:{required:requiredIf((form) =>form.is_rsa_holder==1)}
            }
      },
      methods:{
            submit(){
                  this.submitted=true
                  this.$v.$touch();
                  if (this.$v.$invalid) {
                        return;
                  }
                  console.log("profile react")
                  this.$store.dispatch("calculator/saveProfileFormAction",this.form)
                  let all = this.$store.state.calculator.form;

                  this.$store.dispatch("calculator/submitPreQualifiedAction",all).then((res)=>{
                        this.$nuxt.$emit('prequalified-modal',true);
                        // console.log("profile saved")
                        // this.$router.push("/register")

                        // $("#congratulationModal").modal('show');
                  })
            }
      },
      created(){
            this.$nuxt.$on('profileSubmit',(t)=>{
                  this.submit();
            })
      }
}
</script>

<style lang="scss" scoped>

</style>
