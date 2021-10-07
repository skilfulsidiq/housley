<template>
  <div>
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
                  <form class="form-tab">
                    <div>
                      <label for="" class="tour-form-label">Prefered Date</label>
                       <input type="date" class="color1" v-model="book_form.book_date"
                          :class="{ 'is-invalid': book_tour_submitted && $v.book_form.book_date.$error }"
                              placeholder=" Select Prefered Date" />

                          <div v-if="book_tour_submitted && !$v.book_form.book_date.required" class="form-error">Date is required</div>
                    </div>
                    <div>
                       <label for="" class="tour-form-label">Prefered Time</label>
                        <input type="time" class="color1" v-model="book_form.book_time"
                          placeholder="Prefered Time"   :class="{ 'is-invalid': book_tour_submitted && $v.book_form.book_time.$error }" />

                          <div v-if="book_tour_submitted && !$v.book_form.book_time.required" class="form-error">Time is required</div>
                    </div>
                    <div>
                        <label for="" class="tour-form-label">Full Name</label>
                       <input type="text" class="color1"
                                        placeholder="Full Name" v-model="book_form.name"
                                            :class="{ 'is-invalid': book_tour_submitted && $v.book_form.name.$error }" />
                                                <div v-if="book_tour_submitted && !$v.book_form.name.required" class="form-error">Name is required</div>
                    </div>
                    <div>
                        <label for="" class="tour-form-label">Phone number</label>
                       <input type="text" class="color1" v-model="book_form.phone"
                                        placeholder="Phone"   :class="{ 'is-invalid': book_tour_submitted && $v.book_form.phone.$error }" />

                                            <div v-if="book_tour_submitted && !$v.book_form.phone.required" class="form-error">Phone is required</div>
                                            <div v-if="book_tour_submitted && !$v.book_form.phone.numeric" class="form-error">Valid Phone is required</div>
                    </div>


                      <div>
                          <label for="" class="tour-form-label">Email Address</label>
                          <input type="email" class="form-control"
                                        placeholder="Email Address" v-model="book_form.email"  :class="{ 'is-invalid': book_tour_submitted && $v.book_form.email.$error }" />


                                <div v-if="book_tour_submitted && !$v.book_form.email.required" class="form-error">Email is required</div>
                                <div v-if="book_tour_submitted && !$v.book_form.email.email" class="form-error">Valid Email is required</div>
                      </div>
                    <div class="grid radios">
                      <p>
                        <input
                          type="radio"
                          id="inPerson"
                          name="radio-group"
                          checked
                          v-model="book_form.medium"
                          value="In Person" :class="{ 'is-invalid': book_tour_submitted && $v.book_form.medium.$error }"
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
                          v-model="book_form.medium"  :class="{ 'is-invalid': book_tour_submitted && $v.book_form.medium.$error }" value="Video Chat"
                        />
                        <label class="color1 xsm-font" for="videoChat"
                          >Video Chat</label
                        >
                      </p>
                      <div v-if="book_tour_submitted && !$v.book_form.medium.required" class="form-error">Medium is required</div>
                    </div>

                    <app-button :action="submitBookTour"
                      type="button"
                      btnclass="xxsm-font green-btn s-bold hoverable"
                      text="Schedule a Tour"
                    >

                    </app-button>
                  </form>
                </div>

                <div
                  id="requestInfo"
                  class="tabcontent"
                  style="display: none"
                >
                  <form action="" class="form-tab">
                    <input type="text" class="color1" v-model="enquiry_form.name"
                      placeholder="Full Name" :class="{ 'is-invalid': enquiry_submitted && $v.enquiry_form.name.$error }" />
                          <div v-if="enquiry_submitted && !$v.enquiry_form.name.required" class="form-error">Name is required</div>
                    <div>
                       <input type="text" class="form-control" v-model="enquiry_form.phone"
                                        placeholder="Phone"
                                        :class="{ 'is-invalid': enquiry_submitted && $v.enquiry_form.phone.$error }"/>
                                            <div v-if="enquiry_submitted && !$v.enquiry_form.phone.required" class="form-error">Phone is required</div>
                    </div>
                    <div>
                         <input type="email" class="form-control" v-model="enquiry_form.email"
                                        placeholder="Email Address"
                                        :class="{ 'is-invalid': enquiry_submitted && $v.enquiry_form.email.$error }" />
                                            <div v-if="enquiry_submitted && !$v.enquiry_form.email.required" class="form-error">Email is required</div>
                    </div>
                    <div>
                        <textarea class="form-control"  rows="10" v-model="enquiry_form.message"
                            placeholder="Type in your request" :class="{ 'is-invalid': enquiry_submitted && $v.enquiry_form.message.$error }"></textarea>
                              <div v-if="enquiry_submitted && !$v.enquiry_form.message.required" class="form-error">Message is required</div>
                    </div>
                    <app-button
                      type="button"
                      btnclass="xxsm-font green-btn s-bold hoverable"
                      text=" Request info"

                    >

                    </app-button>
                  </form>
                </div> 
              </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs,requiredIf,numeric } from "vuelidate/lib/validators";
export default {
    props:['property'],
      data(){
        return{
            book_tour_submitted:false,
            enquiry_submitted:false,
            savingTour:false,
            savingEnquiry:false,
          book_form:{
            property_id:'',
            developer_id:'',
            name:"",
            email:"",
            phone:"",
            book_date:"",
            book_time:"",
            medium:''
        },
        enquiry_form :{
            property_id:'',
            name:"",
            email:"",
            phone:"",
            message:''
        }
        }
    },
    validations:{
        book_form:{
            name:{required},
            email:{required,email},
            phone:{required,numeric},
            book_date:{required},
            book_time:{required},
            medium:{required}
        },
        // enquiry_form:{
        //     name:{required},
        //     email:{required,email},
        //     phone:{required,numeric},
        //     message:{required}
        // }
    },
    methods: {
         submitBookTour(){
            console.log("am clickk")
             this.book_tour_submitted=true
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
             console.log("am valid")
            this.book_form.property_id = this.property.id
            this.savingTour = true;
            this.$store.dispatch("property/saveTourScheduleAction",this.book_form).then((res)=>{
                console.log("am sub")
                this.book_tour_submitted =false;
                 this.savingTour = false;
                this.book_form ={
                property_id:'',
                name:"",
                email:"",
                phone:"",
                book_date:"",
                book_time:"",
                medium:''
                }
                 this.$apptoast.success("Schedule sent successfully");
            }).catch((err)=>{
                 this.savingTour = false;
            })

        },
        submitEnquiry(){
            console.log("am en")
             this.enquiry_submitted=true
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            this.savingEnquiry = true;
            this.$store.dispatch("savePropertyEnquiryAction",this.enquiry_form).then((res)=>{
                toast.success("Schedule sent successfully");
                this.enquiry_submitted =false;
                 this.savingEnquiry = false;
                this.enquiry_form ={
                property_id:'',
                name:"",
                email:"",
                phone:"",
                book_date:"",
                book_time:"",
                medium:''
                }
            }).catch((err)=>{
                 this.savingEnquiry = false;
            })

        }
    },


    created(){
        this.book_form.property_id = this.property.id
        this.enquiry_form.property_id = this.property.id
        }
  }
</script>

<style lang="scss" scoped>
  .tour-form-label{
    float:left;
    // width:.125rem;
  }
</style>
