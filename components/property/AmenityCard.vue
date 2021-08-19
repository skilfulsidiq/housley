<template>
    <div>


                    <!-- <div class="cardbox_1 no_boxes">
                        <img :src="require('@/assets/img/icons/' + img )" :alt="alt"/>
                        <div class="no_of_beds ">{{title}}</div>
                    </div> -->

                  <div :class="cls">
                    <v-icon :color="color">{{icon}}</v-icon>
                      <!-- <img :src="require('@/assets/img/icons/' + img )" :alt="alt"/> -->
                        <span class="secondary--text">{{title}}</span>
                    </div>


    </div>
</template>
<script>
export default {
    name:"DetailAmenityCard",
    props:{
        title:{type:String, required:true},
        alt:{type:String},
        icon:{type:String, required:true},
        cls:{type:String},
        color:{type:String,default:'#0D4566'}
    },
    computed:{

    }
}
</script>
<style  scoped>


.bed, .bath, .dimension {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
}
</style>
