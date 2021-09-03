import { ProxyState } from "../AppState.js";
import { listCardsService } from "../Services/ListCardsService.js";


function _drawTaskCard(){
  let listCards = ProxyState.lists;
  let listTemplate = ''

  listCards.forEach(list => listTemplate += list.listTemplate)
  document.getElementById("task-card").innerHTML= listTemplate
}

export class ListCardsController{

  constructor(){
    ProxyState.on("lists",_drawTaskCard);
    _drawTaskCard()
  }

    addListCard(listData){
      listCardsService.addListCard(listData)
    }
    
    createTaskCard(){
      event.preventDefault()
      let form = event.target
      
      let listData = {
        name: form.name.value,
        color: form.color.value,
      }

      listCardsService.addListCard(listData)
      form.reset()
    }
  
}