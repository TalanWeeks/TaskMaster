import { ProxyState } from "../AppState.js";
import { ListCard } from "../Models/ListCard.js";


class ListCardsService{
  addListCard(listData){
    ProxyState.lists =[...ProxyState.lists, new ListCard(listData)]

    console.log("hello from ListCardsServices", (listData))
  }
}

export const listCardsService = new ListCardsService();