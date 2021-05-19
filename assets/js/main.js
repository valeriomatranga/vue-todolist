const app = new Vue({
    el:'#app',


    data:{
        status: "incomplete",
        promemoria: "",
        tasks:[
            'prendere le chiavi',
            'fare la spesa',
            'pagare le bollette'
        ],
        deletTasks:[],
        completeTasks:[],

    },
    
    methods:{
        insertMessage: function(){
            this.tasks.push(this.promemoria);
        },

        remove: function(index){
            this.deletTasks.push(this.tasks[index])
            this.tasks.splice(index,1);
        },

        complete: function(index){
            this.completeTasks.push(this.tasks[index])
            
        }
    },

    mounted(){
        document.addEventListener('keyup', (e) =>{
            let tasto = e.key;
            //console.log(tasto);
            if(tasto === 'Enter'){
                this.insertMessage()
            }
        })
    }
    
})
