import { generateId } from "../Utils/generateId.js";
import { ProxyState } from "../AppState.js"

export class ListCard{
  constructor(listData){
    this.id= listData.id || generateId()
    this.name= listData.name 
    this.color= listData.color 
  }

  get listTemplate() {
    return /*html*/`
<div class="col-4 ">
  <div class="card">
<!-- TODO probably use a ternary to get the bg-color of the title to change with to whatever user selects (this.color) -->
    <h3 class= "bg-${this.color} text-light text-center p-3">${this.name}</h3>
    <div class="col-12" id="tasks" >
    
      
    </div>
      <form onsubmit="app.tasksController.createTask('${this.id}')">
        <div class="form-group p-3">
          <label class="visually-hidden"for="taskName">Task Name</label>
          <input type="text" name= "name" 
          placeholder="Add Task..." 
          min="3" max="50" required>
          <button type="submit" class="btn btn-warning">+</button>
        </div>
      </form>
  </div>          
</div>

    `

  }
  
  
}

