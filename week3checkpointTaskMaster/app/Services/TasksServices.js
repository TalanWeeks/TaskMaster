import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";

class TasksServices{

  constructor(){
    ProxyState.on("tasks",saveState)
  }
  addTask(taskData){
    ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)]
    console.log("hello from TasksServices", ProxyState.tasks)
  }

  deleteTask(listDataId){
    console.log("listcardsserveices delete",listDataId)    
    
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id !== listDataId)
    ProxyState.tasks = ProxyState.tasks
    console.log("ProxyState.tasks", ProxyState.tasks)
    
  }

  // checkedOrNot(){
  //   debugger
  //   var checkBox = document.getElementsByClassName("checked");
  //   var checkedVar = document.getElementById("checked-var");

  //   if (checkBox.checked == true){
  //     checkedVar.innerText = "1"
  //   } else{
  //     checkedVar.innerText = "0"
  //   }
  // }

}

export const tasksService =  new TasksServices()