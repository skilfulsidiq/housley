<template >
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-avatar
            color="primary"
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
    <!-- <v-menu bottom origin="center center" transition="scale-transition" class="profile_icon">
          <template v-slot:activator="{ on }">
            {{user.name}}
            <v-btn icon v-on="on" outlined class="mr-5 ml-5" >
            <v-icon size="30">mdi-account</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in user_menu"
              :key="i"
              @click="user_menu_action(item.link)"
            >
              <v-list-item-title ><v-icon >{{item.icon}}</v-icon> {{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
    </v-menu> -->
</template>
<script>
import general_mixin from '@/mixins/general_mixin'
export default {
    name:"Avatar",
    mixins:[general_mixin],
    props:{
      menu:{type:Array},
    },
    data(){
        return{
            
        }
    },
    computed:{

    },
    methods:{
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
