<template>
    <div class="">
      <v-row justify="start" no-gutters>
        <v-col class="col-12" md="12">
        <div class="document-upload">
            <v-row>
              <v-col class="col-12" md="12">
              <h2 class="document-text">Documents Upload</h2>
              </v-col>
              <v-col class="col-12" md="12">
              <div class="progress-box">
                <div class="p-box">
                    <v-progress-circular
                    size="50"
                    :value="chart_value"
                    :width="9"
                    :color="chart_color"
                    ></v-progress-circular>

                    <div class="progress-text"><span class="mr-1 text-bold"> {{document_count.total_uploaded}} </span> out of <span
                    class="mx-1 text-bold"> {{document_count.total_doc}}</span> <span> Documents Uploaded</span></div>
                </div>
                  <nuxt-link to="/dashboard/upload"><v-btn depressed dark outlined color="#039C71">Upload</v-btn></nuxt-link>
              </div>
              </v-col>
            </v-row>
        </div>
        </v-col>
        </v-row>


    </div>
</template>

<script>
    export default {
        name:"document",
    data: () => ({
      length: 3,
      onboarding: 0,
    }),
    computed:{
      document_count(){
        let d = this.$store.state.dashboard.document_count;
        return d;
      },
      chart_color(){
        if(this.document_count.total_uploaded==this.document_count.total_doc){
          return 'green';
        }
        return 'orange'
        // document_count.total_uploaded==document_count.total_doc?#5FB49C"
      },
      chart_value(){
        let c = Number(this.document_count.total_uploaded/this.document_count.total_doc);

          return parseInt(c*100);
      }
    },

    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
    },
    }
</script>

<style lang="scss" scoped>

.document-upload{
    height:130px;
    width:100%;
    border-radius: 8px;
    background: #fff;
    padding:1rem;
}
.document-text{
    color: #039C71;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 1rem;
}
 .document-text.property{
        margin-left:0.75rem;
    }
.text-bold{
  font-weight: bold;
}
.progress-box{
    display: flex;
    align-items:center;
    justify-content:space-between;
    width: 100%;
    margin-left: auto;
    margin-top: -1.5rem;
}
.p-box{
  display: flex;
}
.progress-text{
  display: flex;
  align-items: center;
  margin-left:0.4rem;
}


.upload-btn{
    color: green;
    margin-top: -1.6rem;
    height: 40px!important;
}

@media(max-width:900px){
  .progress-box{
    flex-direction: column;
    align-items: center;
      width: 100%;
  }
  .document-upload{
    height:150px;
    width:100%;
    border-radius: 8px;
    background: #fff;
    padding:1rem;
}

  
}
</style>
