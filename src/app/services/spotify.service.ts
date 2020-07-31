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
      'Authorization': 'Bearer BQAz2KGXl5vMvQduugJhh3WAG81ZjJjLBj8oIo4tTYUCLsj8T-b-xwQb-xy5V4-NNBvEYYgQQ11Jc2iNEvA'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

  }

  getArtist(termino: string) {

    const headers = new HttpHeaders({
      //Bearer: Expira cada hora, se tiene que cambiar la authorización
      'Authorization': 'Bearer BQAz2KGXl5vMvQduugJhh3WAG81ZjJjLBj8oIo4tTYUCLsj8T-b-xwQb-xy5V4-NNBvEYYgQQ11Jc2iNEvA'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers });

  }
}

