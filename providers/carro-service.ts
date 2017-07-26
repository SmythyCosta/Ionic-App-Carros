import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Storage } from '@ionic/storage';

import { ICarro } from '../interfaces/icarro';


@Injectable()
export class CarroService {
  public listaFavoritos:ICarro[];

  public carroUrl = 'http://revendaservice.herokuapp.com/api/carros';
  constructor(public http: Http, public storage:Storage) {
    console.log('Hello CarroService Provider');



    this.storage.get('listaFavoritos').then((val) => {
      if(val){
        this.listaFavoritos = val;
      }else{
        this.listaFavoritos = [];
        this.storage.set('listaFavoritos',[]);
      }
    });



  }

  listaCarros():Observable<ICarro[]>{
    return this.http.get(this.carroUrl).map(res => res.json()).catch(this.erro);
  }

  erro(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  listarFavoritos(){
    return this.listaFavoritos;
  }


  /* 
   * salvando a lista no banco local.
   * é empurrado um elemento para dentro da lista
   * e em seguida a lista é salva no banco de dados
  */
  adicionaFavorito(carro:ICarro){
    this.listaFavoritos.push(carro);
    this.storage.set('listaFavoritos',this.listaFavoritos);
  }


  /* 
   * deletando um obj da lista 
   * obs: splice é um método javascript que remove um elemento da lista.
   * splice deve ser covertido para numerico.
  */
  deletaFavorito(carro:ICarro){
    for(let chave in this.listaFavoritos){
      if(this.listaFavoritos[chave].id == carro.id){
        this.listaFavoritos.splice(parseInt(chave),1);
        this.storage.set('listaFavoritos',this.listaFavoritos);
      }
    }
  }


  /* 
    * metodo que será usado para exibir o botão para add a list de favorito.
  */
  eFavorito(carro:ICarro){
    for(let chave in this.listaFavoritos){
      if(this.listaFavoritos[chave].id == carro.id){
        return true;
      }
    }
    return false;
  }


}//end class.
