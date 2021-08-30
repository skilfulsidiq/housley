<template>
  <div>
      <v-form ref="personal">
        <v-row class="">
            <v-col class="col-12" md="6">
                <div class="mg-top">
                    <v-text-field :rules="[rules.required]" label="First Name" outlined v-model="personal_form.firstname"  ></v-text-field>
                </div>
            </v-col>
              <v-col class="col-12" md="6">
                  <div class="mg-top">
                      <v-text-field :rules="[rules.required]" label="Last Name" outlined v-model="personal_form.lastname"  ></v-text-field>
                  </div>
            </v-col>
            <v-col class="col-12" md="6">
                <div class="mg-top">
                    <v-text-field :rules="[rules.required]" label="Middle Name" outlined v-model="personal_form.middlename"  ></v-text-field>
                </div>
            </v-col>
              <v-col class="col-12" md="6">
                  <div class="mg-top">
                  <v-text-field :rules="[rules.required]" label="Mother's Maiden Name" outlined
                  v-model="personal_form.mother_middle_name" ></v-text-field>
                  </div>
            </v-col>
              <v-col class="col-12" md="6">
                  <div class="mg-top">
                  <v-text-field :rules="[rules.required]" label="Address" outlined v-model="personal_form.address" ></v-text-field>
                  </div>
            </v-col>
            <v-col class="col-12" md="6">
                  <div class="mg-top">
                  <v-text-field :rules="[rules.required]" label="Email Address" type="email" outlined disabled v-model="personal_form.email" ></v-text-field>
                  </div>
            </v-col>
              <v-col class="col-12" md="6">
                  <div class="mg-top">
                  <v-text-field :rules="[rules.required,rules.main_phone]" label="Phone" type="Tel" outlined v-model="personal_form.phone"  ></v-text-field>
                  </div>
            </v-col>
            <v-col class="col-12" md="6">
                  <div class="mg-top">
                  <v-text-field
                  label="Date of Birth"
                  outlined v-model="dob"

                  type="date"
                  ></v-text-field>
                  </div>
            </v-col>
              <v-col class="col-12" md="6">
                  <div class="mg-top">
                  <v-select
                  label="Sex" v-model="personal_form.sex"
                  :items="['Male','Female']"
                  outlined
                  :rules="[rules.required]"
                  ></v-select>
                  </div>
            </v-col>
              <v-col class="col-12" md="6">
                  <div class="mg-top">
                  <v-text-field :rules="[rules.required]" label="Place of Birth" type="text" outlined
                  v-model="personal_form.place_of_birth"  ></v-text-field>
                  </div>
            </v-col>
              <v-col class="col-12" md="6">
                  <div class="mg-top">
                      <v-text-field :rules="[rules.required]" label="Nationality"
                      v-model="personal_form.nationality" type="text" outlined/>

                  </div>
            </v-col>
              <v-col class="col-12" md="6">
                  <div class="mg-top">
                  <v-select  v-model="personal_form.state_of_origin"
                  label="State of Origin"
                  item-text="name"
                  item-value="name"
                  :items="states"
                  outlined
                  ></v-select>
                  </div>
            </v-col>
              <v-col class="col-12" md="6">
                  <div class="mg-top">
                  <v-select  v-model="personal_form.highest_education"
                  label="Highest Educational Qualification"
                  :items="['Phd','Msc','Bsc','Bed','HND','OND','NCE','SSCE']"
                  outlined
                  :rules="[rules.required]"


                  ></v-select>
                  </div>
            </v-col>
            <v-col class="col-12" md="6">
                  <div class="mg-top">
                  <v-text-field :rules="[rules.required]" label="Profession" type="text" outlined
                   v-model="personal_form.profession" ></v-text-field>
                  </div>
            </v-col>
              <v-col class="col-12" md="3">
                  <div class="mg-top">
                  <v-select
                  label="Means of Identification"
                  :items="['International Passport','National ID','Voter Card','Driver Licence']"
                  outlined
                   v-model="personal_form.means_of_identification"
                   :rules="[rules.required]"


                  ></v-select>
                  </div>
            </v-col>
            <v-col class="col-12" md="3">
                  <div class="mg-top">
                  <v-text-field label="Id Number" type="tel" outlined
                  :rules="[rules.required]" v-model="personal_form.id_number" ></v-text-field>
                  </div>
            </v-col>
              <v-col class="col-12" md="3">
                  <div class="mg-top">
                  <v-text-field
                  outlined
                   :rules="[rules.required,rules.before_date]" v-model="issue_date"
                  label="Date of Issue"
                  type="date"
                  ></v-text-field>
                  </div>
            </v-col>
            <v-col class="col-12" md="3">
                  <div class="mg-top">
                  <v-text-field
                  outlined
                   :rules="[rules.required,rules.after_date]" v-model="expire_date"

                  label="Expiry Date"
                  type="date"
                  ></v-text-field>
                  </div>
            </v-col>
        </v-row>
      </v-form>
  </div>
</template>

<script>
import general_mixin from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
import mortgage_mixin from '@/mixins/mortgage_mixin'
  export default {
    layout:'mortgage',
     mixins:[general_mixin,form_mixin,mortgage_mixin],
    data(){
        return{
          next_form_step:''
        }
      },
      computed:{

      },
      methods:{

        submitFirstProfileForm(){
            // this.$nextTick(function () {

            // })
          if(!this.$refs.personal.validate()){
              return;
          }
          this.appLoading(true);
          console.log("am submitting")
          this.$store.dispatch("profile/savePersonalAndEmploymentDataAction",this.personal_form).then((res)=>{
             this.appLoading(false);
              this.goMortgageNextStep(2);
               this.$nuxt.$emit('submit_first_mortgage_form',false);
              this.$router.push(this.next_form_step)
          }).catch(err=>{
             this.appLoading(false);
          })



        },
        prefillForm(){
          let r = this.$store.state.auth.user;
          this.mapIncomingDataToForm(this.personal_form, r);

        },
    },
    created(){
       this.prefillForm();
          this.$store.commit("mortgage/GO_TO_STEP", 1);
    },
    mounted(){

      this.$nuxt.$on('submit_first_mortgage_form',(param)=>{
        if(param.status){
            if(this.$refs.personal){
                this.submitFirstProfileForm();
            }
            this.next_form_step = param.next;

        }


      })

    },
    unmounted() {
      this.$refs.personal.reset();
    },
  }
</script>

<style lang="scss" scoped>

</style>
