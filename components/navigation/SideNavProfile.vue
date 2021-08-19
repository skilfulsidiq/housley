<template>
  <div>
      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-avatar
            color="accent"
            size="40"
             v-bind="attrs"
          v-on="on"
            ><span class="white--text ">{{getUserInitial}}</span></v-avatar>
      </template>
      <v-list>
        <v-list>
            <v-list-item
              v-for="(item, i) in menu"
              :key="i"
              @click="user_menu_action(item.link)"
            >
              <v-list-item-title ><v-icon >{{item.icon}}</v-icon> {{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import general_mixin from '@/mixins/general_mixin'
  export default {
    mixins:[general_mixin],
     props:{
      menu:{type:Array},
    },
    methods:{
      logout(){
         this.$auth.logout()
      },
      user_menu_action(link){
        if(link=='logout'){
          this.$auth.logout()
          // this.$store.dispatch("logout").then(()=>{
          //   this.$router.replace('/login');
          // // })

        }else{
          this.$router.push(link);
        }
      }

    }

  }
</script>

<style lang="scss" scoped>

</style>
