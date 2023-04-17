import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() cardText = '';
  @ViewChild('card') card: ElementRef<HTMLDivElement>;
  dragging = false;
  offsetX = 0;
  offsetY = 0;

  ngOnInit() {
    document.addEventListener('mousemove', (e: MouseEvent) => {
      this.drag(e);
    });
  }

  deleteCard(e: Event) {
    (<HTMLInputElement>e.target).parentElement.parentElement.remove();
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
    this.card.nativeElement.style.width = '100%';
    this.dragging = false;
  }
}
