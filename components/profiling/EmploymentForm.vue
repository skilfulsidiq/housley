<template>
  <div>

      <v-card outlined class="pa-8 givme_mb">
        <v-form ref="employmentform" >
            <v-row>
            <v-col cols="12" md="6">
                <template>
                    <v-text-field  v-model="form.employment_id"
                    label="F/Ap Number"
                    outlined
                    clearable
                     :rules="[rules.required]"
                ></v-text-field>
                </template>
            </v-col>
            <v-col cols="12" md="6">
                    <v-text-field v-model="form.employer_address"
                    label="Command"
                    outlined
                    clearable
                     :rules="[rules.required]"
                ></v-text-field>
            </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete    v-model="form.employment_present_position"
                    :items="['Level 1','Level 2','Level 3']"
                    item-value="name"
                    item-text="name"
                    cach
                    outlinede-items
                    :rules="[rules.required]"
                    placeholder="eg Lagos"
                    label="Rank"
                    clearable
                    outlined
                ></v-autocomplete>

            </v-col>
              <v-col cols="12" md="6">
                 <v-autocomplete v-model="form.employment_state"
                    :items="['Lagos','Oyo','Osun']"
                    item-value="name"
                    item-text="name"
                    cach
                    outlinede-items
                    :rules="[rules.required]"
                    placeholder="eg Lagos"
                    label="State"
                    clearable
                    outlined
                ></v-autocomplete>

            </v-col>
            <v-col cols="12" md="6">
                    <v-text-field  type="number" v-model="form.work_experience"
                    label="Length of service"
                    outlined
                    clearable
                     :rules="[rules.required]"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                    <v-text-field  type="number" v-model="form.year_to_retirement"
                    label="Years to Retirement"
                    outlined
                    clearable
                     :rules="[rules.required]"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                    <v-text-field v-model="form.nhf_registration_number"
                    label="NHF Number"
                    outlined
                    clearable
                ></v-text-field>
            </v-col>

             <v-col cols="12" md="6">
                <v-text-field outlined type="number" v-model="form.bvn"
                    label="BVN"
                     clearable
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
  export default {
    mixins:[general_mixin,form_mixin],
      data(){
        return{
          form:{

                profession:"",
                employment_id:"",
                employment_present_position:"",
                employer_address:"",
                employment_state:"25",
                work_experience:"",
                year_to_retirement:"",
                nhf_registration_number:""
                },
        }
      },
        watch:{
        '$store.state.profile.step':function(){
            console.log('step chnages 2')
         this.prefillForm()
        }
      },
      computed:{

      },
      methods:{
            prefillForm(){
         let r = this.$store.state.profile.profile;
          this.mapIncomingDataToForm(this.form, r);

        },
        submitForm(){
            if(!this.$refs.employmentform.validate()){
                        return;
                    }

        this.$store.dispatch("profile/saveEmploymentInfoFormAction",this.form).then((res)=>{
            let main_form = this.$store.state.profile.profile;
             this.$store.dispatch("profile/savePersonalAndEmploymentDataAction",main_form).then((res)=>{
               console.log('after save',res);
               this.goNextStep(3);
             })
          })

      }
    },
    created(){
        this.prefillForm();
      this.$nuxt.$on('submit_employment_form',(param)=>{
        if(param){
          this.submitForm();
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
