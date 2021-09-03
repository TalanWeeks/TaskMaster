import { ListCardsController } from "./Controllers/ListCardsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  
 listCardsController = new ListCardsController();
}

window["app"] = new App();
