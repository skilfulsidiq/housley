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
        <div class="icon-box">
            <v-progress-circular
            size="50"
            :value="80"
            :width="9"
            color="#5FB49C"
            ></v-progress-circular>
        </div>
            <div class="dropdow-box-with-text">
            <div class="text-between"><span> 10</span> out of <span>14</span> <span>Documents Uploaded</span></div>
            <!-- <v-text-field
            placeholder="10 out of 14 Docunments Uploaded"
            dense
            ></v-text-field> -->
             <nuxt-link to="/dashboard/upload"><v-btn depressed dark outlined color="#039C71">Upload</v-btn></nuxt-link>
            </div> 
        </div>
        </v-col>
        </v-row>
        </div>
        </v-col>
        </v-row>
      <v-row>
      <v-col class="col-12" md="12">
      <v-window show-arrows style="border-top-left-radius:10px;border-top-right-radius:10px;">
      <template v-slot:prev="{ on, attrs }">
      <v-btn
      color="#fff"
      style="background:#039C71;"
      v-bind="attrs"
      v-on="on"
      icon
      ><v-icon color="#fff">mdi-chevron-left</v-icon></v-btn>
      </template>
      <template v-slot:next="{ on, attrs }">
      <v-btn
      color="success"
      style="background:#039C71;"
      v-bind="attrs"
      v-on="on"
      icon
      ><v-icon color="#fff">mdi-chevron-right</v-icon> </v-btn>
      </template>
      <v-window-item
      v-for="n in 5"
      :key="`card-${n}`"
      >
      <v-card class="image"
     color="grey"
     height="200"
     >
     <v-row
     class="fill-height"
     align="center"
     justify="center"
     >
        <img src="../static/image/house.png" alt="house">
    </v-row>
    </v-card>
    </v-window-item>
    </v-window>
    </v-col>
    </v-row>
     <div class="wrapper">
        <v-row>
        <v-col class="col-12" md="12">
        <v-row justify="space-between">
        <v-col class="col-8" md="8">
        <h2 class="document-text property">Property Status</h2>
        </v-col>
        <v-col class="col-4" md="4">
        <v-btn dark depressed class="construction">Under Construction</v-btn>
        </v-col>
        <v-col class="col-12" md="12">
            <v-divider class="mb-3"></v-divider>
        </v-col>
        </v-row>
        </v-col>
        <v-col class="col-12" md="12">
        <div class="list-box" id="detached">
        <span class="mobile-view-text">5 Bedroom Detached Bungalow</span>
        <div class="right-text name">Name</div>
        </div>
      </v-col>
      <v-col class="col-12" md="12">
        <div class="list-box">
        <span class="mobile-view-text">Price</span>
        <div class="right-text" id="naira">200,000,000.00</div>
        </div>
       </v-col>
         <v-col class="col-12" md="12">
        <div class="list-box">
        <span class="mobile-view-text">Payment Type</span>
        <div class="right-text">Mortgage</div>
        </div>
        </v-col>
        <v-col class="col-12" md="12">
        <div class="list-box">
        <span class="mobile-view-text">Date of Purchase</span>
        <div class="right-text">30th October 2020</div>
        </div>
        </v-col>
      </v-row>
     </div>
    </div>
</template>

<script>
    export default {
        name:"dashboad",
        data: () => ({
      length: 3,
      onboarding: 0,
    }),

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
img{
    width:100%;
    height: auto;
}
.image{
    background: url(../static/image/house.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
}
.document-upload{
    height:115px;
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
.progress-box{
    display: flex;
    align-items:center;
    justify-content:space-around;
    width: 90%;
    margin-left: auto;
    margin-top: -1.5rem;
}
.text-between{
    color: #666666;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0em;
    // text-align: left;
    // position:absolute;
    // bottom:2.3rem;
    // left:1rem;
}
// .text-between span{
//     font-weight: bold;
// }
.dropdow-box-with-text{
    position: relative;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.icon-box{
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin-right: 1rem;
    margin-top: -0.45rem;
}
.construction{
    height: 40px!important;
    width: 100%;
    background: rgba(3, 50, 154, 0.1)!important;
    color: #03329A;
    border-radius: 8px;
    font-size: 10px!important;
    font-weight: 700;
    line-height: 15px;
    text-align:left;
    padding: 10px 17px 10px 17px;
    margin-bottom:0.25rem;

}
.list-box{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 45px;
    margin-top: -1.5rem;
    border-bottom: 1px solid hsla(0,0%,73.3%,.5568627450980392);
}
#detached{
    padding:1rem  3rem;
}
.mobile-view-text{
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    text-align:right;
    color: #666666;

}

.list-box .right-text{
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color:#666666;
    padding: 20px 19px;
    border-left: 1px solid hsla(0,0%,73.3%,.5568627450980392);
    width: 50%;
}
#naira{
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: -0.005em;
    text-align: left;
    color: #666666;
}
.name{
    display: none;
}
.wrapper{
    width:100%;
    border: 1px solid #BBBBBB;
    background: #fff!important;
    background: transparent;
    border-radius: 5px;
    padding-top:1.5rem;
    margin-top:-1.5rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin-left: auto;
}
.upload-btn{
    color: green;
    margin-top: -1.6rem;
    height: 40px!important;
}

@media(max-width:500px){
      .progress-box{
        width: 100%;
    }
    .text-between{
        top:0.65rem;
    }
    .list-box{
        flex-direction: column;
        padding:0.75rem 0;
    }
    .list-box .right-text{
        text-align: left;
        border: none;
        width: 100%;
        padding: 0;
        margin-top: 0.85rem;
    }
    .mobile-view-text{
        text-align: left;
        width: 100%;
        padding: 0;
        color: #999999;
    }
    .name{
    display:block;
    }
    #detached{
        padding:1rem 0;
    }
    .wrapper{
        width: 100%;
        padding:0 0.65rem;
    }
    .construction{
        margin-left: -4.5rem;
        margin-top: 2rem;
        width: 124px!important;
        float: right;
        font-size: 0.55rem!important;
    }
    .document-text.property{
         margin-top:2.5rem;
    }
}
</style>