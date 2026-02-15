import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorrorIconsComponent } from './horror-icons/horror-icons.component';
import { HttpClientModule } from '@angular/common/http';
import { RickAndMortyComponent } from './rick-and-morty/rick-and-morty.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    HorrorIconsComponent,
    RickAndMortyComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
