var app = new Vue({
    el: '#biography',
    data:{
        numberMember: 0
    },
    methods: {
        memberChange(number){
            this.numberMember = number;
        }
    }
});