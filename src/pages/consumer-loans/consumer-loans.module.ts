import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsumerLoansPage } from './consumer-loans';

@NgModule({
  declarations: [
    ConsumerLoansPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsumerLoansPage),
  ],
})
export class ConsumerLoansPageModule {}
