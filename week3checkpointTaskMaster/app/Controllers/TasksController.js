import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksServices.js"


export class TasksController{
  constructor(){
    const cb = document.getElementById('checked');
    console.log(cb);
  }

  addTask(taskData){
    tasksService.addTask(taskData)
  }
    createTask(listId){      
      event.preventDefault()
      let form = event.target
      
      let taskData = {
        //@ts-ignore
        name: form.name.value,
        id: listId
        
      }
    tasksService.addTask(taskData)
    console.log('task creation', ProxyState.tasks)
    //@ts-ignore    
  }
  deleteTask(listDataId){
    tasksService.deleteTask(listDataId)
    // @ts-ignore
    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'success',
    //   title: 'Your expensive food is delorted',
    //   showConfirmButton: false,
    //   timer: 1500
    // })
  }
}



// NOTE TESTER


// function _drawTask(){

//   let tasks = ProxyState.tasks;
//   let taskTemplate = ''

//   tasks.forEach(task => taskTemplate += task.taskTemplate)
//   document.getElementById("tasks").innerHTML= taskTemplate
// }

// export class TasksController{

//   constructor(){
//     ProxyState.on("tasks",_drawTask);
   
//   }

//     addListCard(taskData){
//       tasksService.addTask(taskData)
//     }
    
//     createTask(listDataId){
//       event.preventDefault()
//       let form = event.target
      
//       let taskData = {
//         //@ts-ignore
//         name: form.name.value,
//         //@ts-ignore        

//         id: listDataId
//       }

//       tasksService.addTask(taskData)      
//         //@ts-ignore
//       form.reset()
//     }
  
// }