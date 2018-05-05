import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendantformPage } from './attendantform';

@NgModule({
  declarations: [
    AttendantformPage,
  ],
  imports: [
    IonicPageModule.forChild(AttendantformPage),
  ],
})
export class AttendantformPageModule {}
