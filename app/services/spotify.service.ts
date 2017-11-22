import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  token:string = "Bearer BQDRgFgzYdeALGzSCsbwdv1x_Tm4Sgco1aS1N2p65qmQLJ8MjWr0lhb99tjrSeN1kFZI-NkHRPZFH_8XtHv6y5sruHtBWF_wNDr1EJCorXizajcn-Ds4hmxIsPM5EER7hoF7imxDTS1f";
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";


  constructor(private http:Http) { }

  getArtistas(termino:string){
    let headers = new Headers();
    headers.append("Authorization",this.token);

    let url = this.urlBusqueda + "?q=" + termino +"&type=artist";
    // Authorization: Bearer
    return this.http.get(url, {headers} )
                .map( res =>{
                  this.artistas = res.json().artists.items;
                  // console.log(this.artistas);
                });
  }

  getTop(idx:string){
    let headers = new Headers();
    headers.append("Authorization",this.token);

    let url = this.urlArtista + "/" + idx + "/top-tracks?country=US";
    // Authorization: Bearer
    return this.http.get(url, {headers} )
                .map( res =>{
                  // console.log(res.json().tracks);
                  return res.json().tracks;
                });
  }


  getArtista(idx:string){
    let headers = new Headers();
    headers.append("Authorization",this.token);

    let url = this.urlArtista + "/" + idx;
    // Authorization: Bearer
    return this.http.get(url, {headers} )
                .map( res =>{
                  // console.log(res.json());
                  return res.json();
                  // this.artista = res.json().artists.items;
                  // console.log(this.artistas);
                });
  }


}
