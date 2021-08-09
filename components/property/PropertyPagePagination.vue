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
              <!-- <div id="btn-tab">
                <div class="rhs flex  page-numbers">
                 <div class='page-item'>
                   <button class="fade-btn" type="button">
                  <img src="/img/properties/back.png" alt="back" />
                </button>
                </div>
                 <div class='page-item'>
                   <button class="fade-btn" type="button">
                  <img src="/img/properties/back.png" alt="back" />
                </button>
                </div>
                  <div class="pg-no page-item">
                    <p>Page <span class="green">{{pagination.count}}&nbsp;</span>of &nbsp;{{pagination.total}}</p>
                  </div>
                  <div class='page-item'>
                    <button class="fade-btn" type="button">
                      <img src="/img/properties/next.png" alt="next" />
                    </button>
                  </div>
                </div>
              </div> -->
               <div v-if="pagination.links">
            <div class="pagination-counter" >
                <ul class="pagination">
                    <li class="url-item" v-for="(link, i) in pagination.links" :key="i">
                        <!-- <a class="page-link icons" @click="nextPag(link)" :class="link.active?'active ':'disabled'"
                            aria-label="Previous">
                        </a> -->
                        <button type="button" class="page-link icons" @click="nextPag(link.url)"  :class="[link.active?'active ':'disabled']"    v-html="link.label" >

                        </button>
                        </li>
                </ul>
            </div>
            <p class="pagination-result-counter"><strong>{{pagination.count}} of {{pagination.total}}</strong> </p>

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
    name:"Pagination",
    props:{
        pagination:{type:Object, required:true},
        title:{type:String},
        mutator:{type:String},
        method:{type:String,default:'get'}
    },
    data(){
        return{
            totalPage:'',

        }
    },
    computed:{

    },
    methods:{
       calculateDisable(index){
        if(this.pagination.currentPage <=1 && index==0){
            return true;
        }
        else if(this.pagination.currentPage > 1 && index == (this.pagination.totalPage-1)){
          return true
        }else{
          return false
        }

      },
      dontGo(){},
        nextPag(url){
            // let link =  process.env.ApiUrl;
              if(url){
                   let base =  'http://mainhsf.test/api/';
            console.log('pganitaion url: ',base);
            // let path = this.pagination.path;
            let u = url.replace(base,'');
            let form =null;
            if(this.method=='post'){
                form = {
                    // price : this.$store.state.property_module.form.max_loan_amount,
                    // location:this.$store.state.property_module.form.location
                }
            }
            let data = {url :u, mutator:this.mutator,method:this.method,form:form}
            this.$store.dispatch("property/paginationAction",data);
              }



        }
    }
}
</script>

<style lang="scss" scoped>
.pagination-counter {
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.pagination {
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: .25rem;
}
.pagination-counter ul li {
    text-align: center;
    margin-right: 20px;
}
.url-item:first-child .page-link {
    margin-left: 0;
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
}
.page-link.icons {
    color: #fff;
    background-color: #3aaa35;
    cursor: pointer;
}
// .page-link.disabled{
//   background-color: #86c383;
// }
// .page-link.disabled{
//   background-color: #86c383;
// }
.page-link {
    padding: 0.2rem 0.4rem !important;
    border-radius: 4px;
    border: 1px solid #f2f2f2;
    color: #14142b;

    // #3aaa35
}
// .page-link {
//     position: relative;
//     display: block;
//     padding: .5rem .75rem;
//     margin-left: -1px;
//     line-height: 1.25;
//     color: #007bff;
//     background-color: #fff;
//     border: 1px solid #dee2e6;
// }
.pagination-counter ul li {
    text-align: center;
    margin-right: 20px;
}
.pagination-result-counter {
    text-align: center;
    margin-top: -30px;
    color: #a0a3bd!important;
}

p {
    font-size: 15px!important;
    line-height: 30px!important;
    color: #453e3e;
    letter-spacing: .04em;
    font-family: Airbnb Cereal App Light;
}

.active:after {
    content: "";
}
</style>
