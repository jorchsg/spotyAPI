import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify Service Listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      //Bearer: Expira cada hora, se tiene que cambiar la authorización
      'Authorization': 'Bearer BQBT3cg_IViLKW8I9WBGCapH85IJqOueWtLBwQct2TxaW36UBnOaE_ne6t8_SAs45Doi3jqunXs5JemFEqw'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

  }
}
