<template>
    <div>
        <button type="button" class="">
                Search Homes
        </button>
    </div>
</template>

<script>
    export default {
        props:{
            text:{type:String},
            bg:{type:String},
            color:{type:String},
            width:{type:String,default:""},
            height:{type:String,default:''},
            action:{type:Function},
            
        }
    }
</script>

<style lang="scss" scoped>
.appbtn{
    font-weight: 500;
    font-family: Poppins;
    border: none;
    outline: none;
    border-radius: 10px;
    color: #fff;
    padding: 10px 41px;
    background-color: $secondary;
    font-size: 14px;
    cursor: pointer;
    line-height: 24px;
}
</style>