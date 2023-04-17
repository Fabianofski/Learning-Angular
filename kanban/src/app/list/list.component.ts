import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ListModel } from './list.model';
import { Card } from './card/card.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() list = new ListModel('Default');
  @Output() cardMoved = new EventEmitter<Card>();
  @ViewChild('listRef') listRef: ElementRef<HTMLDivElement>;
  text = '';

  ngAfterViewInit() {
    let rect = this.listRef.nativeElement.getBoundingClientRect();
    this.list.location = { x: rect.left + rect.width / 2, y: rect.top };
  }

  addCard() {
    if (this.text === '') return;

    this.list.cards.push(this.text);
    this.text = '';

    console.log(this.list.cards);
  }

  onCardRemove(index: number) {
    this.list.cards.splice(index, 1);
  }

  onCardMoved(card: Card) {
    this.cardMoved.emit(card);
  }
}
