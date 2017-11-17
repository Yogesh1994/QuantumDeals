import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-consumer-loans',
  templateUrl: 'consumer-loans.html',
})
export class ConsumerLoansPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoServicePage(subCat){
    this.navCtrl.push('ServicesPage',{subCat});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsumerLoansPage');
  }

}
