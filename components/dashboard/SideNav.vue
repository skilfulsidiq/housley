<template>
  <div>
     <div class="aside-nav">
      <nav class="side-nav">
        <div class="inner-sidenav">
          <div class="inner-flex">
            <!-- logo -->
            <div class="top-logo-item">
              <img src="/logo/Houzzley-Logo.svg" alt="" />
            </div>
            <!-- item 1 -->
            <div class="inner-item-cover" >
              <nuxt-link to="/dashboard" :class="[$route.path=='/dashboard'?'inner-item-active':'inner-item']">
                <svg
                  class="svg-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.475 11.4582H13.1083C11.4333 11.4582 10.625 10.6832 10.625 9.08317V3.4165C10.625 1.8165 11.4417 1.0415 13.1083 1.0415H16.475C18.15 1.0415 18.9583 1.8165 18.9583 3.4165V9.08317C18.9583 10.6832 18.1417 11.4582 16.475 11.4582ZM13.1083 2.2915C12.05 2.2915 11.875 2.57484 11.875 3.4165V9.08317C11.875 9.92484 12.05 10.2082 13.1083 10.2082H16.475C17.5333 10.2082 17.7083 9.92484 17.7083 9.08317V3.4165C17.7083 2.57484 17.5333 2.2915 16.475 2.2915H13.1083Z"
                    :fill="$route.path=='/dashboard'?'white':'#C1C7D0'"
                  />
                  <path
                    d="M16.475 18.9585H13.1083C11.4333 18.9585 10.625 18.1835 10.625 16.5835V15.0835C10.625 13.4835 11.4417 12.7085 13.1083 12.7085H16.475C18.15 12.7085 18.9583 13.4835 18.9583 15.0835V16.5835C18.9583 18.1835 18.1417 18.9585 16.475 18.9585ZM13.1083 13.9585C12.05 13.9585 11.875 14.2418 11.875 15.0835V16.5835C11.875 17.4252 12.05 17.7085 13.1083 17.7085H16.475C17.5333 17.7085 17.7083 17.4252 17.7083 16.5835V15.0835C17.7083 14.2418 17.5333 13.9585 16.475 13.9585H13.1083Z"
                     :fill="$route.path=='/dashboard'?'white':'#C1C7D0'"
                  />
                  <path
                    d="M6.89166 18.9582H3.525C1.85 18.9582 1.04166 18.1832 1.04166 16.5832V10.9165C1.04166 9.3165 1.85833 8.5415 3.525 8.5415H6.89166C8.56666 8.5415 9.375 9.3165 9.375 10.9165V16.5832C9.375 18.1832 8.55833 18.9582 6.89166 18.9582ZM3.525 9.7915C2.46666 9.7915 2.29166 10.0748 2.29166 10.9165V16.5832C2.29166 17.4248 2.46666 17.7082 3.525 17.7082H6.89166C7.95 17.7082 8.125 17.4248 8.125 16.5832V10.9165C8.125 10.0748 7.95 9.7915 6.89166 9.7915H3.525Z"
                     :fill="$route.path=='/dashboard'?'white':'#C1C7D0'"
                  />
                  <path
                    d="M6.89166 7.2915H3.525C1.85 7.2915 1.04166 6.5165 1.04166 4.9165V3.4165C1.04166 1.8165 1.85833 1.0415 3.525 1.0415H6.89166C8.56666 1.0415 9.375 1.8165 9.375 3.4165V4.9165C9.375 6.5165 8.55833 7.2915 6.89166 7.2915ZM3.525 2.2915C2.46666 2.2915 2.29166 2.57484 2.29166 3.4165V4.9165C2.29166 5.75817 2.46666 6.0415 3.525 6.0415H6.89166C7.95 6.0415 8.125 5.75817 8.125 4.9165V3.4165C8.125 2.57484 7.95 2.2915 6.89166 2.2915H3.525Z"
                   :fill="$route.path=='/dashboard'?'white':'#C1C7D0'"
                  />
                </svg>
                <span  :class="[$route.path=='/dashboard'?'inner-item-text-active':'inner-item-text']">Dashboard</span>
              </nuxt-link>
            </div>
            <!-- item 2 -->
            <div class="inner-item-cover">
              <nuxt-link to="/dashboard/application" :class="[$route.path=='/dashboard/application'?'inner-item-active':'inner-item']">
                <svg
                  class="svg-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.175 16.8166C12.9583 16.8166 12.7333 16.8083 12.4917 16.7833C12.0583 16.7499 11.5667 16.6666 11.0583 16.5416L9.65833 16.2083C5.81667 15.2999 4.55833 13.2666 5.45833 9.43326L6.275 5.9416C6.45833 5.14993 6.675 4.50826 6.94166 3.97493C8.375 1.0166 11.1167 1.28326 13.0667 1.7416L14.4583 2.0666C16.4083 2.52493 17.6417 3.24993 18.3333 4.35826C19.0167 5.4666 19.125 6.8916 18.6667 8.8416L17.85 12.3249C17.1333 15.3749 15.6417 16.8166 13.175 16.8166ZM10.9333 2.70826C9.54166 2.70826 8.65833 3.28326 8.06666 4.5166C7.85 4.9666 7.65833 5.52493 7.49166 6.22493L6.675 9.7166C5.93333 12.8666 6.79167 14.2416 9.94166 14.9916L11.3417 15.3249C11.7917 15.4333 12.2167 15.4999 12.6 15.5333C14.8667 15.7583 15.9917 14.7666 16.625 12.0416L17.4417 8.55826C17.8167 6.94993 17.7667 5.82493 17.2667 5.0166C16.7667 4.20826 15.7833 3.65826 14.1667 3.28326L12.775 2.95826C12.0833 2.7916 11.4667 2.70826 10.9333 2.70826Z"
                     :fill="$route.path=='/dashboard/application'?'white':'#C1C7D0'"
                  />
                  <path
                    d="M6.94167 18.5419C4.8 18.5419 3.43334 17.2586 2.55834 14.5502L1.49167 11.2586C0.308336 7.59189 1.36667 5.52523 5.01667 4.34189L6.33333 3.91689C6.76667 3.78356 7.09167 3.69189 7.38333 3.64189C7.625 3.59189 7.85834 3.68356 8 3.87523C8.14167 4.06689 8.16667 4.31689 8.06667 4.53356C7.85 4.97523 7.65833 5.53356 7.5 6.23356L6.68334 9.72523C5.94167 12.8752 6.8 14.2502 9.95 15.0002L11.35 15.3336C11.8 15.4419 12.225 15.5086 12.6083 15.5419C12.875 15.5669 13.0917 15.7502 13.1667 16.0086C13.2333 16.2669 13.1333 16.5336 12.9167 16.6836C12.3667 17.0586 11.675 17.3752 10.8 17.6586L9.48333 18.0919C8.525 18.3919 7.69167 18.5419 6.94167 18.5419ZM6.48334 5.18356L5.40833 5.53356C2.43334 6.49189 1.725 7.89189 2.68334 10.8752L3.75 14.1669C4.71667 17.1419 6.11667 17.8586 9.09167 16.9002L10.4083 16.4669C10.4583 16.4502 10.5 16.4336 10.55 16.4169L9.66667 16.2086C5.825 15.3002 4.56667 13.2669 5.46667 9.43356L6.28334 5.94189C6.34167 5.67523 6.40834 5.41689 6.48334 5.18356Z"
                      :fill="$route.path=='/dashboard/application'?'white':'#C1C7D0'"
                  />
                  <path
                    d="M14.575 8.75815C14.525 8.75815 14.475 8.74981 14.4167 8.74148L10.375 7.71648C10.0417 7.63315 9.84167 7.29148 9.925 6.95815C10.0083 6.62481 10.35 6.42481 10.6833 6.50815L14.725 7.53315C15.0583 7.61648 15.2583 7.95815 15.175 8.29148C15.1083 8.56648 14.85 8.75815 14.575 8.75815Z"
                      :fill="$route.path=='/dashboard/application'?'white':'#C1C7D0'"
                  />
                  <path
                    d="M12.1333 11.5749C12.0833 11.5749 12.0333 11.5666 11.975 11.5582L9.55 10.9416C9.21666 10.8582 9.01666 10.5166 9.1 10.1832C9.18333 9.84991 9.525 9.64991 9.85833 9.73325L12.2833 10.3499C12.6167 10.4332 12.8167 10.7749 12.7333 11.1082C12.6667 11.3916 12.4167 11.5749 12.1333 11.5749Z"
                      :fill="$route.path=='/dashboard/application'?'white':'#C1C7D0'"
                  />
                </svg>
                <span :class="[$route.path=='/dashboard/application'?'inner-item-text-active':'inner-item-text']">Applications</span>
                </nuxt-link>
            </div>
            <!-- item 3 -->
            <!-- <div class="inner-item-cover" v-if="have_mortgage">
              <nuxt-link to="/dashboard/checklist" :class="[$route.path=='/dashboard/checklist'?'inner-item-active':'inner-item']">
                <svg
                  class="svg-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3083 7.3999H14.6833"
                      :stroke="$route.path=='/dashboard/checklist'?'white':'#C1C7D0'"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.31667 7.3999L5.94167 8.0249L7.81667 6.1499"
                     :stroke="$route.path=='/dashboard/checklist'?'white':'#C1C7D0'"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.3083 13.2334H14.6833"
                     :stroke="$route.path=='/dashboard/checklist'?'white':'#C1C7D0'"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.31667 13.2334L5.94167 13.8584L7.81667 11.9834"
                     :stroke="$route.path=='/dashboard/checklist'?'white':'#C1C7D0'"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5 18.3332H12.5C16.6667 18.3332 18.3333 16.6665 18.3333 12.4998V7.49984C18.3333 3.33317 16.6667 1.6665 12.5 1.6665H7.5C3.33333 1.6665 1.66666 3.33317 1.66666 7.49984V12.4998C1.66666 16.6665 3.33333 18.3332 7.5 18.3332Z"
                      :stroke="$route.path=='/dashboard/checklist'?'white':'#C1C7D0'"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span :class="[$route.path=='/dashboard/checklist'?'inner-item-text-active':'inner-item-text']" >Documents</span>
              </nuxt-link >
            </div> -->
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        pages:[
          {path:'/dashboard',text:'Dashboard'},
          {path:'/dashboard/application',text:'Dashboard'},
          {path:'/dashboard/document',text:'Dashboard'},
        ]
      }
    },
    computed:{
      have_mortgage(){
        let u = this.$store.state.auth.user;
        if(u.have_apply_for_mortgage==1 && u.checklist != null){
          return true
        }
        return false
      }
    }
  }
</script>

<style lang="scss" scoped>
.top-logo-item{
  padding:0 1rem;
}
.inner-item-active{
  background:$secondary;
}
</style>
