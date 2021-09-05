import { generateId } from "../Utils/generateId.js"
import { ProxyState } from "../AppState.js"


export class Task{
  constructor(taskData){
    this.name = taskData.name     
    this.id = taskData.id || generateId()
  }
  
  get taskTemplate(){
    return /*html*/`
    <ul>
      <li> ${this.name} </li>
    </ul> 
    `
  }
}