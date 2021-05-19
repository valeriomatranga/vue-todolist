const app = new Vue({
    el:'#app',


    data:{
        status: "incomplete",
        promemoria: "",
        tasks:[
            'prendere le chiavi',
            'fare la spesa',
            'pagare le bollette'
        ]
    },
    
    methods:{
        insertMessage: function(){
            this.tasks.push(this.promemoria);
        },

        remove: function(index){
            this.tasks.splice(index,1);
        },

        complete: function(index){
            if(this.status === 'incomplete'){
                this.status = 'green'
            }
        }
    }
    
})
