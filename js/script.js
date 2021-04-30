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
        imageA: ['slide2_img1'],
        imageB: ['slide2_img2'],
        toggle: 'hidden'
      },
      {
        icons: [14, 15, 16, 17, 18],
        imageA: ['slide3_img1'],
        imageB: ['slide3_img2'],
        imageC: ['slide3_img3'],
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
    toggleFade: true,
    my_timer: 0,
    my_timer2: 0,

    isClicked: false,
    isDefault: true
  },
  methods: {


    // ------------------------ MAIN BG SLIDER
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
      this.resetTimer();
      this.timer();
    },

    prev(){
      if (this.currentImageIdx < 1) {
        this.currentImageIdx = this.sliderSection1.length - 1;
      } else {
        this.currentImageIdx -= 1;
      }
      this.toggleClass();
      this.resetTimer();
      this.timer();
    },

    selectImageIdx(newIndex) {
      this.currentImageIdx = newIndex;
      this.toggleClass();
      this.resetTimer();
      this.timer();
    },

    timer() {
      this.my_timer = setInterval(() => {
        this.next();
      }, 7000);
    },

    resetTimer() {
      clearInterval(this.my_timer);
    },

    //  ------------------------ BOTTOM SLIDER
    nextSlide() {
      if (this.imagesIndex >= this.imagesList.length - 1) {
        this.imagesIndex = 0;
      } else {
        this.imagesIndex += 1;
      }
      this.resetTimer2();
      this.timer2();
      this.toggleEffect1();
    },

    previousSlide() {
      if (this.imagesIndex < 1) {
        this.imagesIndex = this.imagesList.length - 1;
      } else {
        this.imagesIndex -= 1;
      }
      this.resetTimer2();
      this.timer2();
    },

    clickedDot(index) {
      this.imagesIndex = index;
      this.resetTimer2();
      this.timer2();
    },

    toggleEffect1() {
      this.toggleFade = !this.toggleFade;
    },

    timer2() {
      this.my_timer2 = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },

    resetTimer2() {
      clearInterval(this.my_timer2);
    },

    isSelected() {
      this.isClicked = !this.isClicked;
      this.isDefault = !this.isDefault;
    },

    // ------------------------ NAVBAR COLLAPSE EFFECT
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
    this.timer();    
    this.timer2();    
  },

  created() {
    window.addEventListener('scroll', () => {
      this.scrollDetect(this.scrollHome, this.scrollDown, this.scrollUp);
    })
  },

});




Vue.config.devtools = true;