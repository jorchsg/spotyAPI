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
      'Authorization': 'Bearer BQC4hWd8k75CEHjJ-up6FON5r97K8Pol-dxq_Evho84e1a9rPhekOvpuwkA4NqH2hxxdvlKiJzTCfj1MnV4'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .subscribe(data => {
        console.log(data);
      });
  }

}
