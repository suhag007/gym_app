import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Mlabservice } from '../../providers/mlabservice';
import { Singlecustomerdetial } from '../singlecustomerdetial/singlecustomerdetial';
// import * as _ from 'lodash';

@Component({
  selector: 'page-searchcustomer',
  templateUrl: 'searchcustomer.html',
})
export class Searchcustomer {
   items;
   listofcustomer: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storedata: Mlabservice,public loadingCtrl: LoadingController) {
  	    this.initializeItems();
  }
   loader = this.loadingCtrl.create({
      content: "Please wait..."
      // ,
      // duration: 3000
    });

  initializeItems() {
  	this.loader.present();
    this.storedata.getuserlist().subscribe((data)=>{
        console.log(data);
    	this.listofcustomer=data;
    	this.items=this.listofcustomer;
    	this.loader.dismiss();
      });
  }
  
  checkcustomerdetails(selectedid: string){
  	this.navCtrl.push(Singlecustomerdetial,{
  		id:selectedid
  	});
  }

  getItems(ev) {
  	this.items=this.listofcustomer;
  //   // Reset items back to all of the items
  //   this.initializeItems();

  //   // set val to the value of the ev target
    var val = ev.target.value;

  //   // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      if(isNaN(val)){
      	 this.items = this.items.filter((item) => {
        return (item["Name"].indexOf(val.toLowerCase()) > -1);
      });
      }	
      else{
      	this.items = this.items.filter((item) => {
        return (item["Phone_no"].indexOf(val.toLowerCase()) > -1);
      })
    }
  }
 }
}
