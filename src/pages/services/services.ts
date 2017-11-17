import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http }from '@angular/http';
import  "rxjs/Rx";


@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {
subcat : any;
data : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.subcat = this.navParams.get("subCat");
    console.log(this.subcat);
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
    let cat = this.subcat.replace(" ","%20");
    let link = "http://quantumdeals.in/app_php/service.php?subcat="+cat+"" ;
    this.http.get(link).map(res => res.json()).subscribe((data) => {
     console.log(data.data[0]);
      this.data = data.data[0];
  
    });
    
  }
  
}
