<template>
    <div>
        <v-row justify="center">
        <v-dialog
        v-model="showModal"
        transition="dialog-top-transition"
        :max-width="width"
        :scrollable="false"
        :fullscreen=fullscreen
        >

        <v-card :style="{padding:pad}">
            <div class="dotted">
                <v-card-title class="headline text-center">
                {{title}}
                <v-spacer></v-spacer>
               <v-icon class="cursor" @click="closeModal()">mdi-close</v-icon>
            </v-card-title>
            <v-card-text class="card-body">
                <slot name="content"></slot>
            </v-card-text>
            </div>

            <!-- <v-card-action>
                <slot name="action"></slot>
            </v-card-action> -->
        </v-card>
        </v-dialog>
  </v-row>
    </div>
</template>
<script>
export default {
    name:"Modal",
    props:{
        width:{default:600},
        title:{type:String, required:true},
        name:{type:String, required:true},
        pad:{type:String,default:'30px'},
        fullscreen:{type:Boolean,default:false}
    },
    data(){return{
        showModal:false
    }},
    methods:{
        closeModal(){
            this.showModal=false;
        }
    },
    created(){
        // console.log(this.name);
        this.$nuxt.$on(this.name,(v)=>{
            this.showModal = v;
        })
    }
}
</script>
<style lang="scss" >
.v-dialog--scrollable {
    -webkit-backface-visibility:hidden;
    backface-visibility: hidden;
    flex: 1 1 auto;
    overflow-y: hidden;
}
/* .v-dialog--scrollable > .v-card > .v-card__text, .v-dialog--scrollable > form > .v-card > .v-card__text {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    flex: 1 1 auto;
    overflow-y: hidden;
} */
 .dialog-is-open{
      overflow-x: hidden;
      overflow: hidden;
      height: 100vh;
    overflow-y: hidden;
      /* overflow-y: hidden !important; */
    }
    .v-dialog::-webkit-scrollbar{
        width:1px;
    }
    // v-card{
    //     padding:30px !important;
    // }

    .v-card__text {
        // padding:30px !important;

    }
</style>
