import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  token:string = "Bearer BQB6D6dbjljB1VlEDAxYKKy5jeFoKqcDCClTKwL8bduRnptZOyWqc6r_8wnzexLDxJPPievBop3uteUg1KTDYjTeATVa7cCk375kIbjTXZeVnz32ti8Zkm1b23yMKi2drwGH_irTDK2T";
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
                  // console.log(this.artistas);
                });
  }


}
