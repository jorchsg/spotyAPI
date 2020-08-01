import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any[] = [];

  //Flags
  loadingArtist: boolean;

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService
  ) {

    this.loadingArtist = true;

    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string) {

    this.loadingArtist = true;

    this.spotify.getArtist(id)
      .subscribe(artist => {
        console.log(artist);
        this.artist = artist;
        this.loadingArtist = false;
      });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe(topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      });
  }



}
