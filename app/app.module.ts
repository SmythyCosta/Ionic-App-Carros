import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CarrosPage } from '../pages/carros/carros';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { TabsPage } from '../pages/tabs/tabs';
import { CarroService } from '../providers/carro-service';

import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    CarrosPage,
    FavoritosPage,
    DetalhePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CarrosPage,
    FavoritosPage,
    DetalhePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},CarroService]
})
export class AppModule {}
