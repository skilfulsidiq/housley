<template>
    <div>
     <div class="col-lg-12">
            <div class="pagination-counter">
                <ul class="pagination">
                    <li class="page-item" v-for="(link, i) in pagination.links" :key="i">
                        <a class="page-link icons" @click="nextPag(link.url)" :class="link.active?'active ':'disabled'"
                            aria-label="Previous" v-html="link.label">
                            <!-- <i class="fa fa-chevron-left"
                                aria-hidden="true"></i> -->
                        </a>
                        </li>
                    <!-- <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">...</a></li>
                    <li class="page-item"><a class="page-link" href="#">9</a></li>
                    <li class="page-item"><a class="page-link" href="#">10</a></li>
                    <li class="page-item"><a class="page-link icons" href="#"
                            aria-label="Next"><i class="fa fa-chevron-right"
                                aria-hidden="true"></i></a></li> -->
                </ul>
            </div>
            <p class="pagination-result-counter"><strong>{{pagination.count}} of {{pagination.total}}</strong> showing based on {{title}}</p>
        </div>
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
    },methods:{
        nextPag(url){
            let link =  process.env.ApiUrl;
            console.log('pganitaion url: ',link);
            // let path = this.pagination.path;
            let u = url.replace(link,'');
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
</script>
<style scoped>
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
.page-item:first-child .page-link {
    margin-left: 0;
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
}
.page-link.icons {
    color: #dfe3e8;
}
.page-link {
    padding: .75rem 1.1rem!important;
    border-radius: 4px;
    border: 1px solid #f2f2f2;
    color: #14142b;
}
.page-link {
    position: relative;
    display: block;
    padding: .5rem .75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #007bff;
    background-color: #fff;
    border: 1px solid #dee2e6;
}
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
</style>
