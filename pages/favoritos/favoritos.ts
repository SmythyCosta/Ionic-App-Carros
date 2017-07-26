import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CarroService } from '../../providers/carro-service';
import { DetalhePage } from '../detalhe/detalhe';

import { ICarro } from '../../interfaces/icarro';

/*
  Generated class for the Favoritos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html'
})
export class FavoritosPage {
  public listaCarros: ICarro[];
  public imagemPadrao:string = 'https://maxcdn.icons8.com/Share/icon/Transport//car1600.png';

  constructor(public navCtrl: NavController, public navParams: NavParams, public carroService: CarroService) {}

  ionViewDidEnter() {
    this.listaCarros = this.carroService.listarFavoritos();
  }

  abreDetalhe(carro:ICarro){
    this.navCtrl.push(DetalhePage,{carro:carro});
  }

}
