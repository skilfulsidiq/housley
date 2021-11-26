<template>
  <div>
            <div class="content_body">
                <!-- <h3 class="app_head">Mortgage Documents</h3>
                <p class="app_para">
                  Check the following documents for speedy processing of submitted
                  application
                </p> -->
                      <div class="table_cover">
                          <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">s/n</th>
                                <th scope="col">Document Type</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(done,i) in checklist" :key="done.id">
                                <td>{{i+1}}</td>
                                <td>{{done.name}}</td>
                                <td class="td-text">
                                    <!-- <div v-for="(d,i) in userCheckList" :key="i">
                                        <div class="d-flex" v-if="d.id==done.id" >
                                              <div class="yesno">No</div>
                                                <label class="switch">
                                                <input type="checkbox" v-model="form.checklist" :value="done" checked>
                                                <span class="slider round"></span>
                                              </label>
                                            <div class="yesno">Yes</div>
                                        </div> -->
                                        <div class="d-flex"  >
                                              <div class="yesno">No</div>
                                                <label class="switch">
                                                <input type="checkbox" v-model="form.checklist" :value="done" >
                                                <span class="slider round"></span>
                                              </label>
                                            <div class="yesno">Yes</div>
                                        </div>
                                    <!-- </div> -->

                                </td>

                              </tr>


                            </tbody>
                          </table>
                        </div>

                        <!-- mobile table -->
                        <div class="res_table_cover" v-for="done in checklist" :key="done.id">
                          <div class="res_table">
                            <!-- 1 -->
                            <div class="">
                              <span class="res_table_label">Document type</span>
                              <h6 class="res_table_data">{{done.name}}</h6>
                            </div>
                            <!-- 4 -->
                            <div class="res_table_">

                              <span class="res_table_label">Action</span>
                              <div class="action_cover res_info">
                                <div class="d-flex">
                                      <div class="yesno">No</div>
                                  <label class="switch">
                                      <input type="checkbox" v-model="form.checklist" :value="done">
                                      <span class="slider round"></span>
                                    </label>
                                    <div class="yesno">Yes</div>
                                    </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- <div class="d-flex justify-content-center mt-4">
                            <app-button type="buton" text="Submit" btnclass="button_" :loading="false" :action="submit" other_class="cursor"/>
                        </div> -->
            </div>


      <!-- </div> -->
  </div>
</template>

<script>
import general_mixin from '@/mixins/general_mixin'
import {optional} from '@/mixins/general_mixin'
  import {rules} from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
import mortgage_mixin from '@/mixins/mortgage_mixin'
import store_mixin from '@/mixins/store_mixin'
  export default {
     mixins:[general_mixin,form_mixin,mortgage_mixin,store_mixin],

      data(){
      return{
          application_data:'',
          form:{
            checklist:[],
            pending_list:[],
            type:'mortgage'

          }
      }
    },
     computed:{
      checklist(){
        return this.$store.state.general.mortgage_checklist;
      },
      mortgage_detail(){
        return this.$store.state.mortgage.details
      }
    },
    methods:{

        checkForPendingList(){
        let difference = this.form.checklist
                 .filter(x => !this.checklist.includes(x))
                 .concat(this.checklist.filter(x => !this.form.checklist.includes(x)));
                 console.log("diff:::",difference);
      },
      submit(){
        // this.submitted=true
        // this.$v.touch();
        this.form.pending_list = this.checkForPendingList();
        // return;
        if(this.form.checklist.length <=0){
          this.$apptoast.error("Check the available documents")
          return;
        }
        //  let isForEdit = this.$store.state.profile.toggle_edit;
        this.$store.dispatch("mortgage/completeMortgageAction",this.form).then((res)=>{

          this.$store.dispatch("profile/getProfileAction");
           this.moveToMortgageNextStep(5);
          // this.$router.push({name:'dashboard'});
        }).catch((err)=>{

        })

      }
    },
    created(){
      this.$nuxt.$on("submit_checklist",(details)=>{
        if(details){
          this.submit();
        }

      });
      //  this.modal = new bootstrap.Modal(document.getElementById('detailModal'))
    },
    mounted(){
      //  let checklist = this.$store.state.mortgage.mortgage_checklist_param;
       let c = this.$store.state.auth.user.checklist;
      // this.form.type=checklist.type;
      if(c!=null){
         this.form.checklist=c
      }

    }
  }
</script>

<style lang="scss" scoped>

.content_body {
  padding:20px 0;
}
@media (max-width:900px){
  .content_body{
     padding:20px 10px;
  }
  .res_table_cover {
    padding: 0px 4px;
    margin-top: 10px;
}
}
.table_cover{
  padding:0 0;
}
//Switch Style

.yesno{
  margin:auto 10px;
}


</style>
