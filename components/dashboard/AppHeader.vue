<template>
  <div>
      <div class="navheader">
      <div class="img_ spaceright">
        <!-- <img src="/logo/afreal1-logo.png" alt=""> -->
         <img src="/logo/Houzzley-Logo.svg" />
      </div>
        <div>
          <auth-avatar class="app_avatar"/>
          <div class="menu" onclick="openNav()">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H21"
                stroke="#4E5D78"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M9.48999 12H21"
                stroke="#4E5D78"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3 12H5.99"
                stroke="#4E5D78"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3 17H21"
                stroke="#4E5D78"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import AuthAvatar from '../AuthAvatar.vue'
  export default {
  components: { AuthAvatar },

  }
</script>

<style lang="scss" scoped>
  @media screen and (max-width:800px){
    .app_avatar{
      display:none;
    }
    .spaceright{
      margin-right: 5rem;
    }
    .navheader{
      padding-right:20px;
    }
  }
</style>
