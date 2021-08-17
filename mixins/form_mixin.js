
export default{
  data(){
    return{
      resultType: 'Years',
        have_additional: 0,
        have_loan: 0,
    }
  },
    computed:{
      min() {
          if (this.resultType != '%') {
            return this.min_range;
          } else {
            return this.min_range + ' ' + this.resultType;
          }
        },
        max() {
          if (this.resultType != '%') {
            return !isNaN(this.max_range) && this.max_range > 0 ? this.max_range : 20;
          } else {
            return this.max_range + ' ' + this.resultType;
          }
        },
    },
    methods:{
        calculateAge(date_of_birth) {
            let today = new Date();
            let birthday = new Date(date_of_birth);
            let age = today.getFullYear() - birthday.getFullYear();
            return age;
          },
          calculateMaxTenure(v) {
            let retire_age = 55;
            let age_diff = retire_age - v;
            if (age_diff > 30) {
              return 30;
            }
            return age_diff;
          },
            removeCommaFromNumber(v) {
                var stringValue = v.toString();
                return parseInt(stringValue.replace(/,/g, ""));
              },
            formatToCommaSeperated(val) {
                if(val){
                    const result = val.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    return result;
                }
                return ''



              },

            currencyFormat(v) {
                if (!isNaN(v)) {
                  return Number(v).toLocaleString("en");
                }
              },

          mapIncomingDataToForm(form, data) {
            // console.log(data);
            let ob = Object.entries(data);
            for (const [key, value] of ob) {
              if (key in form) {
                form[key] = value
              }
              //    form[key] = value;
            }

          },
          scrollErrorSection(){
            this.$nextTick(() => {
              window.scrollTo(document.querySelector('.is-invalid').offsetTop, 0);
              // let domRect = document.querySelector('.is-invalid').getBoundingClientRect();
              // window.scrollTo(
              //   domRect.left + document.documentElement.scrollLeft,
              //   domRect.top + document.documentElement.scrollTop
              // );
            })
          }


    }
}
