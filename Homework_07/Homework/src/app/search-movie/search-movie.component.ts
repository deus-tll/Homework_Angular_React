import { Component } from '@angular/core';
import { OmdbApiService } from '../omdb-api.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent {
  movie: any;

  searchTitle: string | null = null;
  searchYear: number | null = null;
  plotType: "full" | "short" = "short";

  constructor(private omdbApiService: OmdbApiService) { }

  searchMovie() {
    if(this.searchTitle){
      this.omdbApiService.getMovie(this.searchTitle, this.searchYear)
      .subscribe(([shortPlot, fullPlot]) => {
        this.movie = shortPlot;
        this.movie.FullPlot = fullPlot.Plot;
      });
    }


    const title = String(this.searchTitle);
    this.movie = this.omdbApiService.getMovie(title, this.searchYear);
  };
}