import { generateId } from "../Utils/generateId.js"
import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksServices.js"


export class Task{
  constructor(taskData){
    this.name = taskData.name     
    this.id = taskData.id ||generateId()

    
  }
  
  
  get taskTemplate(){
    return /*html*/`
    <div class="p-2">
      <label for ="checked">
      </label>
        <input type="checkbox" id="checked" class="checked" value='1' onclick="app.tasksService.checkedOrNot()">
      <label class="p-2"for="task">${this.name}</label>
      <i class="mdi mdi-delete mdi-16px text-dark selectable"
      onclick="app.tasksController.deleteTask('${this.id}')"></i>
    </div>
    `
  }
  
  
}