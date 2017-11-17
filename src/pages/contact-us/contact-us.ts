import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import {
  Form,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {
  viewType: string = "location";
  userform: any;
    // set some user information on chatParams
   
  constructor( public loadingCtrl:LoadingController,public toastCtrl:ToastController,public http:Http,public form: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
  this.viewType= "location"; 
  }
  
  ngOnInit(){
    this.userform = this.form.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      mobile: ['', Validators.compose([Validators.required])],
      subject: ['', Validators.compose([Validators.required])],
      message: ['', Validators.compose([Validators.required])]
    });
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsPage');
  }

  onSubmit(){
      
    let loading = this.loadingCtrl.create({
      content: `
      <div class="custom-spinner-container">
        <div class="custom-spinner-box"></div>
      </div>`
    });
  
    loading.present();
  
    setTimeout(() => {
      let link = "http://quantumdeals.in/app_php/contact.php";
      let data = JSON.stringify({
                      "name":this.userform.value.name,
                      "email":this.userform.value.email,
                      "mobile":this.userform.value.mobile,
                      "subject":this.userform.value.subject,
                      "message":this.userform.value.message
                  });
      this.http.post(link,data).timeout(8000).map(res=>res.json()).subscribe((data)=>{
        if(data.server_response=='true')
          this.presentToast("Email Sent",true);
        else
         this.presentToast("Error While sending Email!",false);        
      },(error)=>{
        this.presentToast("Connection Timeout. Please Check Your Network Setting.",false);
      });
      loading.dismiss();
    });


 
  }
  presentToast(message,flag){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      if(flag==true)
        this.ngOnInit();
    });
  
    toast.present();
  }
}
