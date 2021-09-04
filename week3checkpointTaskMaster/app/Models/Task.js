import { generateId } from "../Utils/generateId.js"


export class Task{
  constructor(taskData){
    this.name = taskData.name 
    this.taskId = taskData.taskId
    this.id = taskData.id || generateId()
  }
  
  get Template(){
    return /*html*/`
    <ul>
      <li> ${this.name} </li>
    </ul> 
    `
  }
}