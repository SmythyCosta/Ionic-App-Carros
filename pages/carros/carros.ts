import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CarroService } from '../../providers/carro-service';
import { DetalhePage } from '../detalhe/detalhe';

import { ICarro } from '../../interfaces/icarro';

/*
  Generated class for the Carros page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-carros',
  templateUrl: 'carros.html'
})
export class CarrosPage {

  public listaCarros: ICarro[];
  public imagemPadrao:string = 'https://maxcdn.icons8.com/Share/icon/Transport//car1600.png';

  constructor(public navCtrl: NavController, public navParams: NavParams, public carroService: CarroService) {
    this.carroService.listaCarros().subscribe(data => {
      console.log(data);
      this.listaCarros = data;
    },erro =>{
      console.log(erro);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrosPage');
  }

  abreDetalhe(carro:ICarro){
    this.navCtrl.push(DetalhePage,{carro:carro});
  }

}
