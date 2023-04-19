import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './kanban/list/list.component';
import { CardComponent } from './kanban/list/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KanbanComponent } from './kanban/kanban.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    KanbanComponent,
    HomeComponent,
    NotFoundComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
