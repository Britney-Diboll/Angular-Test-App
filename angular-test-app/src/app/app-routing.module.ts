import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorrorIconsComponent } from './horror-icons/horror-icons.component';
import { RickAndMortyComponent } from './rick-and-morty/rick-and-morty.component';

const routes: Routes = [
  {
    path: 'horror-icons', component: HorrorIconsComponent
  },
  {
    path: 'rick-and-morty', component: RickAndMortyComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
