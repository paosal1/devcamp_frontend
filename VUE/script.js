var app = new Vue({
el: '#app',
data: {
hello: 'Hola',
name: '',

},

methods: {
    changeGreeting: function (name){
      this.name = name;  
    },

},

computed:{

},

});