<template>
  <div >
      <div class="profile cursor">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="28" cy="28" r="28" fill="#E1ECFF" />
            <circle cx="28" cy="28" r="26.3529" fill="white" />
            <circle cx="28" cy="28" r="24.7059" fill="#4C89B5" />
          </svg>
          <div class="names">
            <span class="user_name">{{user.firstname}} {{user.lastname}}</span>
            <small class="company_name">{{user.email}}</small>
          </div>
          <div class="dropdown" style="margin-bottom: 10px">
            <svg
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.5L12 15.5L5 8.5"
                stroke="#323B4B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <nuxt-link to="/" class="dropdown-item cursor" href="#" style="color: #0D4566"
                  >Home</nuxt-link>
              </li>
              <li>
                <a @click="logout" class="dropdown-item cursor" href="#" style="color: #0D4566"
                  >Logout</a
                >
              </li>
            </ul>
          </div>
      </div>

  </div>
</template>

<script>

import auth_mixin from "@/mixins/auth_mixin";
  export default {
     mixins:[auth_mixin],
    data(){
      return{
        showdrop:false
      }
    },
    methods:{
      toggle(){
        this.showdrop = !this.showdrop;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
