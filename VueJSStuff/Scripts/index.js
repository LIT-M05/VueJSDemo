new Vue({
    el: '#app',
    data: {
        message: 'Hello from Vue!!',
        numbers: [1, 2, 31, 2, 2324],
        min: '',
        max: '',
        randomNumbers: []
    },
    methods: {
        reverseClick: function () {
            this.message = this.message.split('').reverse().join('');
        },

        sortClick: function() {
            this.numbers.sort((a, b) => a - b);
        },

        addRando: function () {
            const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
            this.numbers.push(rand(1, 100));
        },

        addRandomBetween: function() {
            const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
            const newRand = rand(parseInt(this.min), parseInt(this.max));
            this.randomNumbers.unshift(newRand);
        }
    }
});


