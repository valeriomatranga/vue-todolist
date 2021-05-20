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
                this.tasks.unshift(this.promemoria);
                this.promemoria = ''
            }else{
                alert('Devi inserire qualcosa!😉');
            }
        },

        remove: function(index){
            this.deletTasks.unshift(this.tasks[index])
            this.tasks.splice(index,1);
        },

        complete: function(index){
            this.completeTasks.unshift(this.tasks[index])
            this.tasks.splice(index,1);
        },

        restore: function(index){
            this.tasks.unshift(this.deletTasks[index])
            this.deletTasks.splice(index,1);
        },

        delet: function(){
            const cancella = confirm('Vuoi cancellare davvero tutto!')
            
            if(cancella){
                this.deletTasks = [];
            }
        },



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
