import { ProxyState } from "../AppState.js";
import { listCardsService } from "../Services/ListCardsService.js";
import { generateId } from "../Utils/generateId.js";


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
    
    createTaskCard(listDataId){
      event.preventDefault()
      let form = event.target
      
      let listData = {
        //@ts-ignore
        name: form.name.value,
        //@ts-ignore
        color: form.color.value,

        id: generateId()
      }

      listCardsService.addListCard(listData)
        //@ts-ignore
      form.reset()
    }
  
}