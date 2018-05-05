import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmitsPage } from './admits';

@NgModule({
  declarations: [
    AdmitsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdmitsPage),
  ],
})
export class AdmitsPageModule {}
