var app = new Vue({
    el: '#biography',
    data:{
        numberMember: 0,
        bioPhoto: 'bioPhoto'
    },
    methods: {
        memberChange(number){
            this.numberMember = number;
        }
    }
});