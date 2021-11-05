<template>
  <div>
     <div
      class="modal fade"
      id="selectPro"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" style="display: flex; justify-content: center">
        <div class="modal-content" style="height: fit-content; border-radius: 16px;">
          <div class="modal_dash">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Affordability Result
              </h5>
              <p class="modal-p">
                This is a summary of your preffered property please click Submit
                Order to confirm request
              </p>
            </div>
            <div class="modal-body">
              <div class="general_user_info" style="width: 100%">
                  <div class="selectbox">
                  <select v-model="form.property_type_id" class="form-select pop_text" aria-label="Default select example" required >
                    <!-- <option value=""></option> -->
                    <option v-bind:value="p.id" v-for="p in property_types" :key="p.id">{{p.name}}</option>
                    </select>
                  <label class="selectlabel" for="pick">Property Type</label>
              </div>

                  <div v-if="submitted && !$v.form.property_type_id.required" class="error">
                      <small class="error-message">Property Type is required</small>
                    </div>
            </div>
              <!-- 2 -->
              <div class="general_user_info" style="width: 100%; margin-top: 5px">
                <label class="form_one_label custom-field one">
                <input v-model="form.property_bedroom"
                class="form_one_input"
                :readonly="prefill"
                type="number"
                placeholder=" "
                />
                <span class="placeholder2">Bedrooms</span>
                 <div v-if="submitted && !$v.form.property_bedroom.required" class="error">
                  <small class="error-message">Bedroom is required</small>
                </div>
              </label>
              </div>
              <!-- 3 -->
             <div class="general_user_info" style="width: 100%; margin-top: 5px">
                <label class="form_one_label custom-field one">
                <input v-model="price"
                class="form_one_input"
                type="text"
                :readonly="prefill"
                placeholder=" "
                />
                <span class="placeholder2">Property Value</span>
                 <div v-if="submitted && !$v.form.property_value.required" class="error">
                  <small class="error-message">Property value is required</small>
                </div>
              </label>
              </div>
              <!-- 4 -->
              <div class="general_user_info" style="width: 100%;margin-top: 25px">

                  <div class="selectbox">
                    <select v-model="form.state_id" class="form-select pop_text" aria-label="Default select example" required >
                      <!-- <option value=""></option> -->
                      <option v-bind:value="p.id" v-for="p in allStates" :key="p.id">{{p.name}}</option>
                      </select>
                    <label class="selectlabel" for="pick">Preffered State</label>
                </div>
                  <div v-if="submitted && !$v.form.state_id.required" class="error">
                      <small class="error-message">State  is required</small>
                    </div>
            </div>
              <!-- 5 -->
                 <div class="general_user_info" style="width: 100%;margin-top: 25px">
                      <div class="selectbox">
                    <select v-model="form.city_id" class="form-select pop_text" aria-label="Default select example" required >
                      <!-- <option value=""></option> -->
                      <option v-bind:value="p.id" v-for="p in allCities" :key="p.id">{{p.name}}</option>
                      </select>
                    <label class="selectlabel" for="pick">Preffered City</label>
                </div>

                  <div v-if="submitted && !$v.form.city_id.required" class="error">
                      <small class="error-message">City  is required</small>
                    </div>
            </div>
            </div>
            <div
              class="modal-footer"
              style="display: flex; justify-content: center; border-top: none; padding-bottom: 40px;"
            >
              <button
                type="button"
                class="button_close"
                @click="closeModal"
              >
                Not sure, go back
              </button>
              <button type="button" class="button_open" @click="submitRequestForm">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import general_mixin from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
import store_mixin from '@/mixins/store_mixin'
import { required, email,minLength} from "vuelidate/lib/validators";
  export default {
    mixins:[general_mixin,form_mixin,store_mixin],
       props:{
        // prefill:{type:Boolean, required:true},
        // selectedProperty:{type:Object},
    },
      data(){
        return{
          requestModal:false,
          fetching:false,
          prefill:false,
          submitted:false,
             form:{
            property_id:'',
            property_type_id:'',
            found_property:0,
            request_type:"Home",
            state_id:'',
            city_id:'',
            property_value:'',
            property_bedroom:'',
            // city:''
            }
        }
      },
      validations:{
         form: {
          property_type_id:{required},
          state_id:{required},
          city_id:{required},
          property_value:{required},
          property_bedroom:{required}

        }
      },
      watch:{
        'form.state_id':function(v){
            this.fetchCities(v)
        }
      },
      computed:{
        selectedProperty(){
          let pro = this.$store.state.property.selected_property;
          return pro
        },
        price:{
          get(){
            return this.formatCurrency(this.form.property_value)
          },
          set(v){
            this.form.property_value = this.clearCommas(v);
          }
        }
      },
      methods:{
        prefillRequestForm(property) {
            if (this.prefill) {
              this.form.property_id = property.id
              this.form.property_value = property.property_price
              this.form.state_id = property.state_id
              this.form.city_id = property.city_id
              this.form.property_type_id  = this.mapPropertyTypeId(property.property_type);
              this.form.property_bedroom = property.property_bedrooms
              this.form.property_bathroom = property.property_bathrooms
              this.form.found_property = 1;

            }
          },
          resetForm(){
              this.form = {
                property_id:'',
                property_type_id:'',
                found_property:0,
                request_type:"Home",
                state_id:'',
                city_id:'',
                property_value:'',
                property_bedroom:'',
                property_bathroom:'',
            // city:''
            }
          },
          goBack(){
            console.log('am back')
            this.requestModal=true;
          },
          showModal(){
              $("#selectPro").modal("show")
          },
          closeModal(){
            $("#selectPro").modal("hide");
            this.prefill =false;
            this.resetForm();
          },
        submitRequestForm(){
          this.submitted=true;
          this.$v.$touch();

               if(this.$v.$invalid){
                       return;
                }

                // this.appLoading(true);
                this.$store.dispatch("profile/saveUserRequestAction",this.form).then((res)=>{
                    // this.appLoading(false);
                      this.$store.dispatch("dashboard/getUserPropertyRequestAction")
                    this.closeModal();
                    this.$router.replace('/dashboard')
                }).catch((err)=>{
                  console.log(err.response)
                    // this.appLoading(false);
                })



      }
      },
      created(){
        this.$nuxt.$on("request_modal",(param)=>{
               if(param){
                 this.prefill=false;
              this.showModal();
            }else{
              this.closeModal();
            }
        })
        // this.prefillRequestForm(this.selectedProperty);
        this.$nuxt.$on("selected_property",(param)=>{
            if(param.status){
              this.prefill= param.prefill;
              // if(!this.prefill){ }
              this.showModal();

              this.prefillRequestForm(param.property);
            }else{
              // this.resetForm();
              this.closeModal();
            }


        })

      },
      mounted(){
        // if(!this.prefill){
        //   if(this.$refs.requestform){
        //     this.$refs.requestform.reset();
        //   }

        // }
      },
      unmounted() {
        // this.$refs.requestform.reset();
      },
  }


</script>

<style lang="scss" scoped>
  .modal-header {
    padding-top: 50px !important;
  }
  .general_user_info{
    border:none;
  }
</style>
