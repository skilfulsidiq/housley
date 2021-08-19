<template>
    <div>
        <div class="wrapper">
            <v-row justify-lg="center" justify-sm="space-between">
                <v-col lg="3" sm="4" class="col-12">
                    <div class="box d-sm-flex flex-sm-row flex-column align-sm-center justify-sm-start justify-center">
                        <div class="image">
                             <v-icon size="50" color="secondary">mdi-home-search-outline</v-icon>
                        </div>
                        <div class="title">100% Free Service</div>
                    </div>
                </v-col>
                <v-col lg="3" sm="4" class="col-12">
                    <div class="box d-sm-flex align-sm-center flex-sm-row justify-sm-start flex-column justify-center">
                        <div class="image"> <v-icon size="50" color="secondary">mdi-cash-minus</v-icon></div>
                        <div class="title">No commission fees</div>
                    </div>
                </v-col>
                <v-col lg="3" sm="4" class="col-12">
                    <div class="box three d-sm-flex flex-sm-row flex-column align-sm-center justify-sm-start justify-center">
                        <div class="image"> <v-icon size="50" color="secondary">mdi-bank-outline</v-icon></div>
                        <div class="title">Access to Affordable finance</div>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    export default {
        name:'FreeService',
    }
</script>

<style lang="scss" scoped>
img{
    width: 100%;
    height: auto;
}
.wrapper{
    width:100%;
    margin:0rem auto;
    padding:10rem 0;
}
.box{
    border-right: 1px dashed $primary;
    padding:1rem 0;
}
.box.three{
    border: none;
}
.image{
    // background: url('../static/image/key_pattern.png');
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
    display: block;
    width:40px;
    height:40px;
    margin-right:1rem;
}
// .image.two{
//      background: url('../static/image/hand_shake.png');
//       background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     display: block;
//     width: 50px;
//     height: 50px;
//     margin-right:0.45rem;
// }
// .image.three{
//     background: url('../static/image/cash-hand.png');
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     display: block;
//     width: 50px;
//     height: 50px;
//     background-color: $primary;
//     margin-right:0.45rem;
// }
.title{
    font-size:0.8rem!important;
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: -0.5px;
    text-align:left;
    color: $secondary;
    margin-top:1rem;
    margin-left:0.5rem;
    white-space: pre-wrap;
}
@media(max-width:900px){
        // .title{
        //     font-size: 0.75rem;
        // }
        .image,.image.two,.image.three{
            width: 30px;
            height: 30px;
        }
}
@media(max-width:500px){
    .wrapper{
        border-radius: 5px;
        width: 95%;
        margin-top: 3rem;
    }
    .box{
        border-right: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        // padding-bottom:0.65rem;
        padding:1rem 0;
    }
    .image{
       margin-left:0.45rem;
       margin-right:1rem;
       display: grid;
       place-items: center;
       width:100%;
       height:100%;
    }
    .v-icon{
        font-size:5rem!important;
    }
    .title{
        width: 100%;
        display: grid;
        place-items: center;
        margin-top: 1rem;
        font-size:1rem!important;
    }
}
</style>
