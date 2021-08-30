<template>
  <v-app dark>

    <div class="error-page">
        <div class="text" v-if="error.statusCode === 404">
            <img src="/img/404.png" alt="">
            <h1>Page Not Found</h1>
            <NuxtLink class="next xxsm-font green-btn s-bold hoverable text-center" to="/">
              Home page
            </NuxtLink>
        </div>
        <div class="text" v-else>
            <h1> {{ otherError }}</h1>
            <NuxtLink to="/" class="next xxsm-font green-btn s-bold hoverable text-center">
              Home page
            </NuxtLink>
        </div>
    </div>


  </v-app>
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.error-page{
  display: flex;
  justify-content: center;
  align-items: center;
  padding:15rem;
  width:100%;
  /* height: 15rem; */


}
.text{
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.text h1{
  text-align: center;
  margin-top:1rem;
  margin-bottom: 1rem;
}
</style>
