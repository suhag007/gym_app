import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import { Mlabservice } from '../../providers/mlabservice';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the AddNewCustomer page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-add-new-customer',
  templateUrl: 'add-new-customer.html',
})
export class AddNewCustomer {

  constructor(public navCtrl: NavController, public navParams: NavParams,public storedata: Mlabservice,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewCustomer');
  }

  registerUser(form: NgForm) {
    console.log(form.value);
    this.storedata.registeruser(form.value).subscribe((data)=>{
    	console.log(data);
        this.presentToast();
        form.reset();
        this.navCtrl.pop();
    });
  }

    presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User is Successfully Registered',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}
