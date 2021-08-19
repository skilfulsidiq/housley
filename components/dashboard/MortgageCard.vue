<template>
    <div>
       <v-row justify="center">
           <v-col class="col-12" md="4">
                <div class="wrapper">
            <div class="top-text">Equity Finance</div>
            <div class="middle-text">Sed lorem turpis tellus, nisl, vel quis rhoncus purus quis.</div>
            <v-btn class="btn" depressed dark outlined>Coming soon</v-btn>
        </div>
           </v-col>
           <v-col class="col-12" md="4">
            <div class="wrapper">
            <div class="top-text">Housing Micro Finance</div>
            <div class="middle-text">Sed lorem turpis tellus, nisl, vel quis rhoncus purus quis.</div>
            <v-btn class="btn" depressed dark outlined>Coming soon</v-btn>
        </div>
           </v-col>
           <v-col class="col-12" md="4">
            <div class="wrapper">
            <div class="top-text mb-3">Personal Loan</div>
            <div class="middle">Amount Loanable </div>
            <div class="middle">Basic Salary</div>
            <v-btn class="btn btn-fill mt-2" depressed dark>Coming soon</v-btn>
        </div>
           </v-col>
       </v-row>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 199px;
    width: 100%;
    border-radius: 8px;
    background: #fff;
}
.top-text{
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #039C71;

}
.middle-text{
    font-size: 12px;
    font-weight: 325;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    color: #666666;
    height: 28px;
    width: 201px;
    margin-top: 1rem;
    margin-bottom:0.85rem;
}
.middle{
     font-size: 12px;
    font-weight: 325;
    line-height: 14px;
    letter-spacing: 0em;
    text-align:left;
    display: block;
    color: #666666;
    margin: 0.15rem 0;
}
.btn{
    font-size:0.875rem!important;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    height: 39px!important;
    width: 145px!important;
    border-radius: 8px;
    padding: 11px, 51px, 11px, 51px;
    color: #039C71;

}
.btn-fill{
    font-size: 14px!important;
    background: #039C71!important;
    color: #fff;
}
</style>
