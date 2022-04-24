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
  },
  computed: {
    // confirmedtext() {
    //   if (this.text === '') {
    //     return ''
    //   } else {
    //     return this.text + ' ' + 'is being computed by Vue'
    //   }
    // }
  },
  watch: {
    text(value) {
      if (value === '') {
        this.confirmedText = ''
      } else {
        this.confirmedText = value + ' ' + 'is being watched by Vue'
      }
    }
  }
});

app.mount('#events');

//* https://vuejs.org/guide/essentials/event-handling.html
//* https://vuejs.org/guide/essentials/computed.html
//* https://vuejs.org/guide/essentials/watchers.html