import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { AdmitsPage } from '../pages/admits/admits';
import { ReferalPage } from '../pages/referal/referal';
import { DischargePage } from '../pages/discharge/discharge';
import { UsersPage } from '../pages/users/users';
import { LevelsPage } from '../pages/levels/levels';
import { PatientprofilePage } from '../pages/patientprofile/patientprofile';
import { AttendantformPage } from '../pages/attendantform/attendantform';
import { NewadmissionPage } from '../pages/newadmission/newadmission';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewadmissionPage,
    LoginPage,
    AttendantformPage,
    AdmitsPage,
    ReferalPage,
    DischargePage,
    UsersPage,
    PatientprofilePage,
    LevelsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewadmissionPage,
    LoginPage,
    AttendantformPage,
    AdmitsPage,
    ReferalPage,
    DischargePage,
    UsersPage,
    PatientprofilePage,
    LevelsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
