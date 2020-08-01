import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  search(termino: string) {
    console.log(termino);

    this.loading = true;
    this.spotify.getArtist(termino)
      .subscribe((data: any) => {
        this.artists = data;
        this.loading = false;
      });
  }


}
