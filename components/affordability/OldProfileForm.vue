<template>
  <div>
       <form action="#">
               <div class='row'>
                  <div class=' col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <label class="form-control-label">First Name</label>
                        <input type='text' v-model="form.firstname" class='form-control'
                        placeholder='First Name' :class="{ 'is-invalid': submitted && $v.form.firstname.$error }" />
                         <div v-if="submitted && !$v.form.firstname.required" class="form-error">First name is required</div>
                  </div>

                  <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <label class="form-control-label">Last Name</label>
                        <input type='text' v-model="form.lastname" class='form-control'
                        placeholder='Last Name'  :class="{ 'is-invalid': submitted && $v.form.lastname.$error }"/>
                          <div v-if="submitted && !$v.form.lastname.required" class="form-error">Last name is required</div>
                  </div>

                  <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <label class="form-control-label">Email</label>
                        <input type='email' v-model="form.email" class='form-control'
                        placeholder='Email Address'  :class="{ 'is-invalid': submitted && $v.form.email.$error }"/>
                         <div v-if="submitted && !$v.form.email.required" class="form-error">Email is required</div>
                         <div v-if="submitted && !$v.form.email.email" class="form-error">Email is invalid</div>
                  </div>

                  <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
                            <label class="form-control-label">Date of Birth</label>
                        <input type='text' readonly v-model="dob" class='form-control '
                        placeholder='Date of Birth' />
                  </div>

                  <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
                         <label class="form-control-label">Phone Number</label>
                        <input type='text' v-model="form.phone" class='form-control '
                        placeholder='phone number' :class="{ 'is-invalid': submitted && $v.form.phone.$error }" />
                          <div v-if="submitted && !$v.form.phone.required" class="form-error">Phone number is required</div>
                          <div v-if="submitted && !$v.form.phone.numeric" class="form-error">Phone number must be a number</div>
                  </div>

                  <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                         <label class="form-control-label">Employment Status</label>
                        <select  v-model="form.employment_status" class='form-control' :class="{ 'is-invalid': submitted && $v.form.employment_status.$error }">
                              <option value="">Employment Status</option>
                              <option value="employed">Employed</option>
                              <option value="unemployed">Unemployed</option>
                              <option value="self employed">Self Employed</option>
                        </select>
                        <div v-if="submitted && !$v.form.employment_status.required" class="form-error">Employment Status is required</div>
                  </div>

               </div>
              <div class='form-group row'>

              <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12 ' v-if="form.employment_status=='employed'">
                    <label class="form-control-label">Employer Name</label>
                  <input type='text' v-model="form.employer_name" class='form-control '
                  placeholder='Employer name' :class="{ 'is-invalid': submitted && $v.form.employer_name.$error }" />
                    <div v-if="submitted && !$v.form.employer_name.required" class="form-error">Employer name is required</div>

            </div>

              <div class=' col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                      <label class="form-control-label"> Are you a RSA holder ?</label>
                  <select  v-model="form.is_rsa_holder" class='form-control' :class="{ 'is-invalid': submitted && $v.form.is_rsa_holder.$error }">
                        <!-- <option  selected></option> -->
                        <option value="1">Yes</option>
                        <option value="0" selected>No</option>
                  </select>
                  <div v-if="submitted && !$v.form.is_rsa_holder.required" class="form-error">Option is required</div>
            </div>

              <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12 topme' v-if="form.is_rsa_holder==1">
                      <label class="form-control-label">Pension Fund Administrator</label>
                  <input type='text' v-model="form.pfa_name" class='form-control '
                  placeholder='PFA' :class="{ 'is-invalid': submitted && $v.form.pfa_name.$error }" />
                    <div v-if="submitted && !$v.form.pfa_name.required" class="form-error">PFA Name is required</div>

            </div>
              </div>



            <div class='form-group row'>
                  <div class='col-lg-12 col-md-6 col-sm-12 col-xs-12'>
                      <label class="form-control-label">Address</label>
                      <input type='text' v-model="form.address" class='form-control '
                        placeholder='Address' :class="{ 'is-invalid': submitted && $v.form.address.$error }" />
                      <div v-if="submitted && !$v.form.address.required" class="form-error">Address is required</div>
                  </div>
            </div>
       </form>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
