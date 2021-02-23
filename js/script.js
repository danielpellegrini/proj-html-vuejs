new Vue({
  el: '#app',
  data: {

    sliderIndex: 0,
    isHidden1: false,
    isHidden2: true,
    isHidden3: true,

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
    imagesList: [
      '_01-690x506',
      '_07-690x506',
      '_08-690x506',
    ],
    imagesIndex: 0

  },

  methods: {

    toggleSecondBg: function () {
      this.isHidden1 = !this.isHidden1
      this.isHidden2 = !this.isHidden2

    },

    toggleThirdBg: function () {
      this.isHidden3 = !this.isHidden3
      this.isHidden1 = !this.isHidden1

    },

    next: function() {
      if (this.imagesIndex >= this.imagesList.length - 1) {
        this.imagesIndex = 0;
      } else {
        this.imagesIndex += 1;
      }

    },

    previous: function() {
      if (this.imagesIndex < 1) {
        this.imagesIndex = this.imagesList.length - 1;
      } else {
        this.imagesIndex -= 1;
      }
    },

    clickedDot: function(index) {
      this.imagesIndex = index;
    }



  },



});


Vue.config.devtools = true;
