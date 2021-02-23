new Vue({
  el: '#app',
  data: {

    "sliderIndex": 0,

    "sliderSection1": [
      {
        "slider1": [{
          "icons": [1, 2, 3, 4, 5, 6, 7, 8, 9],
          "topText": 'Welcome to Fable!',
          "middleText": 'Perfect Education',
          "bottomText": 'For Your Child'
        }],

        "slider2": [{
          "icons": [10, 11, 12, 13, 14],
          "topText": 'Friendly Atmosphere',
          "middleText": 'Welcoming Place',
          "bottomText": 'For Every Child'
        }],

        "slider3": [{
          "icons": [14, 15, 16, 17, 18],
          "topText": 'Learning & Fun',
          "middleText": 'Learning Program',
          "bottomText": '& After-School Care'
        }]

      }

    ],

  },

  methods: {

    next: function() {

      if (this.sliderIndex >= this.sliderSection1.length - 1) {
        this.sliderIndex = 0;
      } else {
        this.sliderIndex += 1;
      }

      return this.sliderIndex ++
    },

    previous: function() {
      if (this.sliderIndex < 1) {
        this.sliderIndex = this.sliderSection1.length - 1;
      } else {
        this.sliderIndex -= 1;
      }

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
