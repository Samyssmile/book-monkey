import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';
import { BookListComponent } from '../book-list/book-list.component';

@NgModule({
  declarations: [
    BookDetailsComponent,
    BookListComponent,
    BookListItemComponent,
  ],
  imports: [CommonModule, BooksRoutingModule],
  exports: [BookDetailsComponent, BookListComponent, BookListItemComponent],
})
export class BooksModule {}
