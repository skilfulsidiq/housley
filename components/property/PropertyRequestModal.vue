<template>
  <div>
       <div
          class="modal preapprovalform modal fade"
          id="requestModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="pre-approval-form-container">
                <img class="modal-close" src="/img/close.svg" data-dismiss="modal"
                  alt="close"/>

                <div id="regForm" class="form-tab" >
                  <!-- One "tab" for each step in the form: -->
                  <div class="request-form">
                    <div class="heading">
                      <h1 class="big-font green bold">Property Request</h1>
                      <p class="sub-title color1">
                        Indication form description
                      </p>
                    </div>

                    <div class="doub-grid">
                      <div>
                        <label for="firstName">First Name</label>
                        <input v-model="form.firstname"
                          type="text"
                          name="firstName"
                          id="firstName"
                          class="color1"
                          :class="{ 'is-invalid': submitted && $v.form.firstname.$error }" />
                         <div v-if="submitted && !$v.form.firstname.required" class="form-error">FirstName is required</div>
                      </div>
                      <div>
                        <label for="lastName">Last Name</label>

                        <input v-model="form.lastname"
                          type="text"
                          name="lastName"
                          id="lastName"
                          class="color1"
                         :class="{ 'is-invalid': submitted && $v.form.lastname.$error }" />
                         <div v-if="submitted && !$v.form.lastname.required" class="form-error">Lastname is required</div>
                      </div>
                    </div>

                    <div class="doub-grid">
                      <div>
                        <label for="Email">Email</label>
                        <input v-model="form.email"
                          type="email"
                          name="Email"
                          id="Email"
                          class="color1"
                       :class="{ 'is-invalid': submitted && $v.form.email.$error }" />
                         <div v-if="submitted && !$v.form.email.required" class="form-error">Email is required</div>
                         <div v-if="submitted && !$v.form.email.email" class="form-error">Enter a valid Email</div>
                      </div>
                      <div>
                        <label for="phoneNumber">Phone</label>

                        <input v-model="form.phone"
                        min="1"
                          type="number"
                          name="phoneNumber"
                          id="phoneNumber"
                          class="color1"
                        :class="{ 'is-invalid': submitted && $v.form.phone.$error }" />
                         <div v-if="submitted && !$v.form.phone.required" class="form-error">Phone is required</div>
                         <div v-if="submitted && !$v.form.phone.numeric" class="form-error">Phone number must be a number</div>
                         <div v-if="submitted && !$v.form.phone.minLength" class="form-error">Enter valid Phone number</div>
                      </div>
                    </div>


                       <div class="doub-grid">
                         <div>
                          <label for="homeType">Property Type</label>
                          <div class="select">
                            <select id="homeType" v-model="form.property_type_id" :class="{ 'is-invalid': submitted && $v.form.property_type_id.$error }" >

                              <option class="selected" value="selected">
                                select property type
                              </option>
                               <option :value="type.id" v-for="type in property_types" :key="type.id">{{type.name}}</option>
                            </select>
                            <span class="focus"></span>

                          </div>
                            <div v-if="submitted && !$v.form.property_type_id.required" class="form-error">Property Type is required</div>
                        </div>
                         <div>
                        <label for="phoneNumber">Number of Bedrooms</label>

                        <input v-model="form.property_bedroom"
                        min="1"
                          type="number"
                          name="bedroom"
                          id="phoneNumber"
                          class="color1"
                        :class="{ 'is-invalid': submitted && $v.form.property_bedroom.$error }" />
                         <div v-if="submitted && !$v.form.property_bedroom.required" class="form-error">Property bedroom is required</div>
                      </div>

                       </div>
                        <div class="doub-grid">

                        <div>
                      <label for="homeType">Payment Options</label>
                      <div class="select">
                        <select id="homeType" v-model="form.payment_option" :class="{ 'is-invalid': submitted && $v.form.payment_option.$error }" >
                          <option class="selected" value="selected">
                            select payment option
                          </option>
                           <option :value="option.option" v-for="option in payment_options" :key="option.id">{{option.option}}</option>
                        </select>
                        <span class="focus"></span>

                      </div>
                      <div v-if="submitted && !$v.form.payment_option.required" class="form-error">Payment Option is required</div>
                        </div>
                         <div>
                        <label for="phoneNumber">Budgeted Property value</label>

                        <input v-model="price"
                        min="1"
                          type="text"
                          id="phoneNumber"
                          class="color1"
                         :class="{ 'is-invalid': submitted && $v.form.property_value.$error }" />
                         <div v-if="submitted && !$v.form.property_value.required" class="form-error">Property Value is required</div>
                      </div>
                        </div>

                       <div class="doub-grid">
                          <div>
                            <label for="homeType">Desired State</label>
                            <div class="select">
                              <select id="homeType" v-model="form.state_id"  :class="{ 'is-invalid': submitted && $v.form.state_id.$error }" >
                                <option class="selected" selected>
                                  Select state
                                </option>
                                <option :value="state.id" v-for="state in all_states" :key="state.id">{{state.name}}</option>
                              </select>
                              <span class="focus"></span>
                            </div>
                            <div v-if="submitted && !$v.form.state_id.required" class="form-error">State is required</div>
                          </div>
                          <div>
                            <label for="homeType">Desired City</label>
                            <div class="select">
                              <select id="homeType" v-model="form.city_id"  :class="{ 'is-invalid': submitted && $v.form.city_id.$error }" >
                                <option class="selected" value="selected">
                                  Select preferred city
                                </option>
                                 <option :value="city.id" v-for="city in all_cities" :key="city.id">{{city.name}}</option>
                              </select>
                              <span class="focus"></span>
                            </div>
                              <div v-if="submitted && !$v.form.city_id.required" class="form-error">City is required</div>
                          </div>
                       </div>
                    <div class="flex next-prev">
                      <button
                        type="button"
                        @click.stop="submitForm"
                        class="next xxsm-font green-btn s-bold hoverable"

                      >
                           Submit
                      </button>
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
 import { required, email, minLength, sameAs,requiredIf,numeric } from "vuelidate/lib/validators";
 import form_mixin from "@/mixins/form_mixin";
 import general_mixin from "@/mixins/general_mixin";
  export default {
    mixins:[form_mixin,general_mixin],
    data(){
      return{
        submitted:false,
          submiting:false,
          form:{
            firstname:'',
            lastname:'',
            email:'',
            phone:'',
            property_value:'',
            found_property:0,
            state_id:'',
            city_id:'',
            property_bedroom:'',
            found_property:'',
            property_type_id:'',
            payment_option:''
          }
      }
    },
       validations: {
            form: {
                  firstname: { required },
                  lastname: { required },
                  email: { required, email },
                  phone: { required, numeric,minLength:minLength(10) },
                  property_value:{required},
                  property_bedroom:{required},
                  state_id:{required},
                  city_id:{required},
                  property_type_id:{required},
                  payment_option:{required}
            }
      },
      computed:{
        all_states(){
          return this.$store.state.general.states
        },
        property_types(){
          return this.$store.state.general.property_types
        },
        all_cities(){
          return this.$store.state.general.cities
        },
        payment_options(){
          return this.$store.state.general.payment_options
        },
        price:{
          get(){
            return this.formatToCommaSeperated(this.form.property_value);
          },
          set(v){
            this.form.property_value = this.removeCommaFromNumber(v);
          }
        }
      },
      watch:{
        'form.state_id':function(v){
          this.fetchCities(v);
        }
      },
    methods:{
      showModal(){
        $("#requestModal").modal('show');
      },
      closeModal(){
        $("#requestModal").modal('hide');
      },
      clearForm(){
        this.form={
           firstname:'',
            lastname:'',
            email:'',
            phone:'',
            property_value:'',
            found_property:0,
            state_id:'',
            city_id:'',
            property_bedroom:'',
            found_property:'',
            property_type_id:'',
            payment_option:''
        }
      },
      submitForm(){
           console.log("submittign activated")
         this.submitted=true
          this.$v.$touch();
          if (this.$v.$invalid) {
                return;
          }
             console.log("before api calls")
          // this.submiting=true;
          this.$store.dispatch("calculator/saveUserRequestWithAuthAction",this.form).then((res)=>{
              // this.submiting=false
              this.closeModal();
              this.clearForm();
              console.log(res);
          }).catch(e=>{
            this.submiting=false;
            console.log(e.response);
          })
      }
    },
    created(){
        this.$nuxt.$on("show_request_modal",(param)=>{
          if(param){
            this.showModal();
          }else{
            this.closeModal();
          }
        })
        this.$nuxt.$on("submitForm",(param)=>{
          if(param){
            this.submitForm();
          }
        })
    }
  }
</script>

<style lang="scss" scoped>
.tab-step{
  display: block;
}
</style>
