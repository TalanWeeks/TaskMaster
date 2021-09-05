import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksServices.js"


// export class TasksController{
//   constructor(){
//   }

//   addTask(taskData){
//     tasksService.addTask(taskData)
//   }
//     createTask(listId){      
//       event.preventDefault()
//       let form = event.target

//       let taskData = {
//         //@ts-ignore
//         name: form.name.value,
//         listId: listId
        
//       }
//     tasksService.addTask(taskData)
//     console.log('task creation', ProxyState.tasks)
//     //@ts-ignore
//     form.reset()
//   }
// }



// NOTE TESETER


function _drawTask(){

  let tasks = ProxyState.tasks;
  let taskTemplate = ''

  tasks.forEach(task => taskTemplate += task.taskTemplate)
  document.getElementById("tasks").innerHTML= taskTemplate
}

export class TasksController{

  constructor(){
    ProxyState.on("tasks",_drawTask);
   
  }

    addListCard(taskData){
      tasksService.addTask(taskData)
    }
    
    createTask(listDataId){
      event.preventDefault()
      let form = event.target
      
      let taskData = {
        //@ts-ignore
        name: form.name.value,
        //@ts-ignore        

        id: listDataId
      }

      tasksService.addTask(taskData)      
        //@ts-ignore
      form.reset()
    }
  
}