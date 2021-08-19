<template>
    <div class="flex">
        <p>{{label}}</p>
         <v-text-field :rules="rules" outlined dense color="grey" :placeholder="Placeholder"></v-text-field>
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
    align-items:flex-start;
    justify-content: flex-start;
    flex-direction: column;
}
.v-text-field{
    width: 100%;
}
</style>