import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MutualFundsPage } from './mutual-funds';

@NgModule({
  declarations: [
    MutualFundsPage,
  ],
  imports: [
    IonicPageModule.forChild(MutualFundsPage),
  ],
})
export class MutualFundsPageModule {}
