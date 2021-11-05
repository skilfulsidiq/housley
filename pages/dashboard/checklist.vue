<template>
  <div>
       <div class="content_body">
          <h3 class="app_head">Mortgage Documents</h3>
          <p class="app_para">
            Check the following documents for speedy processing of submitted
            application
          </p>
        </div>

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
                   <label class="switch">
                      <input type="checkbox" v-model="form.checklist" :value="done">
                      <span class="slider round"></span>
                    </label>
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
                  <label class="switch">
                      <input type="checkbox" v-model="form.checklist" :value="done">
                      <span class="slider round"></span>
                    </label>
              </div>
            </div>
          </div>
        </div>
         <div class="d-flex justify-content-center mt-4">
             <app-button type="buton" text="Submit" btnclass="button_" :loading="false" :action="submit" other_class="cursor"/>
        </div>



  </div>
</template>

<script>
import { required, email,minLength,requiredIf,numeric} from "vuelidate/lib/validators";
import {optional} from '@/mixins/general_mixin'
  export default {
   layout:"dashboard",
    head(){
      return{
        title:'Document'
      }
    },
    data(){
      return{
          application_data:'',
          form:{
            checklist:[],
            pending_list:[],
            type:''

          }
      }
    },
    validations:{
      form:{

        checklist:{required},
        pending_list:{optional},
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
        this.$store.dispatch("mortgage/completeMortgageAction",this.form).then((res)=>{
                this.$router.push({name:'dashboard'});
        }).catch((err)=>{

        })

      }
    },
    mounted(){
      this.$nuxt.$on("mortgage_slug",(param)=>{
        // this.application_data = param;
        console.log("param:",param.type);
        this.form.checklist = param.list
        this.form.type = param.type
      })
    }
  }
</script>

<style lang="scss" scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #0554fb;
}

input:focus + .slider {
  box-shadow: 0 0 1px #0554fb;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>
