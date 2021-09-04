import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksServices{

  addTask(taskData){
    ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)]
    console.log("hello from TasksServices", (taskData))

  }
}

export const tasksService =  new TasksServices()