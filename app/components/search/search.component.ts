import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  termino:string = "";
  artistas
  constructor(private _spotifyServices:SpotifyService) { }

  ngOnInit() {

  }

  buscarArtista(){
    this._spotifyServices.getArtistas(this.termino)
          .subscribe();
  }

}
