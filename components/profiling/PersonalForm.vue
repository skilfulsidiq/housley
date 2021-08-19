<template>
  <div>

      <v-card outlined class="givme_mb " :class="$vuetify.breakpoint.mdAndUp?'pa-8':'pa-3'">
        <v-form ref="profileform" >
            <v-row align-center justify="center" fill-height>
            <v-col cols="12" md="6">
                <template>
                    <v-text-field
                    label="First Name"
                    type="text"
                    v-model="personal_form.firstname"
                    outlined
                     :rules="[rules.required]"
                ></v-text-field>
                </template>
            </v-col>
            <v-col cols="12" md="6">
                    <v-text-field v-model="personal_form.lastname"
                    label="Last Name"
                    outlined
                    clearable
                     :rules="[rules.required]"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
                    <v-text-field v-model="personal_form.address"
                    label="Address"
                    outlined
                    clearable
                     :rules="[rules.required]"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                    <v-text-field v-model="personal_form.email"
                    label="Email"
                    outlined
                    disabled
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                    <v-text-field type="number" v-model="personal_form.phone"
                    label="Phone number"
                    outlined
                    clearable
                     :rules="[rules.required]"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field outlined type="date"
                    v-model="dob"
                    label="Date of Birth"
                    :rules="[rules.required]"
            ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                 <v-autocomplete v-model="personal_form.state_of_origin"
                   :items="allStates"
                    item-value="name"
                    item-text="name"
                    cache-items
                    :rules="[rules.required]"
                    placeholder="eg Lagos"
                    label="State of Origin"
                    clearable
                    outlined
                ></v-autocomplete>

            </v-col>
            <v-col cols="12" md="6">
                <v-select v-model="personal_form.marital_status"
                    :items="['Single','Married','Divorced','Window']"
                    label="Marital Status"
                    outlined
                    :rules="[rules.required]"
                ></v-select>
            </v-col>
            <v-col cols="12" md="6">
                <v-select v-model="personal_form.current_apartment_status"
                    :items="['Rented','Owned']"
                    label="Current Home Status"
                    outlined
                    :rules="[rules.required]"
                    ></v-select>
            </v-col>
            <v-col cols="12" md="6">
                <v-select v-model="personal_form.mode_of_contact"
                    :items="['Call','Whatsapp','Email']"
                    label="Preferred Mode of Contact"
                    outlined
                    :rules="[rules.required]"
                    ></v-select>
            </v-col>
             <v-col cols="12" md="6">
                <v-text-field outlined type="number" v-model="personal_form.no_of_dependents"
                    label="Number of Dependents"
                     clearable
                      :rules="[rules.required]"
                ></v-text-field>
            </v-col>
        </v-row>
        </v-form>

      </v-card>
  </div>
</template>

<script>
import general_mixin from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
import moment from 'moment';
  export default {
    mixins:[general_mixin,form_mixin],
      data(){
        return{
         personal_form:{
                firstname:"",
                lastname:"",
                middlename:"",
                address:"",
                current_apartment_status:"",
                sex:"",
                dob: "",
                bvn:"",
                marital_status:"",
                state_of_origin:"25",
                place_of_birth:"",
                nationality:"",
                phone:"",
                whatapp:"",
                email:"",
                mode_of_contact:"",
                no_of_dependents:"",

          },
        }
      },
      watch:{
        '$store.state.profile.step':function(){
          console.log('step chnages 1')
         this.prefillForm()
        }
      },
      computed:{

        dob:{
            set:function(v){
                this.personal_form.dob = v;
            },
            get:function(){
                return moment(String(this.personal_form.dob)).format('yyyy-MM-DD')
            }
        },
      },
      methods:{

        submitProfileForm(){
          if(!this.$refs.profileform.validate()){
              return;
          }
          this.$store.dispatch("profile/savePersonalInfoFormAction",this.personal_form).then((res)=>{
              this.goNextStep(2);
          })



        },
        prefillForm(){
          let r = this.$store.state.auth.user;
          this.mapIncomingDataToForm(this.personal_form, r);

        },
    },
    created(){

      // this.form = this.$store.state.profile.form;
      this.$nuxt.$on('submit_personal_form',(param)=>{
        if(param){
          this.submitProfileForm();
        }
      })
    },
    mounted(){
         this.prefillForm();
    }
  }
</script>

<style lang="scss" scoped>

</style>
