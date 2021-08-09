<template>
  <div>
     <main class="page-content">
      <section>
        <div class="padded-content mt-183 relative">
          <nuxt-link to="/properties" class="abs-text flex back bold color1"
            ><img
              src="/img/properties/green-back.svg"
              alt="back to search"
            /><span>Back to Search</span></nuxt-link
          >
          <section class="upper-ppt-detail-page">
            <div class="grid gridy-pic">
              <img
                class="a"
                src="/img/properties/home1.png"
                alt="building"
              />
              <!-- <div class="smaller-pics flex"> -->
              <img
                class="b"
                src="/img/properties/couch.png"
                alt="couch"
              />
              <img
                class="c"
                src="/img/properties/kitchen.png"
                alt="kitchen"
              />

              <!-- <div class="bg"></div>
                <div class="bg bg2"></div> -->
              <!-- </div> -->
            </div>
          </section>

          <section class="lower-ppt-detail-page">
            <div class="grid gridy">
              <div class="left">
                <div class="ppt-card-details">
                  <div class="upper grid">
                    <div class="lhs">
                      <p class="bold color1 big-text">
                        4 Bedrooms semi-detached duplex with BQ
                      </p>
                      <div class="located flex">
                        <img
                          src="/img/properties/locationIcon.svg"
                          alt="locationIcon"
                        /><span class="color1"
                          >Lekki Pearl Estate II, Lagos, Nigeria</span
                        >
                      </div>
                    </div>
                    <div class="rhs">
                      <p class="color1 bold">From</p>
                      <p class="color1 bold big-text">$ 27,000,000.00</p>
                    </div>
                  </div>
                  <div class="lower flex-wrap" id="grand-parent">
                    <div class=" icons" id="icon-parent">
                      <div class="with-icon flex j-btw">
                        <div>
                          <img
                            src="/img/properties/bed.svg"
                            alt="bed"
                          />
                        </div>
                        <p class="color1">4 Beds</p>
                      </div>
                      <div class="with-icon flex j-btw">
                        <div>
                          <img
                            src="/img/properties/bath.svg"
                            alt="bed"
                          />
                        </div>
                        <p class="color1">4 Baths</p>
                      </div>
                      <div class="with-icon flex j-btw">
                        <div>
                          <img
                            src="/img/properties/building.svg"
                            alt="bed"
                          />
                        </div>
                        <p class="color1">4 2980 sqft</p>
                      </div>
                      <div class="with-icon flex j-btw">
                        <div>
                          <img
                            src="/img/properties/car.svg"
                            alt="bed"
                          />
                        </div>
                        <p>4 Cars</p>
                      </div>
                    </div>

                      <app-button text="Get Prequalified" btnclass="green-btn s-bold hoverable" :action="chooseProperty">
                          Get Prequalified
                    </app-button>
                  </div>
                </div>
                <div class="description">
                  <div class="brief-detail grid">
                    <div>
                      <p class="color1">Property Status</p>
                      <p class="color1 bold">Under Construction</p>
                    </div>
                    <div>
                      <p class="color1">Property Title</p>
                      <p class="color1 bold">Not Available</p>
                    </div>
                    <div>
                      <p class="color1">Building Permit</p>
                      <p class="color1 bold">No</p>
                    </div>
                  </div>
                  <div class="ppt-descriptive">
                    <p class="color1 bold">Description</p>
                    <p class="color1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Enim, sit commodo adipiscing in. Pretium pulvinar
                      fringilla eu, ornare ullamcorper. Ultrices porttitor
                      cursus turpis laoreet id aliquet dictum convallis libero.
                      Eget massa nulla morbi in amet sollicitudin sit vitae ut.
                      Praesent interdum sed eu cras neque fusce sit tempor orci.
                      Risus senectus nec amet et pellentesque dolor. Orci, sed
                      ultricies viverra neque, nullam quis in ultricies. At
                      neque sed risus placerat enim cursus id pulvinar. At diam
                      at aliquam gravida. Rhoncus, nunc tempor interdum sed
                      amet, nunc, viverra. Eu lacus, leo neque diam . Orci, sed
                      ultricies viverra neque, nullam quis in ultricies. At
                      neque sed risus placerat enim cursus id pulvinar. At diam
                      at aliquam gravida. Rhoncus, nun.
                    </p>
                  </div>
                </div>
              </div>

              <div class="tab-form">
                <div class="tab flex">
                  <button
                    class="tablinks xsm-font"
                    onclick="openCity(event, 'scheduleTour')"
                    id="defaultOpen"
                  >
                    Schedule Tour
                  </button>
                  <button
                    class="tablinks xsm-font"
                    onclick="openCity(event, 'requestInfo')"
                  >
                    Request info
                  </button>
                </div>

                <div id="scheduleTour" class="tabcontent">
                  <form action="" class="form-tab">
                    <input
                      type="text"
                      name="date"
                      id="date"
                      class="color1"
                      placeholder="Select a prefered date"
                    />
                    <input
                      type="text"
                      name="time"
                      id="time"
                      class="color1"
                      placeholder="Select a prefered time"
                    />
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      class="color1"
                      placeholder="Full Name"
                    />

                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      class="color1"
                      placeholder="Phone"
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="color1"
                      placeholder="Email"
                    />
                    <div class="grid radios">
                      <p>
                        <input
                          type="radio"
                          id="inPerson"
                          name="radio-group"
                          checked
                        />
                        <label class="color1 xsm-font" for="inPerson"
                          >In Person</label
                        >
                      </p>
                      <p>
                        <input
                          type="radio"
                          id="videoChat"
                          name="radio-group"
                        />
                        <label class="color1 xsm-font" for="videoChat"
                          >Video Chat</label
                        >
                      </p>
                    </div>
                    <button
                      type="button"
                      class="xxsm-font green-btn s-bold"
                    >
                      Schedule a Tour
                    </button>
                  </form>
                </div>

                <div
                  id="requestInfo"
                  class="tabcontent"
                  style="display: none"
                >
                  <form action="" class="form-tab">
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      class="color1"
                      placeholder="Full Name"
                    />

                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      class="color1"
                      placeholder="Phone"
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="color1"
                      placeholder="Email"
                    />
                    <textarea
                      name="request"
                      id="request"
                      placeholder="Type in your request"
                      rows="10"
                    ></textarea>
                    <button
                      type="button"
                      class="xxsm-font green-btn s-bold"
                    >
                      Request info
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="amenities-grid">
              <div class="boxed-details">
                <p class="boxed-title bold color1 upward">Amenities1</p>
                <div class="boxed-body boxed-body-grid grid">
                  <div class="ticked flex">
                    <img src="/img/properties/tick.svg" alt="tick" />
                    <p class="ticked-text color1">Fitted Kitchen</p>
                  </div>
                  <div class="ticked flex">
                    <img src="/img/properties/tick.svg" alt="tick" />
                    <p class="ticked-text color1">Car Port</p>
                  </div>
                  <div class="ticked flex">
                    <img src="/img/properties/tick.svg" alt="tick" />
                    <p class="ticked-text color1">Treated Water</p>
                  </div>
                  <div class="ticked flex">
                    <img src="/img/properties/tick.svg" alt="tick" />
                    <p class="ticked-text color1">Seweage Treatment</p>
                  </div>
                  <div class="ticked flex">
                    <img src="/img/properties/tick.svg" alt="tick" />
                    <p class="ticked-text color1">Drainage</p>
                  </div>
                  <div class="ticked flex">
                    <img src="/img/properties/tick.svg" alt="tick" />
                    <p class="ticked-text color1">Paved Road</p>
                  </div>
                  <div class="ticked flex">
                    <img src="/img/properties/tick.svg" alt="tick" />
                    <p class="ticked-text color1">Power Transformer</p>
                  </div>
                  <div class="ticked flex">
                    <img src="/img/properties/tick.svg" alt="tick" />
                    <p class="ticked-text color1">Fitted Kitchen</p>
                  </div>
                  <div class="ticked flex">
                    <img src="/img/properties/tick.svg" alt="tick" />
                    <p class="ticked-text color1">Tared Street</p>
                  </div>
                </div>
                <div class="boxed-details boxed-details-scroll">
                  <p class="boxed-title bold color1">Property Types</p>
                  <div class="scrolly">
                    <div class="boxed-body boxed-body-table">
                      <div class="box">
                        <p class="color1">Terrace</p>
                        <p class="color1">₦ 27,000,000.00</p>
                        <p class="status green bold">Available</p>
                      </div>
                      <div class="box">
                        <p class="color1">Semi-detached</p>
                        <p class="color1">₦ 38,000,000.00</p>
                        <p class="status red bold">Sold out</p>
                      </div>
                      <div class="box">
                        <p class="color1">Detached</p>
                        <p class="color1">₦ 47,000,000.00</p>
                        <p class="status green bold">Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-slide">
                <p class="color1 slide-title">Lender Rate</p>
                <div class="mySlides flex j-btw" style="display:flex">
                  <img
                    src="/img/properties/firstTrust.png"
                    alt="firstTrust"
                  />
                  <p class="bold color1">12.2%</p>
                </div>

                <div class="mySlides" style="display:flex">
                  <q
                    >But man is not made for defeat. A man can be destroyed but
                    not defeated.</q
                  >
                  <p class="author">- Ernest Hemingway</p>
                </div>

                <div class="mySlides" style="display:flex">
                  <q
                    >I have not failed. I've just found 10,000 ways that won't
                    work.</q
                  >
                  <p class="author">- Thomas A. Edison</p>
                </div>

                <div class="flex control">
                  <button class="fade-btn prev" onclick="plusSlides(-1)">
                    <img src="/img/properties/prev.svg" alt="prev" />
                  </button>
                  <button class="fade-btn next" onclick="plusSlides(1)">
                    <img src="/img/properties/next.svg" alt="next" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    auth:false,
      head(){
            return{
                link:[
                      { rel: 'stylesheet', href:"/css/custom/header-color.css"  },
                ]
            }
        },
      // validate({ params, query, store }) {
      //   if(params.slug=='all'|| params.type=='search'){
      //     return true;
      //   }
      //   return false;
      // },
        data(){
          return{

          }
        },
         computed:{
            property(){
                let p = this.$store.state.property.property;
                return p;
            },
         },
        methods: {
          chooseProperty(){
            this.$store.commit("property/SELECTED_PROPERTY", this.property);
            this.$router.push("/affordability")
          },
           fetchProperty(slug){
            this.$store.dispatch("property/propertyDetailAction",slug)
        },
      },
      created(){
        this.fetchProperty(this.slug)
      }
  }
</script>

<style lang="scss" scoped>
/*-------------------------------------------------------------------
      icon div with right button adjustment
 --------------------------------------------------------------*/
#grand-parent{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%
}
#icon-parent{
  width: 35%;
  display: flex;
}

/*-------------------------------------------------------------------
      End of Icon with right button
 --------------------------------------------------------------*/


 /*-------------------------------------------------------------------
      property type div adjustment
 --------------------------------------------------------------*/

.boxed-details .boxed-body {
    margin-top: 15px;
    overflow: hidden;
}
.tab button {
    color: #0d4566!important;
}
.box{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  padding: 1.5rem 0;
  border-bottom: 1px solid #3aaa35;
}
.box:nth-child(3){
  border-bottom: none;
}
.box >*{
  width: 200px;
}
/*-------------------------------------------------------------------
      end of property
 --------------------------------------------------------------*/
@media(max-width: 500px){
  #grand-parent{
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  #icon-parent{
    width: 80%;
    margin-bottom:0.25rem;
  }
}
</style>
