var app = new Vue({
    el: '#random',
    data:{
        inputModel: "",
        titles: window.titles
    },
    methods: {
        ClickMe(){
            this.inputModel = this.titles[Math.floor(Math.random() * this.titles.length)];
        }
    }
});