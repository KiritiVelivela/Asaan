import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PatientprofilePage } from '../patientprofile/patientprofile';


@IonicPage()
@Component({
  selector: 'page-admits',
  templateUrl: 'admits.html',
})
export class AdmitsPage {
  selectedItem: any;
  icons: string[];
  pnames: string[];
  injuries: string[];
  items: Array<{pid: string, pname: string, ward: string, injury: string, stamp: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['man', 'woman'];

    this.pnames = ['Sanjay', 'Sheetal', 'Kiran', 'Nidhi', 'Vaishnavi', 
    'Ranjith', 'Shashank', 'Ranjan', 'Shruti'];

    this.injuries = ['RTA', 'Assault', 'Fall', 'Others'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        pid: 'PID' + i,
        pname: this.pnames[Math.floor(Math.random() * this.pnames.length)],
        ward: 'General',
        injury: this.injuries[Math.floor(Math.random() * this.injuries.length)],
        stamp: '12/13/2029',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PatientprofilePage, item);
  }

}
