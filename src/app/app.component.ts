import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { NewadmissionPage } from '../pages/newadmission/newadmission';
import { AttendantformPage } from '../pages/attendantform/attendantform';
import { AdmitsPage } from '../pages/admits/admits';
import { ReferalPage } from '../pages/referal/referal';
import { DischargePage } from '../pages/discharge/discharge';
import { UsersPage } from '../pages/users/users';
import { PatientprofilePage } from '../pages/patientprofile/patientprofile';
import { LevelsPage } from '../pages/levels/levels';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: HomePage },
      { title: 'New Admission', component: NewadmissionPage },
      { title: 'Attendant Admission', component: AttendantformPage },
      { title: 'Admits', component: AdmitsPage },
      { title: 'Discharged Patients', component: DischargePage },
      { title: 'Refereal Cases', component: ReferalPage },
      { title: 'Levels', component: LevelsPage },
      { title: 'Users', component: UsersPage },
      { title: 'Settings', component: ListPage }
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

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
