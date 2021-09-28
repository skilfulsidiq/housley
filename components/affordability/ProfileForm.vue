<template>
  <div>
       <div class="form-wrapper confirmation">
         <FormulateForm  name="profileForm" v-model="form" @submit="submit">
               <div class='row'>
                  <div class=' col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                      <FormulateInput v-model="form.firstname"
                      label="First Name"
                          name="firstname"
                          input-class="form-control"
                          error-class="form-error"
                          validation="required"
                          error-behavior="value"
                        />
                  </div>
                  <div class=' col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                      <FormulateInput v-model="form.lastname"
                      label="Last Name"
                          name="lastname"
                           error-class="form-error"
                          input-class="form-control"
                          validation="required"
                        />
                  </div>
                  <div class=' col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                      <FormulateInput type="email" v-model="form.email"
                      label="Email"
                          name="email"
                          input-class="form-control"
                           error-class="form-error"
                          validation="required|email"
                        />
                  </div>
                  <div class=' col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                      <FormulateInput type="date" v-model="dob"
                      label="Date of birth" readonly
                          name="dob"
                          input-class="form-control"
                        />
                  </div>
                  <div class=' col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                      <FormulateInput v-model="form.phone"
                      label="Phone"
                          name="phone"
                          input-class="form-control"
                          validation="required|number|min:10,length"
                           error-class="form-error"
                          validation-name="Phone number"
                        />
                  </div>
                  <div class=' col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                      <FormulateInput type="select" v-model="form.employment_status"
                      label="Employment Status"
                          name="employment_status"
                          placeholder="select an option"
                          input-class="form-control"
                          validation="required"
                           error-class="form-error"
                          validation-name="Employment Status"
                          :options="[
                              { value: 'employed', label:'Employed' },
                              { value: 'unemployed', label: 'Unemployed' },
                              { value: 'self-employed', label: 'Self Employed'},
                            ]"
                        />
                  </div>
                   <div class=' col-lg-6 col-md-6 col-sm-12 col-xs-12' v-if="form.employment_status=='employed'">
                      <FormulateInput type="text" v-model="form.employer_name"
                      label="Employer Name"
                          name="employer_name"
                          input-class="form-control"
                          validation="required"
                           error-class="form-error"
                          :validation-rules="{
                              requiredIf: ({ value }) => form.employment_status=='employed'
                            }"
                          validation-name="Employer Name"
                        />
                  </div>
                     <div class=' col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                      <FormulateInput type="select" v-model="form.is_rsa_holder"
                      label="Are you a RSA Holder?"
                          name="is_rsa_holder"
                          placeholder="select an option"
                          input-class="form-control"
                          validation="required"
                           error-class="form-error"
                          :options="[
                              { value: '1', label:'Yes' },
                              { value: '0', label: 'No' }
                            ]"
                        />
                  </div>
                     <div class=' col-lg-6 col-md-6 col-sm-12 col-xs-12' v-if="form.is_rsa_holder=='1'">
                      <FormulateInput type="text" v-model="form.pfa_name"
                      label="PFA"
                          name="pfa_name"
                          input-class="form-control"
                          validation="required"
                           error-class="form-error"
                          :validation-rules="{
                              requiredIf: ({ value }) => form.is_rsa_holder=='1'
                            }"
                          validation-name="Pension Fund Administrator"
                        />
                  </div>
                    <div class=' col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                      <FormulateInput v-model="form.address"
                      label="Address"
                          name="address"
                          input-class="form-control"
                          validation="required"
                           error-class="form-error"
                        />
                  </div>

               </div>
         </FormulateForm>



    </div>
  </div>
</template>

<script>
 import { required, email, minLength, sameAs,requiredIf,numeric } from "vuelidate/lib/validators";
 import general_mixin from '@/mixins/general_mixin';
 import form_mixin from '@/mixins/form_mixin';
export default {
    name:"ProfileForm",
    mixins:[general_mixin,form_mixin],
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
       selectedStatus(){
        return this.$store.state.calculator.propertyIsSelected;
      },
       main_form(){
        return this.$store.state.calculator.form;
      },
      dob:{
           get(){
                let d = this.$store.state.calculator.form.dob;
                this.form.dob = d;
                return this.form.dob;

          },
          set(v){
            let d = this.$store.state.calculator.form.dob;
             this.form.dob = d;
          }
      }

    },
    // validations: {
    //         form: {
    //               firstname: { required },
    //               lastname: { required },
    //               // dob: { required },
    //               employment_status: { required },
    //               employer_name:{required:requiredIf((form) =>form.employment_status=='employed')},
    //               address: { required },
    //               email: { required, email },
    //               phone: { required, numeric,minLength:minLength(10) },
    //               is_rsa_holder:{required},
    //               pfa_name:{required:requiredIf((form) =>form.is_rsa_holder==1)}
    //         }
    //   },
      methods:{
            validateForm(){
              this.$formulate.submit("profileForm");
            },
            submit(data){

                  // this.submitted=true
                  // this.$v.$touch();
                  // if (this.$v.$invalid) {
                  //       window.scrollTo(0,0)
                  //       console.log("error me",this.$v)
                  //       return;
                  // }
                  this.$store.dispatch("calculator/saveProfileFormAction",data);
                  let all = this.$store.state.calculator.form;

                  this.$store.dispatch("calculator/submitPreQualifiedAction",all).then((res)=>{
                        this.$nuxt.$emit('prequalified-modal',true);
                        // console.log("profile saved")
                        this.$router.push("/")

                        // $("#congratulationModal").modal('show');
                  }).catch((err)=>{
                    console.log(err.response);
                  })
            },
            fillAuthUserData(){
              if(this.$auth.user){
                this.form.firstname = this.user.firstname;
                this.form.lastname = this.user.lastname;
                this.form.email = this.user.email;
                this.form.phone = this.user.phone;
                this.form.employment_status = this.user.employment_status;
                // this.form.employer_name = this.user.employer_name;
                this.form.is_rsa_holder = this.user.is_rsa_holder;
                // this.form.pfa_name = this.user.pfa_name;
                this.form.address = this.user.address;
                // this.mapIncomingDataToForm(this.form,this.$auth.user);
              }
              if(!this.selectedStatus){
                 this.form.firstname = this.main_form.firstname;
                this.form.lastname = this.main_form.lastname;
                this.form.email = this.main_form.email;
                this.form.phone = this.main_form.phone;
              }
            }
      },
      created(){
            this.$nuxt.$on('profileSubmit',(t)=>{
              if(t){
                  this.validateForm();
              }

            })
          this.fillAuthUserData();
      }
}
</script>

<style lang="scss" scoped>
  // .form-error{
  //   color:red;
  //   text-decoration: none;
  //   list-style: none;
  // }
</style>
