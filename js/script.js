new Vue({
  el: '#app',
  data: {
    sliderSection1: [
        // './img/section1/slider_slide1_img2.png',
        // './img/section1/slider_slide1_img1.png',
        './img/section1/slider_slide2_img1.png',
        './img/section1/slider_slide2_img2.png',
    ],
    imagesIndex: 0,

    map: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',   
    ]
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
        return 'rectangle'
      } else {
        return 'rectangle'
      }
    },

    clickedDot: function(index) {
      this.imagesIndex = index;
    }

  }

});

Vue.config.devtools = true;
