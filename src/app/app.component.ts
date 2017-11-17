import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  menu:Array<any> = [];
  rootPage: any = HomePage;

//  pages: Array<any>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //   { title: 'About Us', component: 'AboutusPage' },
    //   { title: 'Services', component: 'ServicesPage' },
    //   { title: 'Partners', component: 'PartnersPage' },
    //   { title: 'Emi-Calculator', component: 'EmiCalculatorPage' },
    //   { title: 'Contact Us', component: 'ContactUsPage' }
      
    // ];
    this.menu = [
      {
      title:'Services',
      icon:'ios-arrow-down',
      showDetails: false,
      items:  [               
          {name:'Consumer Loans',component:'ConsumerLoansPage',extrainfo:'company'},
          {name:'Mutual Funds',component:'MutualFundsPage',extrainfo:'history'},
          {name:'Insurance',component:'InsurancePage',extrainfo:'mission'},
          {name:'Assets Management',component:'AssetMgmtPage',extrainfo:'mission'},
          {name:'Other Services',component:'OtherServicesPage',extrainfo:'mission'}
      ]
    }
  ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  staticgoPage(page){
    if(page=='HomePage'){
      this.nav.setRoot(HomePage);
     }else{
       this.nav.setRoot(page);
     }
  }
  toggleDetails(menu) {
   
       if (menu.showDetails) {
           menu.showDetails = false;
           menu.icon = 'ios-arrow-down';         
       } else {
           menu.showDetails = true;
           menu.icon = 'ios-arrow-up'; 
       }
       console.log(menu);
     }
   openPage(page) {
   // Reset the content nav to have just this page
  // we wouldn't want the back button to show in this scenario
     this.nav.setRoot(page.component,{"type":page.extrainfo});
   }
}
