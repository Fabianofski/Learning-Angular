import { Component, OnInit } from '@angular/core';
import { ListModel } from './list/list.model';
import { Position } from './position';
import { Card } from './list/card/card.model';
import { ListsService } from './lists.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListsService],
})
export class AppComponent implements OnInit {
  title = 'Welcome to Kanban!';
  lists: ListModel[] = [];

  constructor(private listService: ListsService) {}

  ngOnInit() {
    this.lists = this.listService.getLists();
  }
}
