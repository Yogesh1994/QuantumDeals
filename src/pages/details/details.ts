import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  emi:any;
  l_amount:any;
  period:any;
  intrest:any;
  detailsArray:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   console.log("sas");
    this.emi=Math.round(this.navParams.get("emi"));
    this.l_amount=this.navParams.get("l_amount");
    this.period=this.navParams.get("period");
    this.intrest=this.navParams.get("intrest");

    console.log(this.emi,this.l_amount,this.period,this.intrest);
    let i=1;  
    do{
      let intrest_amount=(this.l_amount/12)/this.intrest;
      let principle=this.emi-intrest_amount;
      this.l_amount=this.l_amount-principle;
      let balance=(this.l_amount<0?0:Math.floor(this.l_amount));
  
       this.detailsArray.push({"month":i,"principle":Math.floor(principle),"intrest_amount":Math.floor(intrest_amount),"balance":balance});
      i++;
    }while(i<=this.period);

    console.log("Array",this.detailsArray);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
