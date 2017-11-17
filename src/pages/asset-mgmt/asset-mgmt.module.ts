import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssetMgmtPage } from './asset-mgmt';

@NgModule({
  declarations: [
    AssetMgmtPage,
  ],
  imports: [
    IonicPageModule.forChild(AssetMgmtPage),
  ],
})
export class AssetMgmtPageModule {}
