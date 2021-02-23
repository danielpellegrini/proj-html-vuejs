new Vue({
  el: '#app',
  data: {

    sliderIndex: 0,

    sliderSection1: [
      {
        slider1: [{
          iconsA: [1, 2, 3, 4],
          iconsB: [5, 6, 7, 8, 9],
          imageA: ['slide1_img1'],
          imageB: ['slide1_img2'],
          topText: 'Welcome to Fable!',
          middleText: 'Perfect Education',
          bottomText: 'For Your Child'
        }],

        slider2: [{
          icons: [10, 11, 12, 13, 14],
          images: ['slide2_img1', 'slide2_img2'],
          topText: 'Friendly Atmosphere',
          middleText: 'Welcoming Place',
          bottomText: 'For Every Child'
        }],

        slider3: [{
          icons: [14, 15, 16, 17, 18],
          images: ['slide3_img1', 'slide3_img2', 'slide3_img3'],
          topText: 'Learning & Fun',
          middleText: 'Learning Program',
          bottomText: '& After-School Care'
        }]

      }

    ],

  },

  methods: {

    next: function() {


      // if (this.sliderIndex >= this.sliderSection1.length - 1) {
      //   this.sliderIndex = 0;
      // } else {
      //   this.sliderIndex += 1;
      // }
      //
      // return this.sliderIndex ++
    },

    previous: function() {
      // if (this.sliderIndex < 1) {
      //   this.sliderIndex = this.sliderSection1.length - 1;
      // } else {
      //   this.sliderIndex -= 1;
      // }

    },

    activeDot: function(index) {
      if (index !== this.sliderIndex) {
        return 'rectangle-active'
      } else {
        return 'rectangle'
      }
    },

    clickedDot: function(index) {
      this.sliderIndex = index;
    },




  },



});


Vue.config.devtools = true;
