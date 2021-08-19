<template>
  <div>
        <v-card height="100" :style="{borderTop:'3px',borderColor:'red'}"
            class="mx-auto py-3 count-card"

        >
        <v-list-item >
            <v-list-item-avatar class="ml-5"
                size="50"
                :color="color"
            >
                <v-icon :color="iconColor">{{icon}}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="count mb-1" :style="{color:iconColor}">{{count}}
                </v-list-item-title>
                <v-list-item-subtitle class="count-title">{{title}}</v-list-item-subtitle>
            </v-list-item-content>


            </v-list-item>
        </v-card>

    </div>
</template>
<script>
export default {
    name:"CounterCard",
    props:{
        title:{type:String,required:true},
        icon:{type:String,required:true},
        iconColor:{type:String,required:true},
        count:{default:0,required:true},
        color:{default:'blue'},
    }
}
</script>
<style scoped lang="scss">
    .count-card{
      border-left: 3px;
      border-radius: 10px;
    }
    .count{
        @include app-font(normal,bold,24px,29.21px);
    }
    .count-title{
         @include app-font(normal,500,12px,15px);
         color: $sub_text_color;
    }
</style>
