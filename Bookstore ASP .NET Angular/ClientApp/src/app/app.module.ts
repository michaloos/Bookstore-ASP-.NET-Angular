import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BooksComponent } from './books/books.component';
import { AutorsComponent } from './autors/autors.component';
import { AddAutorComponent } from './add-autor/add-autor.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { EditAutorComponent } from './edit-autor/edit-autor.component';
import { DetailAutorComponent } from './detail-autor/detail-autor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteAutorComponent } from './delete-autor/delete-autor.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { MatCommonModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    BooksComponent,
    AutorsComponent,
    AddAutorComponent,
    AddBookComponent,
    EditBookComponent,
    DetailBookComponent,
    EditAutorComponent,
    DetailAutorComponent,
    DeleteAutorComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MatDialogModule,
    MatCommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'books', component: BooksComponent},
      { path: 'autors', component: AutorsComponent},
      { path: 'add-autor', component: AddAutorComponent},
      { path: 'add-book', component: AddBookComponent},
      { path: 'detail-autor', component: DetailAutorComponent},
      { path: 'detail-book', component: DetailBookComponent},
      { path: 'edit-autor', component: EditAutorComponent},
      { path: 'edit-book', component: EditBookComponent},
      { path: 'delete-book', component: DeleteBookComponent},
      { path: 'delete-autor', component: DeleteAutorComponent},
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddBookComponent,
    DetailBookComponent,
    DeleteBookComponent,
    EditBookComponent,
    AddAutorComponent,
    DetailAutorComponent,
    DeleteAutorComponent,
    EditAutorComponent
  ]
})
export class AppModule { }
