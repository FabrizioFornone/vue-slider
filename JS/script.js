/* Partendo dal markup qui in allegato (di cui in passato abbiamo
 fatto una versione simile in js plain), rifare lo slider ma
  questa volta usando Vue. */

new Vue({
  el: "#app",
  data: {
    currentIndex: 0,
    image: [
      "https://unsplash.it/600?image=10",
      "https://unsplash.it/600?image=20",
      "https://unsplash.it/600?image=30",
      "https://unsplash.it/600?image=40",
      "https://unsplash.it/600?image=50",
    ],
    shots: `<span
    :class="['mx-2','border', 'rounded-circle', 'currentIndex === 1' ? 'active' : 'disable']"
  ></span>`
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
      if (this.currentIndex > image.length - 1) {
        this.currentIndex = 0;
      }
    },
  },
});
