import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  token:string = "BearerBQBZ-Dz-BBbp1VUjS07miwM-0U8o3BSuU8fbydHrjZYbw7_4y5Y4LBEnhyflN7qjjcdLmumblzzZv-38imekXfO7oHLxFTrPr4NLjaz_qsBTB7Byn4-bfDk8mRrAdtChGj6zT1JPIvc_rEw";
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artist";


  constructor(private http:Http) { }

  getArtistas(termino:string){
    let headers = new Headers();
    headers.append("autorization",this.token);

    let url = this.urlBusqueda + "?q=" + termino +"&type=artist";
    // Authorization: Bearer
    return this.http.get(url, {headers} )
                .map( res =>{
                  console.log(res);
                  this.artistas = res.json().artist.tems;
                });
  }


}
