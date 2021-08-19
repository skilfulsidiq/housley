<template>
  <div>
    <v-form ref="personal_second">
         <v-row >
            <v-col class="col-12" md="6">
                <div class="mg-top">
                      <v-select v-model="personal_form.current_apartment_status"
                  :items="['Owned','Rented','Others']"
                  outlined
                  label="Current home Status"
                  ></v-select>
                </div>
            </v-col>
            <v-col class="col-12" md="6">
                <div class="mg-top">
                      <v-select  v-model="personal_form.marital_status"
                  :items="['Single','Married','Divorced','Window']"
                  outlined
                  label="Marital Status"
                  ></v-select>
                </div>
            </v-col>
              <v-col class="col-12" md="6">
                  <div class="mg-top">
                      <v-select  v-model="personal_form.have_children"
                  label="Do you have children"
                  :items="yesNoOption"
                  outlined
                  ></v-select>
                </div>
            </v-col>
             <!-- <v-col class="col-12" md="12" v-if="personal_form.have_children==1">
                <v-simple-table>
                   <template v-slot:default>
                  <thead class="green lighten-5">
                      <th class="text-left">Name</th>
                      <th class="text-left">Age</th>
                      <th class="text-left"></th>
                  </thead>
                  <tbody v-if="personal_form.children">
                    <tr  v-for="(child,i) in personal_form.children" :key="i">
                        <td>{{child.name}}</td>
                        <td>{{child.age}}</td>
                        <td><v-btn color="accent" @click="removeChild(i)"><v-icon>mdi-plus</v-icon></v-btn></td>
                    </tr>

                  </tbody>
                   </template>
                </v-simple-table>
             </v-col> -->
              <v-col class="col-12" md="6">
                  <div class="mg-top">
                  <v-text-field :rules="[rules.required]" label="Next-of-Kin's Name" outlined v-model="personal_form.next_of_kin_name"  ></v-text-field>
                  </div>
            </v-col>
                 <v-col class="col-12" md="6">
                  <div class="mg-top">
                    <v-text-field :rules="[rules.required,rules.main_phone]" type="tel" label="Next-of-Kin's Phone" outlined v-model="personal_form.next_of_kin_phone"  ></v-text-field>
                  </div>
            </v-col>
            <v-col class="col-12" md="6">
                  <div class="mg-top">
                  <v-text-field v-model="personal_form.next_of_kin_address"
                  outlined
                  label="Next-of-Kin's Address"

                  ></v-text-field>
                  </div>
            </v-col>
            <v-col class="col-12" md="6">
                  <div class="mg-top">
                  <v-text-field :rules="[rules.required]" label="Next-of-Kin's Relationship" type="email" outlined
                  v-model="personal_form.next_of_kin_relationship" ></v-text-field>
                  </div>
            </v-col>

      </v-row>
    </v-form>
    <modal title="Add Child" name="add_children" width="400px">
           <template v-slot:content>
             <v-form ref="children">
                 <v-text-field :rules="[rules.required]" label="Name"  v-model="children_form.name"  ></v-text-field>
                  <v-text-field :rules="[rules.required]" label="Next-of-Kin's Age" type="tel" v-model="personal_form.next_of_kin_phone" outlined  ></v-text-field>
                  <ActionButton type="submit" height="35px" text="Add Child"
                  :loading="loading" :disabled="loading"
                  :block="true"
                  color="secondary"
                  :action="addChild"/>
             </v-form>
           </template>

    </modal>
  </div>
</template>

<script>
 import general_mixin from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
import mortgage_mixin from '@/mixins/mortgage_mixin'
import Modal from '../../../components/Modal.vue'
  export default {
  components: { Modal },
    layout:'mortgage',
     mixins:[general_mixin,form_mixin,mortgage_mixin],
    data(){
        return{
          next_form_step:'',
          children_form:{
            name:'',
            age:''
          }
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
            // this.$nextTick(function () {

            // })
          if(!this.$refs.personal_second.validate()){
              return;
          }
          this.appLoading(true);
          this.$store.dispatch("profile/savePersonalAndEmploymentDataAction",this.personal_form).then((res)=>{
             this.appLoading(false);
              this.goMortgageNextStep(3);
               this.$nuxt.$emit('submit_second_mortgage_form',false);
              //  this.$refs.profileform.resetValidation();
              // this.goNextFormStep('profiling');
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
          this.$store.commit("mortgage/GO_TO_STEP", 2);
          // this.$store.commit("profile/GO_TO_STEP", 1);
    },
    mounted(){

      this.$nuxt.$on('submit_second_mortgage_form',(param)=>{
        if(param.status){
            if(this.$refs.personal_second){
                this.submitSecondProfileForm();
            }
            this.next_form_step = param.next;

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
