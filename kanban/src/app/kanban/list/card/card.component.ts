import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ListsService } from '../../lists.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cardText = '';
  @Output() removeCard = new EventEmitter<void>();
  @ViewChild('card') card: ElementRef<HTMLDivElement>;
  dragging = false;
  offsetX = 0;
  offsetY = 0;

  constructor(private listService: ListsService) {}

  ngOnInit() {
    document.addEventListener('mousemove', (e: MouseEvent) => {
      this.drag(e);
    });
  }

  tryDeleteCard() {
    this.removeCard.emit();
  }

  startDrag(e: MouseEvent) {
    let rect = this.card.nativeElement.getBoundingClientRect();
    this.offsetX = e.x - rect.left;
    this.offsetY = e.y - rect.top;
    this.card.nativeElement.style.width = rect.width + 'px';

    this.dragging = true;

    this.drag(e);
  }

  drag(e: MouseEvent) {
    if (!this.dragging) return;

    this.card.nativeElement.style.left = e.x - this.offsetX + 'px';
    this.card.nativeElement.style.top = e.y - this.offsetY + 'px';
  }

  endDrag(e: MouseEvent) {
    this.listService.moveCard({
      location: { x: e.x, y: e.y },
      text: this.cardText,
    });
    this.tryDeleteCard();
    this.card.nativeElement.style.width = '100%';
    this.dragging = false;
  }
}
