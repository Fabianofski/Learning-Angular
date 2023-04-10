import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  cardText = 'Lorem ipsum dolor sit amet sir que leros hakos';

  deleteCard(e: Event) {
    (<HTMLInputElement>e.target).parentElement.parentElement.remove();
  }
}
