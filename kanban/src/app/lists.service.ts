import { Position } from './position';
import { Card } from './list/card/card.model';
import { ListModel } from './list/list.model';

export class ListsService {
  private lists = [
    new ListModel('ToDo'),
    new ListModel('Doing'),
    new ListModel('Done'),
  ];

  getLists() {
    return this.lists.slice();
  }

  moveCard(card: Card) {
    let closestList: ListModel = this.lists[0];

    for (let i = 1; i < this.lists.length; i++) {
      if (
        distance(card.location, closestList.location) >
        distance(card.location, this.lists[i].location)
      )
        closestList = this.lists[i];
    }

    closestList.cards.push(card.text);
    console.log(this.lists);
  }

  addList(name: string) {
    this.lists.push(new ListModel(name));
  }
}

function distance(a: Position, b: Position): number {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
