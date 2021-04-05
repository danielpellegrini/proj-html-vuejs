new Vue({
  el: '#app',
  data: {
      
    // Navbar
    navBar: {
      collapse: false,
      open: false,
    },
    scrollState: 0, // Used to keep track of scroll position
  
    bg1: false,
    bg2: true,
    bg3: true,

    currentImageIdx: 0,

    sliderSection1: [
      {
        iconsA: [1, 2, 3, 4],
        iconsB: [5, 6, 7, 8, 9],
        imageA: ['slide1_img1'],
        imageB: ['slide1_img2'],
      },
      {
        icons: [10, 14, 11, 12, 13],
        images: ['slide2_img1', 'slide2_img2'],
      },
      {
        icons: [14, 15, 16, 17, 18],
        images: ['slide3_img1', 'slide3_img2', 'slide3_img3'],
      }
    ],

    imagesList: [
      '_01-690x506',
      '_07-690x506',
      '_08-690x506',
    ],
    imagesIndex: 0,
    

  },
  methods: {

    //  OLD VERSION SLIDER 
    nextSlide: function () {
      if (this.imagesIndex >= this.imagesList.length - 1) {
        this.imagesIndex = 0;
      } else {
        this.imagesIndex += 1;
      }
    },

    previousSlide: function () {
      if (this.imagesIndex < 1) {
        this.imagesIndex = this.imagesList.length - 1;
      } else {
        this.imagesIndex -= 1;
      }
    },

    clickedDot: function (index) {
      this.imagesIndex = index;
    },

    // NAVBAR scroll effect

    scrollDetect(home, down, up) {
      // Current scroll position
      const currentScroll = this.scrollTop();
      if (this.scrollTop() === 0) {
        home();
      } else if (currentScroll > (this.scrollState)) {
        down();
      } else {
        up();
      }
      // Set previous scroll position
      this.scrollState = this.scrollTop();
    },
    // Returns current scroll position
    scrollTop() {
      return window.scrollY;
    },
    // Called when scroll is in initial position
    scrollHome() {},
    // Called when scrolled down
    scrollDown() {
      this.navBar.collapse = true;
      this.navBar.open = false;
    },
    // Called when scolled up
    scrollUp() {
      this.navBar.collapse = false;
      this.navBar.open = true;
    }, 

    // main background slider
    next: function() {
      this.currentImageIdx += 1;
      if(this.currentImageIdx > this.images.length - 1) {
        this.currentImageIdx = 0
      }  
    },
    prev: function() {
      this.currentImageIdx -= 1;
      if(this.currentImageIdx < 0) {
        this.currentImageIdx = this.images.length - 1  // ultima posizione dell'array
      }
    },
    selectImageIdx: function(newIndex) {
      this.currentImageIdx = newIndex;
    }
    
    

  },
  mounted() {
    // this.classChange();
    // this.loopToggle();
  },

  created() {
    window.addEventListener('scroll', () => {
      this.scrollDetect(this.scrollHome, this.scrollDown, this.scrollUp);
    })
  },

});




Vue.config.devtools = true;