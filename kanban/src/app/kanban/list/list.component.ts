import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ListModel } from './list.model';
import { Card } from './card/card.model';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements AfterViewInit {
  @Input() list = new ListModel('Default');
  @Output() cardMoved = new EventEmitter<Card>();
  @ViewChild('listRef') listRef: ElementRef<HTMLDivElement>;
  text = '';

  constructor(private listService: ListsService) {}

  ngAfterViewInit() {
    this.updateLocation();
  }

  updateLocation() {
    let rect = this.listRef.nativeElement.getBoundingClientRect();
    this.list.location = { x: rect.left + rect.width / 2, y: rect.top };
  }

  addCard() {
    if (this.text === '') return;

    this.list.cards.push(this.text);
    this.text = '';

    this.listService.saveLists();
  }

  onCardRemove(index: number) {
    this.list.cards.splice(index, 1);
    this.listService.saveLists();
  }
}
