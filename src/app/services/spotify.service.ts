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
      'Authorization': 'Bearer BQCb6YcMYhiv1RK_iSGezWZcKV3iiCMu-Si5uWFTkbJkUwfQX1FlQwx3dG2UCnN2btJz6PTNd4BFnb14nXU'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => {
        return data['albums'].items; //Way to get the data more directly using "pipe" and "map" instance "subscribe"
      }));
  }

  getArtist(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => {
        return data['artists'].items;//Way to get the data more directly using "pipe" and "map" instance "subscribe"
      }));
  }
}

