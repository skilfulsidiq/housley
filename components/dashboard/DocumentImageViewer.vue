<template>
  <div>
      <div class="modal fade" id="documentviewer" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <!-- <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div> -->
              <div v-if="file_details.type !='pdf'" class="modal-body image" :style="{ backgroundImage: 'url('+file_details.file+ ')'}">
                 <button type="button" class="btn-close btn-danger float-end " data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div  v-if="file_details.type=='pdf'" class="modal-body">
                <!-- <h1></h1> -->
              </div>

            </div>
          </div>
        </div>

  </div>
</template>

<script>
  export default {
    // components:{pdf},
    data(){
      return{
        sample_pdf:"https://arkokoley.github.io/pdfvuer/",
        file_details:''
      }
    },
    methods:{
        showModal(){
          $("#documentviewer").modal("show")
      },
      closeModal(){
        $("#documentviewer").modal("hide")
      },

      },
      created(){
        this.$nuxt.$on("view_document",(param)=>{
               if(param.status){
                 this.file_details = param.details
              this.showModal();

            }else{
              this.closeModal();
            }
        })


      },

  }
</script>

<style lang="scss" scoped>
.modal-body {
    width: 100%;
    max-width: 100% !important;
    /* margin: 0 auto; */
}
.image{
    height:20rem;
    width: 100%;
    // background: url(https://cdn.vuetifyjs.com/images/cards/cooking.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    // border-radius: 20px;
    // border-top-right-radius:18px;
    // border-top-left-radius: 18px;
}
</style>
