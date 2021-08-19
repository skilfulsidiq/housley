<template>
    <div class="flex">
        <p>{{label}}</p>
        <div class="wrap">
        <span class="left"> <v-icon size="15" color="#000">mdi-currency-ngn</v-icon> </span>
         <v-text-field :rules="rules" outlined dense color="grey" :placeholder="Placeholder" full-width></v-text-field>
         <span class="right"> {{SpanButtonText}} </span>
        </div>
    </div>
</template>

<script>
    export default {
        name:"LabelInput",
        props:{
            label:{
                type:String,
            },
            Placeholder:{
                type:String,
            },
            SpanButtonText:{
                type:String,
            }
        }
    }
</script>

<style lang="scss" scoped>
.flex{
    display: flex;
    align-items:flex-start;
    justify-content: flex-start;
    flex-direction: column;
}
.wrap{
    position: relative;
}
.left,.right{
    position: absolute;
    top:0;
    height: 40px;
    width: 40px;
}
.left{
    left: 0;
    padding:0.45rem;
    padding-left:0.75rem;
    border-right: 1px solid grey;

}
.right{
    right: 0;
    background: rgba(128, 128, 128, 0.336);
    color: #000;
    font-size: 0.758rem;
    width: 55px;
    padding-top: 0.65rem;
    padding-left: 0.35rem;
}
</style>