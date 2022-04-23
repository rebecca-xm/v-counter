const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      text: '',
      confirmedText: ''
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
    },
    outputText(e) {
      this.text = e.target.value
    },
    submitForm(e) {
      alert('Submitted!')
      // e.preventDefault()
    },
    confirmText() {
      this.confirmedText = this.text
    },
    resetText() {
      this.text = ''
    }
  }
});

app.mount('#events');

//* https://vuejs.org/guide/essentials/event-handling.html