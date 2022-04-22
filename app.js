const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      text: ''
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
      // qualora fosse necessario passare un secondo parametro alla funzione
      // e (event) andrebbe richiamato con la parola chiave $event nella parte HTML
      // es => v-on:input="outputText($event, 'altro argomento')"
    }
  }
});

app.mount('#events');
