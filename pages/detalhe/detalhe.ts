import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { ICarro } from '../../interfaces/icarro';

import { CarroService } from '../../providers/carro-service';
/*
  Generated class for the Detalhe page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html'
})
export class DetalhePage {
  @ViewChild(Slides) slides: Slides;

  public carro:ICarro;
  public eFavorito:boolean;

  public imagemPadrao:string = 'https://maxcdn.icons8.com/Share/icon/Transport//car1600.png';

  constructor(public navCtrl: NavController, public navParams: NavParams, public carroService: CarroService) {
    this.carro = this.navParams.get('carro');
    this.eFavorito = this.carroService.eFavorito(this.carro);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
  }

  anteriorSlide(){
    this.slides.slidePrev();
  }
  proximoSlide(){
    this.slides.slideNext();
  }

  addFavorito(){
    this.carroService.adicionaFavorito(this.carro);
    this.eFavorito = true;
  }
  removeFavorito(){
    this.carroService.deletaFavorito(this.carro);
    this.eFavorito = false;
  }

}
