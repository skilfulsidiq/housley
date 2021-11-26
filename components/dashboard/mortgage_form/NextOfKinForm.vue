<template>
  <div>
      <div class="row">
          <div class="col-md-6 col-xs-12">

              <label class="form_one_label custom-field one">
                 <input class="form_one_input" type="text" placeholder=" " v-model="form.next_of_kin_name"/>
                <span class="placeholder2">Next of Kin's Name</span>
                <div v-if="submitted && !$v.form.next_of_kin_name.required" class="error">
                  <small class="error-message">name is required</small>
                </div>
              </label>

        </div>
         <div class="col-md-6 col-xs-12">

              <label class="form_one_label custom-field one">
                <input
                class="form_one_input"
                type="text"
                placeholder=" "
                v-model="form.next_of_kin_phone"
                />
                <span class="placeholder2">Next of Kin's Phone Number</span>
                 <div v-if="submitted && !$v.form.next_of_kin_phone.required" class="error">
                  <small class="error-message">Phone is required</small>
                </div>
                 <div v-if="submitted && !$v.form.next_of_kin_phone.phone" class="error">
                  <small class="error-message">incorrect number of digits</small>
                </div>
                 <!-- <div v-if="submitted && !$v.form.next_of_kin_phone.numeric" class="error">
                  <small class="error-message">invalid phone number</small>
                </div> -->
              </label>

        </div>
         <div class="col-md-6 col-xs-12">

            <label class="form_one_label custom-field one">
              <input
              class="form_one_input address"
              type="text"
              placeholder=" "
              v-model="form.next_of_kin_address"
              />
              <span class="placeholder2">Next of Kin's Address</span>
               <div v-if="submitted && !$v.form.next_of_kin_address.required" class="error">
                  <small class="error-message">Address is required</small>
                </div>
            </label>

        </div>
        <div class="col-md-6 col-xs-12">

              <label class="form_one_label custom-field one">
                 <input class="form_one_input" type="text" placeholder=" " v-model="form.next_of_kin_relationship"/>
                <span class="placeholder2">Next of Kin's Relationship</span>
                <div v-if="submitted && !$v.form.next_of_kin_relationship.required" class="error">
                  <small class="error-message">Relationship is required</small>
                </div>
              </label>

        </div>
      </div>
  </div>
</template>

<script>
 import general_mixin from '@/mixins/general_mixin'
  import {optional} from '@/mixins/general_mixin'
  import {rules} from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
import mortgage_mixin from '@/mixins/mortgage_mixin'
import { required, email,minLength,requiredIf,numeric} from "vuelidate/lib/validators";
// import Modal from '../../../components/Modal.vue'
  export default {
  // components: { Modal },
    layout:'mortgage',
     mixins:[general_mixin,form_mixin,mortgage_mixin],
    data(){
        return{
          submitted:false,
          next_form_step:'',
          form:{
            next_of_kin_name:'',
            next_of_kin_phone:'',
            next_of_kin_address:'',
            next_of_kin_relationship:''
          },
          children_form:{
            name:'',
            age:''
          }
        }
      },
      validations: {
       form:{
          next_of_kin_name:{required},
            next_of_kin_phone:{required,phone:rules.main_phone},
            next_of_kin_address:{required},
            next_of_kin_relationship:{required}
       }
      },
      watch:{
        'personal_form.have_children':function(v){
          if(v==1){
            // this.processModal(true);
          }
        }
      },
      computed:{
      },
      methods:{
        addChild(){
          if(!this.$refs.children.validate()){
              return;
          }
          this.personal_form.children.push(this.children_form);
          this.children_form={
            name:'',
            age:''
          }
          this.processModal(false);
        },
        removeChild(index){

        },
        processModal(status){
          this.activateModal('add_children',status);
        },
        submitSecondProfileForm(){
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
          this.mortgageLoading(true);
          this.moveToMortgageNextStep(3);
          this.$nuxt.$emit('submit_second_mortgage_form',false);
           this.mortgageLoading(false);
          // this.$store.dispatch("profile/savePersonalAndEmploymentDataAction",this.personal_form).then((res)=>{

          //     this.moveToMortgageNextStep(3);
          //      this.$nuxt.$emit('submit_second_mortgage_form',false);
          // }).catch(err=>{
          //   //  this.mortgageLoading(false);
          // })
        }


        },
        prefillFromNextKinToPersonal(){
            this.personal_form.next_of_kin_name= this.form.next_of_kin_name
            this.personal_form.next_of_kin_phone=  this.form.next_of_kin_phone
            this.personal_form.next_of_kin_address=  this.form.next_of_kin_address
            this.personal_form.next_of_kin_relationship= this.form.next_of_kin_relationship

        },
        prefillFromPersonalToNextKin(){
            let r = this.$store.state.profile.profile;
            this.form.next_of_kin_name= "oab"
            this.form.next_of_kin_name= this.personal_form.next_of_kin_name
            this.form.next_of_kin_phone=  this.personal_form.next_of_kin_phone
            this.form.next_of_kin_address=  this.personal_form.next_of_kin_address
            this.form.next_of_kin_relationship= this.personal_form.next_of_kin_relationship

        },
        prefillManual(){
            let r = this.$store.state.profile.profile;
            this.form.next_of_kin_name= r.next_of_kin_name
            this.form.next_of_kin_phone=  r.next_of_kin_phone
            this.form.next_of_kin_address=  r.next_of_kin_address
            this.form.next_of_kin_relationship= r.next_of_kin_relationship

        },
         prefillForm(){
        let r = this.$store.state.profile.profile;
        this.mapIncomingDataToForm(this.form, r);

      },
    },
    created(){

        this.$store.commit("mortgage/GO_TO_STEP", 2);
          // this.$store.commit("profile/GO_TO_STEP", 1);
    },
    mounted(){
       this.prefillForm();
      this.$nuxt.$on('submit_second_mortgage_form',(param)=>{
        if(param){
            // if(this.$refs.personal_second){
                this.submitSecondProfileForm();
            // }
            // this.next_form_step = param.next;

        }


      })

    },
    unmounted() {
      this.$refs.personal_second.reset();
    },
  }
</script>

<style lang="scss" scoped>

</style>
