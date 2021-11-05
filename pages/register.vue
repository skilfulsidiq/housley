<template>
  <div>
            <h1>Signup</h1>
           <div class="form-container">
            <form @submit.prevent="register">
              <div>
                <span><img class="email" src='/img/login/user2.svg' ></span>
                <input required type='text' placeholder="First name" v-model="form.firstname" id="email" >
                 <div v-if="submitted && !$v.form.firstname.required" class="form-error">Firstname is required</div>
              </div>
              <div>
                <span><img class="email" src='/img/login/user2.svg' ></span>
                <input required type='text' placeholder="Last name" v-model="form.lastname" id="email" >
                 <div v-if="submitted && !$v.form.lastname.required" class="form-error">Lastname is required</div>
              </div>
              <div>
                <span><img class="email" src='/img/login/email.svg' ></span>
                <input required type='email' placeholder="Email address" v-model="form.email" id="email" >
                 <div v-if="submitted && !$v.form.email.required" class="form-error">email is required</div>
                 <div v-if="submitted && !$v.form.email.email" class="form-error">Valid email is required</div>
              </div>


                <div>
                  <span><img class="email" src='/img/login/lock.svg' ></span>
                <input required type='password' placeholder="Password" v-model="form.password">

                 <div v-if="submitted && !$v.form.password.required" class="form-error">password is required</div>
                 <div v-if="submitted && !$v.form.password.minLength" class="form-error">Password must have at least 6 characters</div>
                </div>

               <div>
                  <span><img class="email" src='/img/login/lock.svg' ></span>
                <input required type='password' placeholder="Confirm Password"  v-model="form.confirm_password">
                 <div v-if="submitted && !$v.form.password.sameAsPassword" class="form-error">Password must be identical</div>
               </div>





                <!-- <div class="forgot-password"><span>This must be corrected with the password</span></div> -->

                <input type='submit'  value="Signup">
                <div class="signup">Already have an account? <nuxt-link to="/login">&nbsp; Login</nuxt-link>
                   </div>
<!--
                <div class="google-signon">
                    <span><img src='/img/login/google.svg' ></span>

                    <span>Continue with Google</span>
                </div> -->

            </form>

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
    mixins:[general_mixin,form_mixin],
    middleware:['app_guest'],
    head(){
            return{
                link:[
                      { rel: 'stylesheet', href:"/css/custom/header-color.css"  },
                ]
            }
        },
        data(){
          return{
            submitted:false,
            selected_action:false,
            form:{
              firstname:'',
              lastname:"",
              email:'',
              password:'',
              confirm_password:''
            }
          }
        },
        validations: {
            form: {
                  firstname: { required},
                  lastname: { required},
                  email: { required, email },
                  password: { required,minLength:minLength(6) },
                  confirm_password:{ sameAsPassword: sameAs('password')},
            }
      },
      computed:{
          user_form(){
            return this.$store.state.calculator.form;
          }
      },
      methods:{
        async register() {
        this.submitted=true
        this.$v.$touch();
        if (this.$v.$invalid) {
              return;
        }
        // console.log("okayh dhdh")
         this.busy=true
        try{
            // this.appLoading(true);
            // if(this.selected_action){
            //     r = await this.$store.dispatch("app/registerUpdate",this.form);
            // }else{

            // }
          // await this.$store.dispatch("app/register",this.form);
          let r = await this.$store.dispatch("app/register",this.form);
          const l =  await this.$auth.loginWith('local', {
                data: {
                email: this.form.email,
                password: this.form.password
                },
              })
          if(l){
            // console.log(r)
             this.busy=false
            // this.$auth.strategy.token.set(r.token)
            // this.$auth.setUser(r.user);




            // this.$store.commit("profile/PREFILL_PERSONAL_FORM",r.user)
              this.$router.push("/")
            // this.$apptoast.success('Successfully authenticated');
          }else{
             this.busy=false
            //  this.appLoading(false);
              // this.$apptoast.error('authentication error, try again');
          }
        }catch(err){
           this.busy=false
              // this.appLoading(false);
              // console.log(err.response);
              let e = err.response.data.data;
            this.$apptoast.error(e)
        }





      },
        // async register(){
        //    this.submitted=true
        //     this.$v.$touch();
        //     if (this.$v.$invalid) {
        //           return;
        //     }
        //     let r = '';
        //       try{
        //       this.appLoading(true);
        //       if(this.selected_action){
        //         r = await this.$store.dispatch("app/registerUpdate",this.form);
        //       }else{
        //         r = await this.$store.dispatch("app/register",this.form);
        //       }

        //      if(r){
        //        console.log(r)
        //         this.appLoading(false);
        //        this.$auth.strategy.token.set(r.token)
        //        this.$auth.setUser(r.user);
        //         this.$router.replace("/verify")
        //        this.$apptoast.success('Successfully authenticated');
        //      }else{
        //        this.appLoading(false);
        //      }
        //   }catch(err){
        //         this.appLoading(false);
        //         console.log(err.response);
        //         let e = err.response.data.data;
        //       this.$apptoast.error(e)
        //   }
        // },

      },
      created(){
        this.form.email = this.user_form.email
        this.form.firstname = this.user_form.firstname
        this.form.lastname = this.user_form.lastname;

        this.$nuxt.$on("have_register_data",(param)=>{
         this.selected_action = param;
        })
      }
  }
</script>

<style lang="scss" scoped>

</style>
