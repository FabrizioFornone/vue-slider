/* Partendo dal markup qui in allegato (di cui in passato abbiamo
 fatto una versione simile in js plain), rifare lo slider ma
  questa volta usando Vue. */

new Vue({
  el: "#app",
  data: {
    test: "Ecco il test",
    currentIndex: 0,
    image: [
      "https://unsplash.it/600?image=10",
      "https://unsplash.it/600?image=20",
      "https://unsplash.it/600?image=30",
      "https://unsplash.it/600?image=40",
      "https://unsplash.it/600?image=50",
    ],
  },
  methods: {
    bwButton: function () {
        this.currentIndex--;
    },
    fwButton: function () {
        this.currentIndex++;
    },

  },
});
