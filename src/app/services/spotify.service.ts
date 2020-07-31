import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Importando Reactive Extensions: maps, filter, etc.
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify Service Listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      //Bearer: Expires each hour, we have to request a new post for each expirtation
      'Authorization': 'Bearer BQCb6YcMYhiv1RK_iSGezWZcKV3iiCMu-Si5uWFTkbJkUwfQX1FlQwx3dG2UCnN2btJz6PTNd4BFnb14nXU'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .pipe(map(data => {
        return data['albums'].items; //Way to get the data more directly using "pipe" and "map" instance "subscribe"
      }));

  }

  getArtist(termino: string) {

    const headers = new HttpHeaders({
      //Bearer: Expires each hour, we have to request a new post for each expirtation
      'Authorization': 'Bearer BQCb6YcMYhiv1RK_iSGezWZcKV3iiCMu-Si5uWFTkbJkUwfQX1FlQwx3dG2UCnN2btJz6PTNd4BFnb14nXU'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
      .pipe(map(data => {
        return data['artists'].items;//Way to get the data more directly using "pipe" and "map" instance "subscribe"
      }));

  }
}

