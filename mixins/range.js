export default{
  methods:{
    isOlderEdgeOrIE() {
      return (
        window.navigator.userAgent.indexOf("MSIE ") > -1 ||
        !!navigator.userAgent.match(/Trident.*rv\:11\./) ||
        window.navigator.userAgent.indexOf("Edge") > -1
      );
    },

    valueTotalRatio(value, min, max) {
      return ((value - min) / (max - min)).toFixed(2);
    },

    getLinearGradientCSS(ratio, leftColor, rightColor) {
      return [
        "-webkit-gradient(",
        "linear, ",
        "left top, ",
        "right top, ",
        "color-stop(" + ratio + ", " + leftColor + "), ",
        "color-stop(" + ratio + ", " + rightColor + ")",
        ")",
      ].join("");
    },

    updateRangeEl(rangeEl) {
      var ratio = this.valueTotalRatio(rangeEl.value, rangeEl.min, rangeEl.max);

      rangeEl.style.backgroundImage = this.getLinearGradientCSS(
        ratio,
        "#3AAA35",
        "#9FC7DA"
      );
    },

    initRangeEl() {
      const allRanges2 = window.document.querySelectorAll(".range-wrap");
      //  textEl = document.querySelector('input[type=text]');
      // const allRanges2 = this.$refs.range_wrap;
      console.log(allRanges2);

      allRanges2.forEach((wrap2) => {
        const rangeEl = wrap2.querySelector("input[type=range]");

        if (this.isOlderEdgeOrIE()) {
          rangeEl.style.height = "20px";
          // IE 11/10 fires change instead of input
          // https://stackoverflow.com/a/50887531/3528132
          rangeEl.addEventListener("change", function (e) {
            rangeEl.value = e.target.value;
          });
          rangeEl.addEventListener("input", function (e) {
            rangeEl.value = e.target.value;
          });
        } else {
          this.updateRangeEl(rangeEl);
         var t = (b)=> this.updateRangeEl(b);
          rangeEl.addEventListener("input", function (e) {
            t(e.target);
            rangeEl.value = e.target.value;
          });
        }
      });

      // var textEl = document.querySelector('input[type=text]');

      /**
       * IE/Older Edge FIX
       * On IE/Older Edge the height of the <input type="range" />
       * is the whole element as oposed to Chrome/Moz
       * where the height is applied to the track.
       *
       */
    },
    setitUp(){
      this.initRangeEl();
        const allRanges = document.querySelectorAll(".range-wrap");
        allRanges.forEach((wrap) => {
          const range = wrap.querySelector(".range");
          const bubble = wrap.querySelector(".bubble");
          const bubbled = wrap.querySelector(".bubbled");

          range.addEventListener("input", () => {
            this.setBubble(range, bubble, bubbled);
          });
          this.setBubble(range, bubble, bubbled);
        });
    },

    //

    // range tool tip





    setBubble(range, bubble, bubbled) {
      const val = range.value;
      const min = range.min ? range.min : 0;
      const max = range.max ? range.max : 100;
      const newVal = Number(((val - min) * 100) / (max - min));
      bubble.innerHTML = `${val}`;

      // Sorta magic numbers based on size of the native UI thumb
      bubbled.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }
  }
}
