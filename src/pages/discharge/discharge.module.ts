import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DischargePage } from './discharge';

@NgModule({
  declarations: [
    DischargePage,
  ],
  imports: [
    IonicPageModule.forChild(DischargePage),
  ],
})
export class DischargePageModule {}
