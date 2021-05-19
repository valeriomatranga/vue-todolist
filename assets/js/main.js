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
            if(this.promemoria.length != ""){
                this.tasks.push(this.promemoria);
                this.promemoria = ''
            }else{
                alert('Devi inserire qualcosa!');
            }
        },

        remove: function(index){
            this.deletTasks.push(this.tasks[index])
            this.tasks.splice(index,1);
        },

        complete: function(index){
            this.completeTasks.push(this.tasks[index])
            
        },

        restore: function(index){
            this.tasks.push(this.deletTasks[index])
            this.deletTasks.splice(index,1);
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
