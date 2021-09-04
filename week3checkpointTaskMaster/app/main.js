import { ListCardsController } from "./Controllers/ListCardsController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  
 listCardsController = new ListCardsController();

 tasksController = new TasksController();
}

window["app"] = new App();
