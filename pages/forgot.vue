<template>
  <div>
            <h1>Forgot Password</h1>
           <div class="form-container">
            <form>
                 <div class="form-group" v-if="!show_change_password_form">
                      <span><img class="email" src='/img/login/email.svg' ></span>
                    <input  type='email' placeholder="Email address" id="email" v-model="forgot_form.email" :class="{'is-invalid': submitted && $v.forgot_form.email.$error }">
                      <div v-if="submitted && !$v.forgot_form.email.required" class="form-error">Email is required</div>
                      <div v-if="submitted && !$v.forgot_form.email.email" class="form-error">valid Email is required</div>

                      <button type="button" class="app-btn" @click="forgotPassword">
                         <span v-if="!loading">Reset Password</span>
                          <span v-if="loading">Loading....</span>
                      </button>
                  </div>

                  <div v-if="show_change_password_form">
                    <div class="form-group">
                      <span><img class="email" src='/img/login/email.svg' ></span>
                      <input  type='email' disabled placeholder="Email address" id="email" v-model="change_password_form.email">
                    </div>
                    <div class="form-group">
                      <span><img class="email" src='/img/login/email.svg' ></span>
                      <input  type='number' placeholder="Code" id="email" v-model="change_password_form.code" :class="{'is-invalid': submitted && $v.change_password_form.code.$error }">
                      <div v-if="submitted && !$v.change_password_form.code.required" class="form-error">Code is required</div>
                    </div>
                    <div class="form-group password-up">
                      <span><img class="lock form-icon" src='/img/login/lock.svg' ></span>
                      <input type='password' placeholder="New Password" id="email" v-model="change_password_form.password" :class="{'is-invalid': submitted && $v.change_password_form.password.$error }"/>

                      <div v-if="submitted && !$v.change_password_form.password.required" class="form-error">Password is required</div>
                    </div>

                    <button type="button" class="app-btn" @click.prevent="changePassword">
                      <span v-if="!loading">Change Password</span>
                      <span v-if="loading">Loading....</span>
                    </button>
                  </div>
                  <div class=" mt-5 space-row">
                     <div class="cursor" @click="retry">Retry</div>
                     <div class="cursor">Back to  <nuxt-link to="/login">&nbsp; Login</nuxt-link> </div>
                  </div>


                <!-- <div class="google-signon">
                    <span><img src='/img/login/google.svg' ></span>

                    <span>Continue with Google</span>
                </div> -->

            </form>
            <!-- <form action="">

            </form> -->

           </div>


  </div>
</template>

<script>
 import { required, email, minLength, sameAs,requiredIf,numeric } from "vuelidate/lib/validators";
 import general_mixin from "@/mixins/general_mixin";
 import form_mixin from "@/mixins/form_mixin";
  export default {
    layout:'auth',
    auth:'guest',
    middleware:['app_guest'],
    head(){
            return{
                link:[
                      { rel: 'stylesheet', href:"/css/custom/header-color.css"  },
                ]
            }
    },
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
            change_password_form:{
                email:'',
                code:'',
                password:''
            },
            show_change_password_form:false,

        }
    },
    validations:{
       forgot_form:{
                email:{required,email},
                // source:'back'
            },
            change_password_form:{
                email:{required,email},
                code:{required,numeric},
                password:{required},
            },
    },

    methods: {
    forgotPassword(){
          this.submitted=true
          this.$v.$touch();
          if (this.$v.forgot_form.email.invalid) {
              return;
          }

          this.appLoading(true);
        this.change_password_form.email = this.forgot_form.email;
        console.log(this.forgot_form);
        this.$store.dispatch("app/forgotPasswordAction",this.forgot_form).then((res)=>{
            console.log(res);
            this.show_change_password_form = true;
            this.$apptoast.success('An Email has been sent')
              this.appLoading(false);
        }).catch((e)=>{
              console.log(e.response.data.data)
                this.appLoading(false);
            this.show_change_password_form = false;
              this.showErrorMsg(e,'Invalid Email')
        })




    },
    changePassword(){
      this.submitted=true
        if (this.$v.change_password_form.code.invalid || this.$v.change_password_form.password.invalid || this.$v.change_password_form.email.invalid) {
              return;
          }
          this.appLoading(true);
        this.$store.dispatch('app/changePasswordByForgotAction',this.change_password_form).then((res)=>{
                  this.appLoading(false);
            this.show_change_password_form = false;
            this.forgot_form={}
            this.change_password_form={}
                this.$apptoast.success('Password changed successfully')
            this.$router.replace('/login');
        }).catch((e)=>{
              this.appLoading(false);
            this.show_change_password_form = true;
              this.showErrorMsg(e,'Error changing password,try again');
        })
    },
    retry(){
        this.show_change_password_form=false;
    },

    // changePassword(){
    //     if(!this.$refs.change_pass_form.validate()){
    //         return;
    //     }
    //       this.appLoading(true);
    //     this.$store.dispatch('app/changePasswordByForgotAction',this.change_password_form).then((res)=>{
    //               this.appLoading(false);
    //         this.show_change_password_form = false;
    //         this.forgot_form={}
    //         this.change_password_form={}
    //             this.$apptoast.success('Password changed successfully')
    //         this.$router.replace('/login');
    //     }).catch((e)=>{
    //           this.appLoading(false);
    //         this.show_change_password_form = true;
    //           let err = e.response.data.data;
    //           console.log(err);
    //           this.$apptoast.error(err)
    //     })
    // },
    // retry(){
    //     this.show_change_password_form=false;
    // }
  },
  created(){
    this.appLoading(false);
  }
  }
</script>

<style lang="scss" scoped>
.form-icon {
    position: relative !important;
    left: 1rem !important;
    top: 2.7rem !important;
}
.login-container .right .form-container form span img.lock {
  margin:0;
}
.password-up{
  margin-top:-1rem;
}
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
.space-row{
  display: flex;
  justify-content: space-between;
}
</style>
