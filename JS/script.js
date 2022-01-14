/* Partendo dal markup qui in allegato (di cui in passato abbiamo
 fatto una versione simile in js plain), rifare lo slider ma
  questa volta usando Vue. */

new Vue({
  el: "#app",
  data: {
    currentIndex: 0,
    image: [
      "https://unsplash.it/600?image=1",
      "https://unsplash.it/600?image=42",
      "https://unsplash.it/600?image=83",
      "https://unsplash.it/600?image=40",
      "https://unsplash.it/600?image=45",
    ],
  },
  methods: {
    bwButton: function () {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.image.length - 1;
      }
    },
    fwButton: function () {
      this.currentIndex++;
      if (this.currentIndex > this.image.length - 1) {
        this.currentIndex = 0;
      }
    },
    timeOut: function () {
      setTimeout(() => {
        this.currentIndex++;
      }, 3000);
    },
  },
});
