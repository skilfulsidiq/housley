<template>
  <div>
       <v-carousel
          cycle
          height="15rem"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(slide, i) in photos"
            :key="i"
          >
               <div class="card-image" :style="{ backgroundImage: 'url('+slide + ')' }">
                        </div>

          </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  export default {
    props:{
      photos:{type:Array}
    },
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .card-image{
     height:15rem;
    width: 100%;
    // background: url(https://cdn.vuetifyjs.com/images/cards/cooking.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    // border-top-right-radius:10px;
    // border-top-left-radius: 10px;
  }
</style>
