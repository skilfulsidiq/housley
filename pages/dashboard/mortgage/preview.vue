<template>
  <div>
      <preview-layout/>
      <v-form ref="agree" class="mt-5">
        <v-row>
            <v-col class="col-12" md="12">
                <div class="mg-top">
                      <v-checkbox  v-model="form.agree_to_terms" :rules="[rules.required]">
                            <template v-slot:label>
                              <div>
                                  I   <span class="text-bold">{{user.firstname}} {{user.lastname}}</span>
                                <v-tooltip bottom>
                                  <template >


                                  </template>

                                </v-tooltip>
                              <span ref="terms"> declare that the information provided above is Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequuntur saepe doloribus maxime, esse, porro dolorem vitae officiis repudiandae voluptatum sapiente corporis. Fugiat ipsa nesciunt.</span>
                              </div>
                            </template>
                          </v-checkbox>
                      <!-- <v-checkbox

                      color="red"

                      hide-details
                      >
                      </v-checkbox> -->
                      <!-- <p ref="terms" id="checkbox">

                        </p> -->
                </div>
            </v-col>
        </v-row>

      </v-form>
  </div>
</template>

<script>
import PreviewLayout from '@/components/dashboard/mortgage/PreviewLayout.vue'
import general_mixin from '@/mixins/general_mixin'
  export default {
  components: { PreviewLayout },
  mixins:[general_mixin],
  layout:'mortgage',
  data(){
    return{
      form:{
        agree_to_terms:''
      }
    }
  },
    methods:{
      submitMortgageForm(){
        console.log('submitted')
        if(!this.$refs.agree.validate()){
          let p = this.$refs.terms;
          p.classList.add('.error')
          return ;
        }
        this.appLoading(true);
       this.$store.dispatch("mortgage/applyAgreeToMortgageAction",this.form).then((res)=>{
          this.appLoading(false);
          this.$router.replace('/dashboard/upload')
       }).catch(err=>{
         console.log(err.response)
          this.appLoading(false);
       });
      },


    },
    created(){
        this.$store.commit("mortgage/GO_TO_STEP", 5);

    },
    mounted(){

      this.$nuxt.$on('submit_preview_mortgage_form',(param)=>{
        if(param.status){
          this.submitMortgageForm();
        }
      })

    },
  }
</script>

<style lang="scss" scoped>
  .error{
    color:red;
  }
  .text-bold{
    font-weight: 500;
  }
</style>
