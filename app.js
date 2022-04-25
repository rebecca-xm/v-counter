const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      text: '',
      altText: '',
      confirmedText: '',
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
      this.altText = ''
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
    confirmedtext() {
      if (this.text === '' || this.altText === '') {
        return ''
      } else {
        return this.text + ' ' + this.altText
      }
    }
  },
  watch: {
    // text(value) {
    //   if (value === '') {
    //     this.confirmedText = ''
    //   } else {
    //     // this.confirmedText = value + ' ' + 'is being watched by Vue'
    //     this.confirmedText = value + ' ' + this.altText
    //   }
    // },
    // altText(value) {
    //   if (value === '') {
    //     this.confirmedText = ''
    //   } else {
    //     this.confirmedText = this.text + ' ' + value
    //   }
    // }
    counter(value) {
      if (value > 100) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 1000);
      }
    }
  }
});

app.mount('#events');

//* https://vuejs.org/guide/essentials/event-handling.html
//* https://vuejs.org/guide/essentials/computed.html
//* https://vuejs.org/guide/essentials/watchers.html