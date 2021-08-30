<template>
  <div>
         <form ref="forgot">
                       <!-- <v-text-field label="Email" v-model="forgot_form.email"
                      class="custom-label-color"
                    :rules="[rules.required,rules.email]" outlined id="em"  prepend-inner-icon="mdi-email-outline" color="red"/> -->
                      <span><img class="email" src='/img/login/email.svg' ></span>
                    <input  type='email' placeholder="Email address" id="email" v-model="forgot_form.email" :class="{'is-invalid': submitted && $v.forgot_form.email.$error }">
                      <div v-if="submitted && !$v.forgot_form.email.required" class="form-error">Email is required</div>
                      <div v-if="submitted && !$v.forgot_form.email.email" class="form-error">valid Email is required</div>
                       <button type="button" class="app-btn" @click.prevent="forgotPassword">
                         <span v-if="!loading">Reset Password</span>
                          <span v-if="loading">Loading....</span>
                      </button>
              </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs,requiredIf,numeric } from "vuelidate/lib/validators";
 import general_mixin from "@/mixins/general_mixin";
 import form_mixin from "@/mixins/form_mixin";
  export default {
    mixins:[form_mixin,general_mixin],
    data(){
        return{

            // loading:false,
            show_pass:false,
            submitted:false,
            forgot_form:{
                email:'',
                // source:'back'
            },

        }
    },
    validations:{
       forgot_form:{
          email:{required,email},
          // source:'back'
      },

    },

    methods: {
    forgotPassword(){
          this.submitted=true
          this.$v.$touch();
          if (this.$v.invalid) {
              return;
          }
          let d = {status:true,email:this.forgot_form.email}
          this.$nuxt.$emit("forgot_is_submitted",d);

    },
  },
  created(){
  }
}
</script>

<style lang="scss" scoped>
.app-btn{
  background-color: #006633;
    color: #fff;
    text-align: center;
    padding: 10px 0 10px 0px ;
    border: 0px;
    border-radius: 7px;
    width: 100%;
    height:60px;
}
.app-btn:hover{
  background-color: #F49800;
}
</style>
