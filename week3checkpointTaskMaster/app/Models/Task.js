import { generateId } from "../Utils/generateId.js"
import { ProxyState } from "../AppState.js"


export class Task{
  constructor(taskData){
    this.name = taskData.name     
    this.id = taskData.id
  }
  
  get taskTemplate(){
    return /*html*/`
    <div class="p-2">
    <input type="checkbox" id="task"value=''>
    <label for="task">${this.name}</label>
    </div>
    `
  }
  
}