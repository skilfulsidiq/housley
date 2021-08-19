<template>
    <div class="flex">
        <p>{{label}}</p>
        <div class="wrap">
             <v-text-field
            outlined
            dense
            type="date"
          ></v-text-field>
          <span></span>
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
            }
        }
    }
</script>

<style lang="scss" scoped>
.flex{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
}
.wrap{
    width: 100%;
    position: relative;
}
span{
    position: absolute;
    right: 0;
    top: 0;
    background: rgba(135, 138, 138, 0.295);
    width: 50px;
    height:40px;
}
</style>