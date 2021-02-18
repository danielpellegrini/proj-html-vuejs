new Vue({
  el: '#app',
  data: {
    sliderSection1: [

        // './img/section1/slider_slide1_img2.png',
        // './img/section1/slider_slide1_img1.png',
        './img/section1/slider_slide2_img1.png',
        './img/section1/slider_slide2_img2.png',

    ],
    imagesIndex: 0
  },

  methods: {
    next: function() {
      if (this.imagesIndex >= this.sliderSection1.length - 1) {
        this.imagesIndex = 0;
      } else {
        this.imagesIndex += 1;
      }

    },
    previous: function() {
      if (this.imagesIndex < 1) {
        this.imagesIndex = this.sliderSection1.length - 1;
      } else {
        this.imagesIndex -= 1;
      }
    },

    activeDot: function(index) {
      if (index !== this.imagesIndex) {
        return 'fas fa-circle'
      } else {
        return 'fas fa-circle active'
      }
    },

    clickedDot: function(index) {
      this.imagesIndex = index;
    }

  }

});

Vue.config.devtools = true;
