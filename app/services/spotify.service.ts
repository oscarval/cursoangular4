import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  token:string = "Bearer BQCOxs2fHPMCsEbHW7g3VD9XOrDBgUJ50lWQEDDtSU_FiX9KQ502-V0_1szk4x30gQ-jCnPqvIcb9E7sXR0f2w";
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artist";


  constructor(private http:Http) { }

  getArtistas(termino:string){
    let headers = new Headers();
    headers.append("Authorization",this.token);

    let url = this.urlBusqueda + "?q=" + termino +"&type=artist";
    // Authorization: Bearer
    return this.http.get(url, {headers} )
                .map( res =>{
                  this.artistas = res.json().artists.items;
                  console.log(this.artistas);
                });
  }


}
