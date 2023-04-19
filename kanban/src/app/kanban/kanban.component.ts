import { Component } from '@angular/core';
import { ListsService } from './lists.service';
import { ListModel } from './list/list.model';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css'],
  providers: [ListsService],
})
export class KanbanComponent {
  lists: ListModel[] = [];

  constructor(private listService: ListsService) {}

  ngOnInit() {
    this.listService.loadLists();
    this.lists = this.listService.getLists();
  }
}
