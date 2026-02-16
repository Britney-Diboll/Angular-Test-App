import { Component } from '@angular/core';
import { RickAndMortyService } from '../rick-and-morty.service';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.css']
})

export class RickAndMortyComponent {
  rmCharacters: any[] = [];

  constructor(
    public rickyAndMortyService: RickAndMortyService
  ) { }


  ngOnInit() {

    this.getRMPeople();
  }

  getRMPeople() {
    this.rickyAndMortyService.getRickAndMorty().subscribe((data: any) => {
      debugger;
      console.log(data.recipes);
      this.rmCharacters = data.recipes;
    });
  }

}
