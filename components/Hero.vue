<template>
    <div>
        <!-- <v-container fluid> -->
            <v-container class="mt-5">
                <v-row justify="center">
                    <v-col  sm="6" class="col-12">
                        <div class="home-text">Home Ownership <span>begins with us </span></div>
                        <p class="my-6">Discover great mortgage deals from trusted lenders across the country, and get expert advice on the right option for you. Best of all, we are absolutely free!</p>
                        <div class="btn-wrap">
                             <ActionButton id="action-btn" text="Get Started" :block="true" type="Button" height="45px" :rounded="false" :action="start"/>
                        </div>
                    </v-col>
                    <v-col md="6">
                        <div class="image d-sm-flex d-none justify-sm-end">
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        <!-- </v-container> -->
    </div>
</template>

<script>
import ActionButton from '../components/ActionButton.vue'
    export default {
        name:'Hero',
        components:{ActionButton},
        methods:{
          start(){
            this.$router.push('/login')
          }
        }
    }
</script>

<style lang="scss" scoped>
.btn-wrap{
    width: 100px;
}
.home-text{
    text-align: left;
    margin-top: 40px;
    font-weight: 800;
    font-size:3rem;
    line-height:3.5rem;
    color: #121212;
}
.home-text span{
    display: block;
}
p{
    font-weight: 300;
    font-size: 1.125rem;
    color: #000;
    line-height: 1.7;
    margin: 30px 0 0;
}
.image{
    background: url('../static/image/hero-banner.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;

}
@media(max-width:500px){
    .home-text{
        text-align:left;
        font-size: 1.8rem;
        line-height:40px;
    }
    .home-text span{
        display: flex;
        justify-content:left;
    }
    p{
        text-align:left;
    }
    .btn-wrap{
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    #action-btn{
        margin-left:5rem;
    }
}
</style>
