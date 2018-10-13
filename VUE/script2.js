// var app = new Vue({
// });

//     data: {
//         counter: 0,
//     },
    
    
//     methods: {
//         suma: function() {
//             this.counter++;
//         },
//         resta: function(){
//             if (this.counter > 0) {
//                 this.counter--;
//             }
//         }
//     },
// })


// var directivas = new Vue({
//     el: '#directivas',
//     data: {
//         visible: false,
//         other: true,
//     },
//     methods: {
//         toggle: function (){
//            if (this.visible == true){
//                 this.visible = false;
//             }else{
//                 this.visible = true;
//             }
//         },
//     },
// });

var directivas = new Vue({
    el: '#directivas',
    data: {
        newTask: '',
        todos: [
            // {
            //     id: 1,
            //     name: 'terminar mi curso de Devcamp',
            // },
            // {
            //     id: 2,
            //     name: 'cenar, tengo hambre',
            // },
            // {
            //     id: 3,
            //     name: 'ver series',
            // },
        ]
    },

    methods: {
        addTask: function(task){ 
            if (task){
                var taskObject = {
                    name: task,
                    completed: false
                };
                this.todos.push(taskObject);
                this.newTask = '';
            }
        }
    },

    // computed: {
    //     uncompletedTodo: function() {
    //         return this.todo.filter (function (task) {
    //             return task.completed == false;
    //         })
    //     }
    // }
    // })
    computed: {
        completedTasks: function(){
            return this.todos.filter(function(task){
                return task.completed;
            });
        },
        uncompletedTasks: function(){
            return this.todos.filter(function(task){
                return task.completed == false;
            });
        }
    },
})