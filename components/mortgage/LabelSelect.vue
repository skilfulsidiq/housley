<template>
    <div class="flex">
        <p>{{label}}</p>
         <v-select
          :items="items"
          :placeholder="Placeholder"
          outlined
          dense
          color="grey"
        ></v-select>
    </div>
</template>

<script>
    export default {
        name:"LabelSelect",
        props:{
            label:{
                type:String,
            },
            Placeholder:{
                type:String,
            },
            items:{
                type:Array,
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
</style>