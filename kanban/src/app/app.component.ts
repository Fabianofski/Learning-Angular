import { Component } from '@angular/core';
import { ListModel } from './list/list.model';
import { Position } from './position';
import { Card } from './list/card/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Welcome to Kanban!';
  lists = [
    new ListModel('ToDo'),
    new ListModel('Doing'),
    new ListModel('Done'),
  ];

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
}

function distance(a: Position, b: Position): number {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
