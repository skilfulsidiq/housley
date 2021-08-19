<template>
    <div>
         <p class="title-heading">{{title}}</p>
         <p class="sub-header" >
             <span v-if="!showBadge">{{subtitle}}</span>
             <slot name="badge" ></slot>
        </p>

    </div>
</template>
<script>
export default {
    name:"TitleSubTitle",
    props:{
        title:{type:String, required:true},
        subtitle:{type:String, default:''},
        showBadge:{type:Boolean, default:false},
    }
}
</script>
<style lang="scss" scoped>
    .title-heading{
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 0px;
    }
    .sub-header{
            font-size: 16px;
            margin-bottom: 0px;
            color: #666666;
    }
</style>
