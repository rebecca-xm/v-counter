const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter++
    },
    reduce() {
      this.counter--
    },
    addFive(num) {
      // this.counter = this.counter + 5
      this.counter = this.counter + num
    },
    reduceFive(num) {
      // this.counter = this.counter - 5
      this.counter = this.counter - num
    }
  }
});

app.mount('#events');
