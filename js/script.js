// new Vue({
//   el: '#app',
//   data: {

//     // sliderIndex: 0,
//     isHidden1: false,
//     isHidden2: true,
//     isHidden3: true,

//     sliderSection1: [

//      {
//         iconsA: [1, 2, 3, 4],
//         iconsB: [5, 6, 7, 8, 9],
//         imageA: ['slide1_img1'],
//         imageB: ['slide1_img2'],
//         topText: 'Welcome to Fable!',
//         middleText: 'Perfect Education',
//         bottomText: 'For Your Child'
//       },

//      {
//         icons: [10, 11, 12, 13, 14],
//         images: ['slide2_img1', 'slide2_img2'],
//         topText: 'Friendly Atmosphere',
//         middleText: 'Welcoming Place',
//         bottomText: 'For Every Child'
//       },

//      {
//         icons: [14, 15, 16, 17, 18],
//         images: ['slide3_img1', 'slide3_img2', 'slide3_img3'],
//         topText: 'Learning & Fun',
//         middleText: 'Learning Program',
//         bottomText: '& After-School Care'
//       }

//     ],

//     imagesList: [
//       '_01-690x506',
//       '_07-690x506',
//       '_08-690x506',
//     ],
//     imagesIndex: 0

//   },

//   methods: {



//     toggleSecondBg: function () {
//       // this.isHidden1 = !this.isHidden1
//       // this.isHidden2 = !this.isHidden2

//     },

//     toggleThirdBg: function () {
//       // this.isHidden3 = !this.isHidden3
//       // this.isHidden1 = !this.isHidden1

//     },

//     next: function() {
//       if (this.imagesIndex >= this.imagesList.length - 1) {
//         this.imagesIndex = 0;
//       } else {
//         this.imagesIndex += 1;
//       }

//     },

//     previous: function() {
//       if (this.imagesIndex < 1) {
//         this.imagesIndex = this.imagesList.length - 1;
//       } else {
//         this.imagesIndex -= 1;
//       }
//     },

//     clickedDot: function(index) {
//       this.imagesIndex = index;
//     }



//   },



// });

const vue = new Vue({
  el: "#app",
  data: {
    // Classes assigned to nav on scroll
    navBar: {
      collapse: false,
      open: false,
    },
    scrollState: 0, // Used to keep track of scroll position
    list: [
      { text: "A", color: "#2676cc" },
      { text: "B", color: "#d853e2" },
      { text: "C", color: "#ff7f23" },
      { text: "D", color: "#0d996a" },
      { text: "E", color: "#f73b8f" }
    ],
    index: 0,
    imagesList: [
      '_01-690x506',
      '_07-690x506',
      '_08-690x506',
    ],
    imagesIndex: 0
  },
  methods: {
    prev() {
      this.index -= 1;
      this.setIndex();
    },
    next() {
      this.index += 1;
      this.setIndex();
    },
    goto(index) {
      this.index = index;
      this.setIndex();
    },
    setIndex() {
      this.$refs.wrap.style.setProperty("--article-index", this.index);
    },
    initHammer() {
      let hammer = new Hammer.Manager(this.$refs.wrap);
      let swipe = new Hammer.Swipe();

      hammer.add(swipe);
      hammer.on("swipeleft", function() {
        if (vue.index !== vue.list.length - 1) {
          vue.next();
        }
      });
      hammer.on("swiperight", function() {
        if (vue.index !== 0) {
          vue.prev();
        }
      });
    },

    //  OLD VERSION SLIDER 
    nextSlide: function() {
      if (this.imagesIndex >= this.imagesList.length - 1) {
        this.imagesIndex = 0;
      } else {
        this.imagesIndex += 1;
      }
    },
    
    previousSlide: function() {
      if (this.imagesIndex < 1) {
        this.imagesIndex = this.imagesList.length - 1;
      } else {
        this.imagesIndex -= 1;
      }
    },

    clickedDot: function(index) {
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
    scrollHome() {
    },
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
  },
  mounted() {
    this.$refs.main.style.setProperty("--article-count", this.list.length);
    this.initHammer();
  },
  created() {
    window.addEventListener('scroll', () => {
      this.scrollDetect(this.scrollHome, this.scrollDown, this.scrollUp);
    })
  } 
});




Vue.config.devtools = true;


