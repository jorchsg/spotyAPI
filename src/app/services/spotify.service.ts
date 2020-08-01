import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Importando Reactive Extensions: maps, filter, etc.
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Ready');
  }

  //Create main query for NewReleases and Get Artists functions
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      //Bearer: Expires each hour, we have to request a new post for each expirtation
      'Authorization': 'Bearer BQABQ3KVN2SrzQw83IU90lmlJ6GSXSrwlnrs6J1iBgAZ8zxYbyBrzfxWZyJI8cuuqXoVgs2ONRYs73xXFbU'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=40')
      .pipe(map(data => {
        return data['albums'].items; //Way to get the data more directly using "pipe" and "map" instance "subscribe"
      }));
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => {
        return data['artists'].items;//Way to get the data more directly using "pipe" and "map" instance "subscribe"
      }));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
    // .pipe(map(data =>  data['artists'].items;}
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));
  }
}
