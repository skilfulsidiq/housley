<template>
<footer class="genFooter">
    <v-container fluid>
     <v-container>
        <div class="genFooterTopWrapper">
        <v-row justify="center">
        <v-col lg="6" offset="0" class="col-12">
        <div class="footer-subscriber-form text-center d-flex align-center justify-center flex-column">
        <h2>Subscribe to our Newsletter</h2>
        <p class="text-center">Never miss an opportunity, put your emails address and get started.</p>
        <form  class="footer-subscriber-form-wrapper">
        <div class="footer-subscriber-form-content d-flex align-center justify-space-between">
        <div class="msg-icon" ><svg data-v-6b5dce9b="" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path data-v-6b5dce9b="" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
        </path><polyline data-v-6b5dce9b="" points="22,6 12,13 2,6"></polyline>
        </svg>
        </div>
        <div  class="form-input">
        <input type="email" placeholder="Enter your Email Address"/>
        </div>
        <div class="action-btn">
            <ActionButton type="button" color="secondary" height="45px" class="subscriber-btn" text="Submit" :block="true" :action="go"/>
        <!-- <button class="subscriber-btn">Submit</button> -->
        </div>
        </div>
        </form>
        </div>
        </v-col>
        </v-row>
        <v-row justify="center" class="d-flex footer-bottom-h4">
        <v-col md="5" class="col-12">
        <div class="genFooterBottomNav">
        <figure>
        <img src="../static/logo/logo_white.png" alt="Housing Solution Funds">
        </figure>
        <p class="mobile-left-tect"><b >Afreal Limited</b> has gone above and beyond in helping is with our first home. From advice and working around our schedules to sending us assistance and minor renovations</p>
        </div>
        </v-col>
        <v-col md="2" class="col-12">
        <div class="genFooterBottomNav">
        <h4>Support</h4>
        <ul>
        <li><a href="">Help Videos</a></li>
        <li><a href="">Accessories</a></li>
        <li><a href="">View Bookings</a></li>
        <li><a href="">Features</a></li>
        <li><a href="">CSR</a></li>
        <li><a href="">Terms and Policy</a></li>
        </ul>
        </div>
        </v-col>
        <v-col md="2" class="col-12">
        <div class="genFooterBottomNav">
        <h4>About</h4>
        <ul>
        <li><a href="">Payment &amp; Tax</a></li>
        <li><a href="">Terms of Service</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">Announcement</a></li>
        <li><a href="">CSR</a></li>
        <li><a href="">News</a></li>
        </ul>
        </div>
        </v-col>
        <v-col md="3" class="col-12">
        <div class="genFooterBottomNav">
        <h4>Our Address</h4>
        <address>
        <p class="mobile-left-text">Plot 15A Abayomi Durosinmi-Etti Street, Lekki Phase 1(Ocean Side), Lagos.</p>
        </address>
        <div class="genFooterSocials">
        <ul class="d-flex align-center justify-space-around">
        <li><a target="_blank" href="" class="socials"> <v-icon size="30" color="black">mdi-facebook</v-icon> </a></li>
        <li><a target="_blank" href="/" class="socials"> <v-icon size="30" color="black">mdi-instagram</v-icon></a></li>
        <li><a target="_blank" href="/" class="socials"> <v-icon size="30" color="black">mdi-twitter</v-icon></a></li>
        <li><a target="_blank" href="/" class="socials"> <v-icon size="30" color="black">mdi-youtube</v-icon></a></li>
        </ul>
        </div>
        </div>
        </v-col>
        </v-row>
        </div>
        <div class="genFooterBottomWrapper">
        <div class="copyrights">
        <p>Copyright © 2021 Afreal Limited. Alright Reserved.</p>
        </div>
        </div>
     </v-container>
    </v-container>
</footer>
</template>
<script>
import AppLogo from './AppLogo.vue'
export default {
    name:"Footer",
    components:{
        AppLogo,
    },
    methods:{
      go(){
        
      }
    }
}
</script>
<style scoped lang="scss">

.form-input{
    height:45px;
    width: 100%;
}
.form-input> input{
    width: 100%!important;
    height: 100%;
    text-align: center!important;
    outline: none!important;;
    border: none!important;
}
.msg-icon{
    margin-top:-0.75rem;
}
.action-btn{
    margin-bottom:0.45rem;
}
footer {
    background: $secondary;
    margin: 0;
    padding: 4rem 2rem 0;
    // font-family: Airbnb Cereal App Light;
}
// .container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
//     width: 100%;
//     padding-right: 15px;
//     padding-left: 15px;
//     margin-right: auto;
//     margin-left: auto;
// }
div {
    display: block;
    margin-inline: auto;
}
// .row {
//     display: flex;
//     flex-wrap: wrap;
//     flex: 1 1 auto;
//     margin: -12px;
// }
.genFooterTopWrapper .footer-subscriber-form {
    padding: 1rem 3rem 2rem;
}

.text-center {
    text-align: center!important;
}
.genFooterTopWrapper p {
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    color: #fff;
    max-width: 420px;
}
p {
    font-size: 15px!important;
    line-height: 30px!important;
    color: #453e3e;
    letter-spacing: .04em;
    // font-family: Airbnb Cereal App Light;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
}
.footer-subscriber-form h2 {
    font-weight: 800;
    font-size: 25px;
    line-height: 40px;
    color: #fff;
    text-transform: capitalize;
    letter-spacing: .04em;
}
.footer-subscriber-form-wrapper {
    background: #fff;
    min-height:auto;
    border-radius: 16px;
    overflow: hidden;
    width: 100%;
}
.footer-subscriber-form-content {
    padding: 0 .6rem;
}
.footer-subscriber-form-content svg {
    margin-top: 13px;
    color: #16465c;
}
svg {
    overflow: hidden;
}
img, svg {
    vertical-align: middle;
}
.footer-subscriber-form-content .subscriber-btn {
    border: 1px solid transparent;
    background: $secondary;
    // background: linear-gradient( 249deg,#6fa73d,#00b1ab);
    color: #fff;
    font-weight: 500;
    font-size: 15px;
    padding: 12px 30px;
    border-right: none;
    margin-top: 7px;
    letter-spacing: .04em;
    border-radius: 8px;
    border: none!important;
}
.genFooterBottomNav {
    padding-top: 2rem;
}
figure {
    margin: 0 0 1rem;
}
img {
    border-style: none;
}
b, strong {
    font-weight: bolder;
}
.genFooterBottomNav h4, .genFooterSocials h4 {
    font-weight: 800;
    font-size: 16px;
    line-height: 30px;
    color: #fff;
    text-transform: capitalize;
    letter-spacing: .04em;
}
.genFooterBottomNav ul {
    padding: 0;
    margin: 15px 0 0;
}
.genFooterBottomNav ul li {
    list-style: none;
    margin: 5px 0;
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    text-transform: capitalize;
    padding-left: 0;
    letter-spacing: .04em;
}

.genFooterBottomNav ul li a {
    color: #fff;
    text-decoration: none;
}
address, dl, ol, ul {
    margin-bottom: 1rem;
}
address {
    font-style: normal;
    line-height: inherit;
}
.genFooterSocials ul{
    padding: 0;
    list-style: none;
    margin: 10px 0 30px;
    margin-left: -1.2rem;
}

.genFooterSocials li a {
    background: #fff;
    width: 40px;
    height: 40px;
    text-align: center;
    display: block;
    padding: .2rem 0;
    padding-top:0.25rem;
    border-radius: 50%;
    box-shadow: 0 4px 16px rgb(17 17 17 / 4%);
}
.genFooter .genFooterBottomWrapper {
    border-top: 1px solid rgba(135,146,161,.08);
    padding: 1.5rem 0 .5rem;
    margin-top: 3rem;
}
.genFooterBottomWrapper .copyrights {
    text-align: center;
}
.copyrights p{
    color:#fff;
}

a {
    background-color: transparent;
}
* {
    padding: 0;
    margin: 0;
}
*:after, :before {
    background-repeat: no-repeat;
    box-sizing:inherit;
}
@media(max-width: 1024px){
    .genFooterTopWrapper p{
        max-width: 350px;
    }
    .genFooterSocials ul{
    margin-left: -0.45rem;
    }

}
@media(max-width:900px){
    .genFooterTopWrapper p{
        max-width: 50%;
        margin-inline: auto;
    }
        .genFooterBottomNav {
            width: 100%;
            text-align: center;
            margin-inline: auto;
            }
        .footer-subscriber-form p {
            font-size: 14px!important;
        }
         .genFooterSocials ul{
            margin-left:0rem;
        }
        .genFooterSocials{
            width: 50%;
            margin-inline: auto;
        }
        .genFooterSocials ul li {
            margin-right: 0px;
        }
}

@media(max-width: 500px){
    .genFooterTopWrapper p,.genFooterSocials{
        width: 100%;
        margin-inline: auto;
        text-align: left;
    }
    .genFooterTopWrapper .footer-subscriber-form {
    padding: 1rem 0.45rem;
    }
    .genFooterBottomNav ul{
    width: 50%;
    margin-inline: auto;
    text-align: left;
    }
    .footer-bottom-h4 h4 {
    text-align: left!important;
    width: 50%!important;
    margin-inline: auto!important;
    }
    address p{
    text-align: left;
    }
    .mobile-left-text{
        width: 50%;
        margin-inline: auto;
        text-align: left;
    }
    .footer-subscriber-form h2{
        font-size: 20px;
    }
    .genFooterSocials li{
        margin-right: 1rem!important;
    }
    footer{
        padding: 4rem 0.15rem;
    }
}
</style>
