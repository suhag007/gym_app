import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { Mlabservice } from '../providers/mlabservice';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddNewCustomer } from '../pages/add-new-customer/add-new-customer';
import { Renewmembership } from '../pages/renewmembership/renewmembership';
import { Searchcustomer } from '../pages/searchcustomer/searchcustomer';
import { Status } from '../pages/status/status';
import { Singlecustomerdetial } from '../pages/singlecustomerdetial/singlecustomerdetial';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddNewCustomer,
    Renewmembership,
    Searchcustomer,
    Status,
    Singlecustomerdetial
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddNewCustomer,
    Renewmembership,
    Searchcustomer,
    Status,
    Singlecustomerdetial
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Mlabservice
  ]
})
export class AppModule {}
