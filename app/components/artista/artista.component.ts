import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista:any = {};
  topTracks:any = [];

  constructor(private activatedRoute:ActivatedRoute,
              private _spotifyService:SpotifyService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
    .map( params => params["id"])
    .subscribe( id =>{
      this._spotifyService.getArtista(id)
      .subscribe( artista => {
        console.log(artista);
        this.artista = artista;
      });

      this._spotifyService.getTop(id)
      .subscribe( tracks => {
        console.log(tracks);
        this.topTracks = tracks
      });

    });

  }

}
