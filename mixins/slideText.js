export default{
  data(){
    return{
        slideIndex=1
    }
  },
  methods:{

    plusSlides(n) {
      showSlides(this.slideIndex += n);
    },

    currentSlide(n) {
      showSlides(this.slideIndex = n);
    },

    showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) {
        this.slideIndex = 1
      }
      if (n < 1) {
        this.slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slides[this.slideIndex - 1].style.display = "flex";
    }
  }
}
