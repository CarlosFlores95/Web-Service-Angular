import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.services';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor( private activatedRouted: ActivatedRoute, private _heroeService: HeroesService) {
    this.activatedRouted.params.subscribe( params => {
      this.heroe = this._heroeService.getHeroe(params['id']);

    } )
   }

  ngOnInit() {
  }

}
