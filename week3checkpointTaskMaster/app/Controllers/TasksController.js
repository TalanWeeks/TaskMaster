import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksServices.js"


export class TasksController{
  constructor(){
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
        listId: listId
        
      }
    tasksService.addTask(taskData)
    console.log('task creation', ProxyState.lists)
    //@ts-ignore
    form.reset()
  }
}