<template>
  <div>
       <v-row justify="center">
          <v-dialog :fullscreen="$vuetify.breakpoint.smAndDown?true:false"
            v-model="requestModal"
            persistent
            max-width="650px"
          >

            <v-card class="pad-card">
              <div class="modal-title text-center">
                <h2 class="headline" >Property Request</h2>
                <p class="modal-p">This is a summary of your preffered property please click Submit Order to confirm request</p>
              </div>

              <v-card-text>
                  <v-form ref="requestform" lazy-validation>
                      <v-container>
                      <v-row>
                      <v-col cols="12" md="6">
                              <v-autocomplete v-model="form.property_type_id"
                              :items="property_types"
                              item-value="id"
                              item-text="name"
                              outlined-items
                              :rules="[rules.required]"
                              :disabled="prefill"
                              label="Property Type"
                              clearable
                              outlined
                          ></v-autocomplete>
                      </v-col>
                          <v-col cols="12" md="6">
                          <v-text-field v-model="form.property_bedroom" type="number"
                                  label="Property Bedroom"
                                  :disabled="prefill"
                                  outlined
                                  clearable
                                  :rules="[rules.required]"
                              ></v-text-field>
                      </v-col>
                          <v-col cols="12">
                          <v-text-field v-model="price"
                                  label="Property Value (N)"
                                  :disabled="prefill"
                                  outlined
                                  clearable
                                  :rules="[rules.required]"
                              ></v-text-field>
                      </v-col>
                          <v-col cols="12" md="6">
                          <v-autocomplete v-model="form.state_id"
                              :items="allStates"
                              item-value="id"
                              item-text="name"
                                cache-items
                              outlined-items
                              :rules="[rules.required]"
                              :disabled="prefill"
                              label="Desired State"

                              clearable
                              outlined
                          ></v-autocomplete>
                              <!-- @change="fetchCities" -->
                      </v-col>
                          <v-col cols="12" md="6">

                          <v-autocomplete v-model="form.city_id"
                                :items="allCities"
                              item-value="id"
                              item-text="name"
                              :disabled="prefill"
                              cach
                              outlined-items
                              :rules="[rules.required]"

                              :label="loading?'loading cities...':'Desired City'"
                              clearable
                              outlined
                          ></v-autocomplete>
                      </v-col>

                      </v-row>
                      <v-row >
                          <v-col cols="12" md="6">
                              <action-button :outlined="true" text="Not Sure Yet, Go back" type="button" height="50" width="100%"
                              :action="closeModal"/>

                          </v-col>
                          <v-col cols="12" md="6">
                              <action-button :loading="loading" :disabled="loading" :outlined="false" text="Am Sure, Submit Request" type="button" height="50" width="100%" :action="submitRequestForm" />
                          </v-col>
                      </v-row>
                  </v-container>
                </v-form>
                <!-- <RequestForm :prefill="true" :selectedProperty="selectedProperty" /> -->
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-row>
  </div>
</template>

<script>
 import general_mixin from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
  export default {
    mixins:[general_mixin,form_mixin],
       props:{
        // prefill:{type:Boolean, required:true},
        // selectedProperty:{type:Object},
    },
      data(){
        return{
          requestModal:false,
          fetching:false,
          prefill:false,
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
            this.requestModal=true;
          },
          closeModal(){
            this.requestModal=false;

            this.prefill =false;
            this.resetForm();
            //  this.$refs.requestform.resetValidation();
          },
        submitRequestForm(){
               if(!this.$refs.requestform.validate()){
                       return;
                }
                this.appLoading(true);
                this.$store.dispatch("profile/saveUserRequestAction",this.form).then((res)=>{
                    this.appLoading(false);
                    this.$router.replace('/dashboard')
                }).catch((err)=>{
                  console.log(err.response)
                    this.appLoading(false);
                })



      }
      },
      created(){
        this.$nuxt.$on("open_request_form",(param)=>{
               if(param){
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
              this.resetForm();
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
        this.$refs.requestform.reset();
      },
  }
</script>

<style lang="scss" scoped>

</style>
