import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNewCustomer } from '../add-new-customer/add-new-customer';
import { Renewmembership } from '../renewmembership/renewmembership';
import { Searchcustomer } from '../searchcustomer/searchcustomer';
import { Status } from '../status/status';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  addnewcustomer(){
  	this.navCtrl.push(AddNewCustomer);
  }

  renewmembershipnav(){
  	this.navCtrl.push(Renewmembership);
  }

  searchcustomernav(){
  	this.navCtrl.push(Searchcustomer);
  }

  statusnav(){
  	this.navCtrl.push(Status);
  }

}
