<template>
  <div>
    <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Change Password
                </h5>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-6 col-xs-12">
            <label class="form_one_label custom-field one">
                <input
                class="form_one_input"
                type="text"
                placeholder=" "
                v-model="form.old_password"
                />
                <span class="placeholder2">Current Password <required-input/></span>
                <div v-if="submitted && !$v.form.old_password.required" class="error">
                  <small class="error-message">Current password is required</small>
                </div>
            </label>
            <label class="form_one_label custom-field one">
                <input
                class="form_one_input"
                type="password"
                placeholder=" "
                v-model="form.password"
                />
                <span class="placeholder2">New Password <required-input/></span>
                <div v-if="submitted && !$v.form.password.required" class="error">
                  <small class="error-message">New password is required</small>
                </div>
            </label>
            <label class="form_one_label custom-field one">
                <input
                class="form_one_input"
                type="password"
                placeholder=" "
                v-model="form.confirm"
                />
                <span class="placeholder2">Confirm Password <required-input/></span>
                <div v-if="submitted && !$v.form.confirm.sameAsPassword" class="error">
                  <small class="error-message">Password must not matched</small>
                </div>
            </label>

             <div class="text-center mt-3">
               <app-button type="buton" text="Submit" btnclass="button_" :loading="false" :action="changePassword" other_class="cursor"/>
             </div>
        </div>
      </div>
  </div>
</template>

<script>
import { required, sameAs} from "vuelidate/lib/validators";
import AppButton from '@/components/AppButton.vue';
  export default {
  components: { AppButton },
    layout:'dashboard',
    data(){
      return{
        submitted:false,
        form:{
          old_password:'',
          password:'',
          confirm:''
        }
      }
    },
    validattions:{
      form:{
        old_password:{required},
        password:{required},
        confirm:{sameAsPassword: sameAs('password')},
      }
    },
    methods:{
      changePassword(){
          this.submitted=true
         this.$v.$touch();
        if (this.$v.$invalid) {
              return;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
