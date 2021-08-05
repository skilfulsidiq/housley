<template>
    <div>
     <main class="page-content">
       <div class="padded-content mt-183">
       <section class="paginate">
      <!-- <div class="grid-ppt-cards grid"> -->
         <div class="pagination-footer flex-wrap" id="pagination">
              <button type="button" class="xxsm-font green-btn s-bold" id="modal-trigge" data-toggle="modal" data-target="#exampleModal">
                Take the Affordability Test
              </button>
              <div id="btn-tab">
                <div class="rhs flex  page-numbers">
                 <div class='page-item'> 
                   <button class="fade-btn" type="button">
                  <img src="/img/properties/back.png" alt="back" />
                </button>
                </div>
                  <div class="pg-no page-item">
                    <p>Page <span class="green">2... </span>of 10</p>
                  </div>
                  <div class='page-item'>
                    <button class="fade-btn" type="button">
                      <img src="/img/properties/next.png" alt="next" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
      <!-- </div> -->
       </section>
       </div>
     </main>
    </div>
</template>

<script>
    export default {
        name:"PropertyPagePagination"
    }
</script>

<style lang="scss" scoped>
// .page-item:hover button{
//  transform: scale(1)!important;
// }
</style>