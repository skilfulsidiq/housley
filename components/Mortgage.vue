<template>
    <div>
        <div class="wrapper">
            Mortgage page
          <!-- <v-row>
              <v-col class="col-12" md="4">
                    <div class="card">
                <div class="image">
                     <img src="../static/image/house.png" alt="house">
                </div>
                <div class="price-box">
                    <div class="price-text">Loan</div>
                    <div class="mortgage">₦70, 000, 000.00</div>
                </div>
                <a href="/Application"><v-btn depressed dark class="button"> <v-icon class="mr-3">mdi-offer</v-icon> Apply </v-btn></a>
                    </div>
              </v-col>
              <v-col class="col-12" md="4">
                  <div class="card">
                <div class="image">
                     <img src="../static/image/house.png" alt="house">
                </div>
                <div class="price-box">
                    <div class="price-text">Loan</div>
                    <div class="mortgage">₦80, 670, 000.00</div>
                </div>
                <a href="/Application"><v-btn depressed dark class="button"> <v-icon class="mr-3">mdi-offer</v-icon> Apply </v-btn></a>
                    </div>
              </v-col>
              <v-col class="col-12" md="4">
                  <div class="card">
                <div class="image">
                     <img src="../static/image/house.png" alt="house">
                </div>
                <div class="price-box">
                    <div class="price-text">Loan</div>
                    <div class="mortgage">₦102, 700, 000.00</div>
                </div>
                <a href="/Application"><v-btn depressed dark class="button"> <v-icon class="mr-3">mdi-offer</v-icon> Apply </v-btn></a>
                    </div>
              </v-col>
              <v-col class="col-12" md="4">
                  <div class="card">
                <div class="image">
                     <img src="../static/image/house.png" alt="house">
                </div>
                <div class="price-box">
                    <div class="price-text">Loan</div>
                    <div class="mortgage">₦50, 555, 000.00</div>
                </div>
                <a href="/Application"><v-btn depressed dark class="button"> <v-icon class="mr-3">mdi-offer</v-icon> Apply </v-btn></a>
                    </div>
              </v-col>
              <v-col class="col-12" md="4">
                  <div class="card">
                <div class="image">
                     <img src="../static/image/house.png" alt="house">
                </div>
                <div class="price-box">
                    <div class="price-text">Loan</div>
                    <div class="mortgage">₦90, 888, 000.00</div>
                </div>
                <a href="/Application"><v-btn depressed dark class="button"> <v-icon class="mr-3">mdi-offer</v-icon> Apply </v-btn></a>
                    </div>
              </v-col>
              <v-col class="col-12" md="4">
                  <div class="card">
                <div class="image">
                     <img src="../static/image/house.png" alt="house">
                </div>
                <div class="price-box">
                    <div class="price-text">Loan</div>
                    <div class="mortgage">₦10, 000, 000.00</div>
                </div>
                <a href="/Application"><v-btn depressed dark class="button"> <v-icon class="mr-3">mdi-offer</v-icon> Apply </v-btn></a>
                    </div>
              </v-col>
              <v-col class="col-12" md="4">
                  <div class="card">
                <div class="image">
                     <img src="../static/image/house.png" alt="house">
                </div>
                <div class="price-box">
                    <div class="price-text">Loan</div>
                    <div class="mortgage">₦60, 970, 555.00</div>
                </div>
                <a href="/Application"><v-btn depressed dark class="button"> <v-icon class="mr-3">mdi-offer</v-icon> Apply </v-btn></a>
                    </div>
              </v-col>
          </v-row> -->
        </div>
    </div>
</template>

<script>
    export default {
        name:"mortgage"
    }
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
}
img{
    width: 100%;
    height: auto;
}
.image{
    width: 100%;
    // height: 150px;
    // overflow: hidden;
}
.card{
    width: 100%;
    min-height: auto;
    background:#fff;
    border: 1px solid #BBBBBB;
    padding:0 0 1rem ;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    overflow: hidden;
}
.price-box{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    // margin-top: -1.5rem;
    border-top: 1px solid hsla(0,0%,73.3%,.5568627450980392);
    border-bottom: 1px solid hsla(0,0%,73.3%,.5568627450980392);
    // margin-top: 0.75rem;
}
.price-text{
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #666666;
}
.mortgage{
    width: 50%;
    padding: 10px 0px;
    padding-left:0.55rem;
    border-left: 1px solid hsla(0,0%,73.3%,.5568627450980392);
    width: 50%;
    color: #222222;
    font-size:1rem;
    font-weight: 500;
    // line-height: 36px;
    // letter-spacing: -0.005em;
    text-align: left;
    color: #039C71;

}
.button{
    background: #039C71!important;
    font-size: 0.875rem!important;
    text-transform: capitalize!important;
    color: #fff!important;
    margin-top: 0.75rem;
    margin-left:1rem;
}
</style>