const app = new Vue({
    el:'#app',

    data:{
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

        remove: function(){
            this.task.splice(index,1);
        }
    }
    
})
