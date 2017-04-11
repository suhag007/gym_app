import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Mlabservice } from '../../providers/mlabservice';

@Component({
  selector: 'page-singlecustomerdetial',
  templateUrl: 'singlecustomerdetial.html',
})
export class Singlecustomerdetial {
  id:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storedata: Mlabservice) {
  	this.id = navParams.get('id');
  	console.log(this.id);
  	 this.storedata.getsingleuser(this.id['$oid']).subscribe((data)=>{
        console.log(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Singlecustomerdetial');
  }

}
