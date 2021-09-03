import { generateId } from "../Utils/generateId.js";


export class TaskCard{
  constructor(taskData){
    this.id= taskData.id || generateId()
    this.name= taskData.name 
    this.color= taskData.color 
  }

  get CardTemplate() {
    return /*html*/`
     <div class="col-4 text-center">
      <div class="card">
  <!-- TODO probably use a ternary to get the bg-color of the title to change with to whatever user selects (this.color) -->
        <h3 class= "bg-${this.color} text-light text-center">task ${this.name}</h3>
        <div class="col-12">
          tasks displayed here
        </div>
          <form onsubmit="">
            <div class="form-group p-3">
              <label class="visually-hidden"for="taskName">Task Name</label>
              <input type="text" name= "form-group" 
              placeholder="Add Task..." 
              min="3" max="50" required>
              <button type="submit" class="btn btn-warning">+</button>
            </form>
          </div>          
        </div>

    `

  }
}