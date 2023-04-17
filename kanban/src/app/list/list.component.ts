import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() listTitle = 'Title';
  cards = ['Lorem ipsum'];
  text = '';

  addCard() {
    this.cards.push(this.text);
    this.text = '';
  }
}
