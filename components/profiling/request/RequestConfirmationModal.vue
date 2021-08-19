<template>
  <div>
         <v-row justify="center">
          <v-dialog :fullscreen="$vuetify.breakpoint.smAndDown?true:false"
            v-model="rquestContinueModal"
            persistent
            max-width="650px"
          >

            <v-card class="pad-card">
              <div class="modal-title text-center">
                  <h2 class="headline" >Hmmm! You have not selected any property</h2>


                <p class="modal-p">we are excited you made it this far, however just a few step to your dream home... You need to choose a property from the options we provided or request a property if you didnt find your preferred</p>
              </div>

              <v-card-text>
                <!-- <RequestForm :prefill="true" :selectedProperty="selectedProperty" /> -->
                  <v-row >
                <v-col cols="12" md="6">
                    <action-button :outlined="true" text="Not Sure Yet, Go back" type="button" height="50" width="100%"
                    :action="modalBack"/>

                </v-col>
                <v-col cols="12" md="6">
                     <action-button :outlined="false" text="Request Property" type="button" height="50" width="100%" :action="goRequestForm" />
                </v-col>
            </v-row>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-row>
  </div>
</template>

<script>
  export default {
      data(){
        return{
          rquestContinueModal:false
        }
      },
      methods:{
        modalBack(){
          this.rquestContinueModal= false
        },
        goRequestForm(){
          this.rquestContinueModal= false;
          // let d = {status:false,property:'',prefill:false}
          // this.$nuxt.$on("selected_property",d);
          this.$nuxt.$emit("open_request_form",true)

            // this.$router.push({name:'PropertyRequestForm'})

        },
      },
      created(){
        this.$nuxt.$on("request_confirmation_modal",(v)=>{
          this.rquestContinueModal =v;
        })
      }
  }
</script>

<style lang="scss" scoped>

</style>
