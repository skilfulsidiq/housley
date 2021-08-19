<template>
    <div>
        <!-- <div class="wrap">
            <v-icon @click="print">mdi-close</v-icon>
            <div class="content">
               <div class="top-flex-box">
            <div class="top-corner-text">PERSONAL INFORMATION</div>
            <div class="top-corner-text">Edit</div>
           </div>
           <div class="wrapper">
               <v-row>
                   <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">TITLE</div>
                           <div class="fill">n/a</div>
                       </div>
                   </v-col>
                    <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">FIRST NAME</div>
                           <div class="fill">Alexandra</div>
                       </div>
                   </v-col>
                   <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">LAST NAME</div>
                           <div class="fill">Spears</div>
                       </div>
                   </v-col>
                    <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">MIDDLE NAME</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                   <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">EMAIL</div>
                           <div class="fill">osodiq@gmail.com</div>
                       </div>
                   </v-col>
                   <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">PHONE NUMBER</div>
                           <div class="fill">08060180925 </div>
                       </div>
                   </v-col>
                    <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">DATE OF BIRTH</div>
                           <div class="fill">1993/12/10 </div>
                       </div>
                   </v-col>
                    <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">ADDRESS</div>
                           <div class="fill">Lagos</div>
                       </div>
                   </v-col>
                    <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">STATE OF ORIGIN</div>
                           <div class="fill">Enugu</div>
                       </div>
                   </v-col>
                   <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">HIGHEST EDUCATION</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">DATE OF BIRTH</div>
                           <div class="fill">1993/12/10</div>
                       </div>
                   </v-col>
                   <v-col class="col-12" md="12"><v-divider></v-divider> </v-col>
                   <v-col class="col-12" md="12">
                       <div class="top-flex-box">
                        <div class="top-corner-text">OTHER PERSONAL INFORMATION</div>
                    </div>
                   </v-col>
                   <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">CURRENT HOME TYPE</div>
                           <div class="fill">current_apartment_status <br> Owned</div>
                       </div>
                   </v-col>
                   <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">OTHERS</div>
                           <div class="fill">n/a</div>
                       </div>
                   </v-col>
                   <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">ANNUAL RENT</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">MARITAL STATUS</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">SPOUSE’S NAME</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">SPOUSE’S PROFESSION</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">SPOUSE’S EMPLOYER</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                     <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">YEARS EMPLOYED</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">NEXT-OF-KIN’S NAME</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">NEXT-OF-KIN’S RELATIONSHIP</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">NEXT-OF-KIN’S PHONE</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">NEXT-OF-KIN ADDRESS</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">PROFESSION OF SPOUSE</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                     <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">SPOUSE'S ANNUAL INCOME</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                   <v-col class="col-12" md="12">
                       <div class="dependent-box">
                           <div class="dependent-text">CHILDREN/OTHER DEPENDENTS</div>
                           <div class="text-box">
                           <v-row>
                               <v-col class="col-6" md="4">
                                <div class="input-text-box">
                                <div class="label">NAME</div>
                                <div class="fill">N/A</div>
                                </div>
                               </v-col>
                               <v-col class="col-6" md="4">
                                <div class="input-text-box">
                                <div class="label">AGE</div>
                                <div class="fill">N/A</div>
                                </div>
                               </v-col>
                               <v-col class="col-6" md="4">
                                <div class="input-text-box">
                                <div class="label">RELATIONSHIP</div>
                                <div class="fill">N/A</div>
                                </div>
                               </v-col>
                           </v-row>
                           </div>
                       </div>
                   </v-col>
                   <v-col class="col-12" md="12"><v-divider></v-divider> </v-col>
                   <v-col class="col-12" md="12">
                       <div class="top-flex-box">
                            <div class="top-corner-text">EMPLOYMENT INFORMATION</div>
                            <div class="top-corner-text">Edit</div>
                        </div>
                   </v-col>
                   <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">COMPANY NAME</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                   <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">COMPANY EMAIL ADDRESS</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                   <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">EMPLOYER PHONE NO</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-12" md="3">
                       <div class="input-text-box">
                           <div class="label">ADDRESS OF EMPLOYER</div>
                           <div class="fill">Molestiae natus beat</div>
                       </div>
                   </v-col>
               </v-row>
           </div> 
            </div>
        </div> -->
    <v-dialog
      v-model="dialog"
      persistent
      max-width="100%"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
     <div class="wrap">
            <v-icon @click="print">mdi-close</v-icon>
            <div class="content">
               <div class="top-flex-box">
            <div class="top-corner-text">PERSONAL INFORMATION</div>
            <div class="top-corner-text">Edit</div>
           </div>
           <div class="wrapper">
               <v-row>
                   <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">TITLE</div>
                           <div class="fill">n/a</div>
                       </div>
                   </v-col>
                    <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">FIRST NAME</div>
                           <div class="fill">Alexandra</div>
                       </div>
                   </v-col>
                   <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">LAST NAME</div>
                           <div class="fill">Spears</div>
                       </div>
                   </v-col>
                    <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">MIDDLE NAME</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                   <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">EMAIL</div>
                           <div class="fill">osodiq@gmail.com</div>
                       </div>
                   </v-col>
                   <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">PHONE NUMBER</div>
                           <div class="fill">08060180925 </div>
                       </div>
                   </v-col>
                    <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">DATE OF BIRTH</div>
                           <div class="fill">1993/12/10 </div>
                       </div>
                   </v-col>
                    <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">ADDRESS</div>
                           <div class="fill">Lagos</div>
                       </div>
                   </v-col>
                    <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">STATE OF ORIGIN</div>
                           <div class="fill">Enugu</div>
                       </div>
                   </v-col>
                   <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">HIGHEST EDUCATION</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">DATE OF BIRTH</div>
                           <div class="fill">1993/12/10</div>
                       </div>
                   </v-col>
                   <v-col class="col-12" md="12"><v-divider></v-divider> </v-col>
                   <v-col class="col-12" md="12">
                       <div class="top-flex-box">
                        <div class="top-corner-text">OTHER PERSONAL INFORMATION</div>
                    </div>
                   </v-col>
                   <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">CURRENT HOME TYPE</div>
                           <div class="fill">current_apartment_status <br> Owned</div>
                       </div>
                   </v-col>
                   <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">OTHERS</div>
                           <div class="fill">n/a</div>
                       </div>
                   </v-col>
                   <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">ANNUAL RENT</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">MARITAL STATUS</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">SPOUSE’S NAME</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">SPOUSE’S PROFESSION</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">SPOUSE’S EMPLOYER</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                     <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">YEARS EMPLOYED</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">NEXT-OF-KIN’S NAME</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">NEXT-OF-KIN’S RELATIONSHIP</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">NEXT-OF-KIN’S PHONE</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">NEXT-OF-KIN ADDRESS</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">PROFESSION OF SPOUSE</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                     <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">SPOUSE'S ANNUAL INCOME</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                   <v-col class="col-12" md="12">
                       <div class="dependent-box">
                           <div class="dependent-text">CHILDREN/OTHER DEPENDENTS</div>
                           <div class="text-box">
                           <v-row>
                               <v-col class="col-6" md="4">
                                <div class="input-text-box">
                                <div class="label">NAME</div>
                                <div class="fill">N/A</div>
                                </div>
                               </v-col>
                               <v-col class="col-6" md="4">
                                <div class="input-text-box">
                                <div class="label">AGE</div>
                                <div class="fill">N/A</div>
                                </div>
                               </v-col>
                               <v-col class="col-6" md="4">
                                <div class="input-text-box">
                                <div class="label">RELATIONSHIP</div>
                                <div class="fill">N/A</div>
                                </div>
                               </v-col>
                           </v-row>
                           </div>
                       </div>
                   </v-col>
                   <v-col class="col-12" md="12"><v-divider></v-divider> </v-col>
                   <v-col class="col-12" md="12">
                       <div class="top-flex-box">
                            <div class="top-corner-text">EMPLOYMENT INFORMATION</div>
                            <div class="top-corner-text">Edit</div>
                        </div>
                   </v-col>
                   <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">COMPANY NAME</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                   <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">COMPANY EMAIL ADDRESS</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                   <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">EMPLOYER PHONE NO</div>
                           <div class="fill"></div>
                       </div>
                   </v-col>
                    <v-col class="col-3" md="3">
                       <div class="input-text-box">
                           <div class="label">ADDRESS OF EMPLOYER</div>
                           <div class="fill">Molestiae natus beat</div>
                       </div>
                   </v-col>
               </v-row>
           </div> 
            </div>
        </div>
    </v-dialog>
    </div>
</template>

<script>
    export default {
        name:'application',
        data(){return{
            dialog:'',

        }},
        methods:{
            print(){
                window.print();
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap{
    position: relative;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
}
.content{
    width: 85%;
    margin: 2rem auto;
}
.wrapper{
    width: 100%;
    overflow: hidden;
    min-height: auto;
    margin-right: auto;
}
.v-icon{
    width: 17px;
    cursor: pointer;
    margin:1rem;
}

.top-flex-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.top-corner-text{
    color: #039c71;
    padding-bottom: 1rem;
    margin-top: 1rem;
    font-weight: 500;
    font-size: 0.875rem;
}
.label{
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: .5rem;
    font-size: 0.875rem;
}
.fill{
    color: #666;
    font-size: 0.875rem;
}
.dependent-text{
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: .5rem;
    font-size: 0.875rem;
}
.text-box{
    border: 1px solid #039c71;
    padding: .3rem 1rem;
    border-radius: 6px;
    margin-bottom: 2rem;
}




@media(max-width: 500px){
       .col-3 {
    flex: 0 0 25%;
    width: 100%;
    flex-basis: 50%;
}
}
</style>