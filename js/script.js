new Vue({
  el: '#app',
  data: {
      
    // Navbar
    navBar: {
      collapse: false,
      open: false,
    },
    scrollState: 0, // Used to keep track of scroll position

    bg0: false,
    bg1: true,
    bg2: true,

    sliderSection1: [
      {
        iconsA: [1, 2, 3, 4],
        iconsB: [5, 6, 7, 8, 9],
        imageA: ['slide1_img1'],
        imageB: ['slide1_img2'],
        toggle: 'visible'
      },
      {
        icons: [10, 14, 11, 12, 13],
        images: ['slide2_img1', 'slide2_img2'],
        toggle: 'hidden'
      },
      {
        icons: [14, 15, 16, 17, 18],
        images: ['slide3_img1', 'slide3_img2', 'slide3_img3'],
        toggle: 'hidden'
      }
    ],

    currentImageIdx: 0,
    imagesList: [
      '_01-690x506',
      '_07-690x506',
      '_08-690x506',
    ],
    imagesIndex: 0,
    

  },
  methods: {


    // MAIN BG SLIDER
    toggleClass() {      
      if (this.currentImageIdx === 0) {
        this.bg0 = false;
        this.bg1 = true;
        this.bg2 = true;
      };
      if (this.currentImageIdx === 1 ) {
        this.bg0 = true;
        this.bg1 = false;
        this.bg2 = true;
      };
      if (this.currentImageIdx === 2 ) {
        this.bg0 = true;
        this.bg1 = true;
        this.bg2 = false;
      };
      // console.log(this.currentImageIdx);      
    },

    next() {
      if (this.currentImageIdx >= this.sliderSection1.length - 1) {
        this.currentImageIdx = 0;
      } else {
        this.currentImageIdx += 1;
      }  
      this.toggleClass();
    },
    prev(){
      if (this.currentImageIdx < 1) {
        this.currentImageIdx = this.sliderSection1.length - 1;
      } else {
        this.currentImageIdx -= 1;
      }
      this.toggleClass();
    },
    selectImageIdx(newIndex) {
      this.currentImageIdx = newIndex;
      this.toggleClass();
    },

    //  BOTTOM SLIDER
    nextSlide() {
      if (this.imagesIndex >= this.imagesList.length - 1) {
        this.imagesIndex = 0;
      } else {
        this.imagesIndex += 1;
      }
    },

    previousSlide() {
      if (this.imagesIndex < 1) {
        this.imagesIndex = this.imagesList.length - 1;
      } else {
        this.imagesIndex -= 1;
      }
    },

    clickedDot(index) {
      this.imagesIndex = index;
    },

    // NAVBAR COLLAPSE EFFECT
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
    // Called when scrolled up
    scrollUp() {
      this.navBar.collapse = false;
      this.navBar.open = true;
    }, 
  },
  mounted() {
    

  },

  created() {
    window.addEventListener('scroll', () => {
      this.scrollDetect(this.scrollHome, this.scrollDown, this.scrollUp);
    })
  },

});




Vue.config.devtools = true;