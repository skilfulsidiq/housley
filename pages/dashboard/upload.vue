<template>
    <div>
      <breadcrumb page="My Documents">
            <template v-slot:right>

            </template>
        </breadcrumb>
           <v-container>
              <v-card elevation="0" class="mt-1">
                        <v-card-title>
                            <h5 class="upload">Documents Upload</h5>
                        </v-card-title>
                        <v-card-subtitle>
                            <p class="upload-subtitle">Upload the following documents for speedy processing of submitted application</p>
                        </v-card-subtitle>
                        <v-card-text>
                            <div class="table-wrapper">
                            <v-row class="mb-3">
                              <v-col class="col-12" md="4">
                                <!-- <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                                outlined
                                dense
                            ></v-text-field> -->
                              </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-simple-table>
                                <template v-slot:default>
                                  <thead class="green lighten-5">
                                    <tr>
                                      <th class="text-left">
                                        s/n
                                      </th>
                                      <th class="text-left">
                                        Document
                                      </th>
                                      <th class="text-left">
                                        Status
                                      </th>
                                      <th class="text-left">
                                        Action
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr
                                      v-for="(item,i) in document"
                                      :key="item.id"
                                    >
                                       <td>{{i+1}}</td>
                                      <td>{{ item.doc_name}}   <span v-show="loading && active_file.id==item.id">uploading...</span></td>
                                      <td>
                                        <v-chip :style="{color: item.is_uploaded==1?'green':'red'}"
                                            class="ma-2"
                                            :color="item.is_uploaded==1?'green lighten-4':'red lighten-5'"
                                            >
                                            {{item.is_uploaded==1?'Uploaded':'Pending'}}
                                        </v-chip>

                                      </td>
                                      <td>
                                        <v-file-input style="display:none" :id="item.id.toString()"
                                            :rules="[rules.file]" @change="addFile"
                                            accept="image/png, image/jpeg, pdf"
                                            label="File input"
                                          ></v-file-input>
                                         <!-- <v-btn icon v-if="item.is_uploaded==1" @click="triggerUpload(item)"> <v-icon>mdi-pencil</v-icon></v-btn> -->
                                         <!-- <span class="text-truncate" v-if="">{{current_file_name}}</span> -->
                                          <v-btn icon  v-if="item.is_uploaded !=1" @click="triggerUpload(item)"> <v-icon color="green">mdi-cloud-upload-outline</v-icon></v-btn>
                                          <v-btn v-if="item.is_uploaded ==1" icon @click="removeFile(item)"> <v-icon color="red"> mdi-close-circle</v-icon></v-btn>
                                      </td>
                                    </tr>
                                  </tbody>
                                </template>
                              </v-simple-table>
                            </div>
                        </v-card-text>
            </v-card>
           </v-container>
    </div>
</template>

<script>
import general_mixin from '@/mixins/general_mixin'
import file_upload_mixin from '@/mixins/file_upload_mixin'
import form_mixin from '@/mixins/form_mixin'
import FormBottom from '@/components/navigation/FormBottom.vue'
import BottomNavigation from '@/components/navigation/BottomNavigation.vue'
import ActionButton from '@/components/ActionButton.vue'
      export default {
        name:"Upload",
        layout:'dashboard',
        components: { FormBottom,BottomNavigation,ActionButton},
        mixins:[general_mixin,form_mixin,file_upload_mixin],
        data(){
            return{
                search: '',
                show:false,
                current_file_name:'',
                apploading:false,
                form:{
                  filename:'',
                  filename_id:'',
                  is_uploaded:0,
                  resource_type:'',
                  id:''
                },
                active_file:''

            }
        },
          computed:{
            document(){
               let d = this.$store.state.dashboard.document_list;
        return d;
            }
          },
          methods:{
            triggerUpload(item){
              this.active_file =item;
              let f = document.getElementById(item.id);
              f.click();

            },
            mapUploadResultToForm(cloud){
              this.form.filename = cloud.secure_url;
              this.form.filename_id = cloud.public_id;
              this.form.resource_type = cloud.resource_type;
              this.form.is_uploaded=1;
              this.form.id = this.active_file.id
            },
            addFile(file){
              this.current_file_name=file.name
              if(file.size > 1000000){
                this.$apptoast.error('file size should be less than 1 MB!')
                return ;
              }
              this.appLoading(true);
               console.log(file);

               let cloudname ='profiling_documents/'+ this.form.doc_value+'_'+this.form.user_id;
               this.uploadFileToCloudinary(file,cloudname).then((res)=>{
                 console.log(res);
                 this.mapUploadResultToForm(res);
                 this.$store.dispatch("dashboard/uploadDocumentAction",this.form).then(res=>{
                     this.appLoading(false);
                 })

               }).catch(err=>{
                 console.log(err);
                  this.appLoading(false);
               })
            },
            removeFile(item){
                this.form.is_uploaded=0;
                this.form.id = item.id;
                this.form.filename_id = item.filename_id
                this.form.filename = item.filename
                let ids = [];
                  ids.push(item.filename_id);
                // this.deleteFilesFromCloudinary(item.filename_id).then((res)=>{
                //  console.log(res);
                 this.$store.dispatch("dashboard/uploadDocumentAction",this.form).then(res=>{
                    //  this.appLoading(false);
                 }).catch(err=>{
                 console.log(err);
                  // this.appLoading(false);
               })

              //  }).catch(err=>{
              //    console.log(err);
              //     this.appLoading(false);
              //  })

            }
          }

    }
</script>

<style lang="scss" scoped>

</style>
