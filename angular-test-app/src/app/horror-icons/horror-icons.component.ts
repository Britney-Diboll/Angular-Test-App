import { Component } from '@angular/core';
import { HorrorIconsService } from '../horror-icons.service';


@Component({
  selector: 'app-horror-icons',
  templateUrl: './horror-icons.component.html',
  styleUrls: ['./horror-icons.component.css']
})
export class HorrorIconsComponent {
  movies: any[] = [];


  constructor(public horrorIconsService: HorrorIconsService) { 

  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movies = this.horrorIconsService.getMovies();
  }


}
