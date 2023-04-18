import { Component } from '@angular/core';
import { ListsService } from './kanban/lists.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListsService],
})
export class AppComponent {}
