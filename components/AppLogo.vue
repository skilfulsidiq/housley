<template>
    <div>
        <div  v-if="!useImg">
            <div  class="app-logo" v-if="!isWhite"></div>
            <div  class="app-logo-white" v-if="isWhite"></div>
        </div>
       
        <img alt="applogo" class="app-logo" src="../static/white_logo.png" v-if="useImg && isWhite">
        <img alt="applogo" class="app-logo" src="../static/logo.png" v-if="useImg && !isWhite">
    </div>
    
</template>
<script>
export default {
    name:"AppLogo",
    props:{
        useImg:{default:true},
        isWhite:{default:false}
    },
    data(){
        return{
            
        }
    },
    computed:{
        srcImg(){
            if(this.isWhite){
            return '../static/white_logo.png';
            }
            return '../static/logo.png';

        }
    }
}
</script>
<style scoped>
    .app-logo{
        background-position: center;
        background-size: cover;
        width:140px;
        height: 66px;
        background-repeat: no-repeat;
        background-image: url('../static/logo.png');
    }
    .app-logo-white{
        background-position: center;
        background-size: cover;
        width:140px;
        height: 66px;
        background-repeat: no-repeat;
        background-image: url('../static/white_logo.png');
    }
    @media(max-width: 500px){
        .app-logo-white{
            margin-inline:auto;
        }
    }
</style>