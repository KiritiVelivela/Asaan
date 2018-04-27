import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewadmissionPage } from './newadmission';

@NgModule({
  declarations: [
    NewadmissionPage,
  ],
  imports: [
    IonicPageModule.forChild(NewadmissionPage),
  ],
})
export class NewadmissionPageModule {}
