import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HorrorIconsService {

  constructor(
    private http: HttpClient
  ) { }

  movies = [
    {
      Name: 'Freddy Krueger',
      Franchise: 'Nightmare on Elm Street',
      FirstReleaseYear: '1984',
      MoviesReleased: 9,
      Movies: ['Nightmare on Elm Street',
        `A Nightmare on Elm Street 2: Freddy's Revenge`,
        `A Nightmare on Elm Street 3: Dream Warriors`,
        'A Nightmare on Elm Street 4: The Dream Master',
        'A Nightmare on Elm Street 5: The Dream Child',
        `Freddy's Dead: The Final Nightmare`,
        `Wes Craven's New Nightmare`,
        `Freddy vs. Jason`,
        `Nightmare on Elm Street (Remake)`]
    },
    {
      Name: 'Jason Voorhees',
      Franchise: 'Friday the 13th',
      FirstReleaseYear: '1980',
      MoviesReleased: 12,
      Movies: ['Friday the 13th',
        'Friday the 13th Part 2',
        'Friday the 13th Part III',
        'Friday the 13th: The Final Chapter',
        'Friday the 13th Part V: A New Beginning',
        'Friday the 13th Part VI: Jason Lives',
        'Friday the 13th Part VII: The New Blood',
        'Friday the 13th Part VIII: Jason Takes Manhattan',
        'Jason Goes To Hell: The Final Friday',
        'Jason X',
        'Freddy vs. Jason',
        'Friday the 13th']
    },
    {
      Name: 'Jack Torrance',
      Franchise: 'The Shinning',
      FirstReleaseYear: '1980',
      MoviesReleased: 2,
      Movies: ['The Shinning',
        'Doctor Sleep']
    },
    {
      Name: 'Pinhead',
      Franchise: 'Hellraiser',
      FirstReleaseYear: '1987',
      MoviesReleased: 11,
      Movies: ['Hellraiser',
        'Hellbound: Hellraiser II',
        'Hellraiser III: Hell on Earth',
        'Hellraiser IV: Bloodline',
        'Hellraiser: Inferno',
        'Hellraiser: Hellseeker',
        'Hellraiser: Deader',
        'Hellraiser: Hellworld',
        'Hellraiser: Revelations',
        'Hellraiser: Judgment',
        'Hellraiser']
    },
    {
      Name: 'Michael Myers',
      Franchise: 'Halloween',
      FirstReleaseYear: '1978',
      MoviesReleased: 13,
      Movies: ['Halloween ',
        'Halloween II ',
        'Halloween III: Season of the Witch',
        'Halloween 4: The Return of Michael Myers',
        'Halloween 5: The Revenge of Michael Myers',
        'Halloween 6: The Curse of Michael Myers',
        'Halloween H20: 20 Years Later',
        'Halloween: Resurrection',
        'Halloween',
        'Halloween II',
        'Halloween',
        'Halloween Kills',
        'Halloween Ends'
      ]
    },
    {
      Name: 'Ghost Face',
      Franchise: 'Scream',
      FirstReleaseYear: '1996',
      MoviesReleased: 6,
      Movies: ['Scream',
        'Scream 2',
        'Scream 3',
        'Scream 4',
        'Scream',
        'Scream VI']
    }
  ];

  getMovies() {
    return this.movies;
  }


}
