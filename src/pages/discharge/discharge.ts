import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-discharge',
  templateUrl: 'discharge.html',
})
export class DischargePage {
  selectedItem: any;
  icons: string[];
  pnames: string[];
  injuries: string[];
  items: Array<{pid: string, pname: string, injury: string, admdate: string, disdate: string, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
            // If we navigated to this page, we will have an item available as a nav param
            this.selectedItem = navParams.get('item');
            this.icons = ['man', 'woman'];
        
            this.pnames = ['Mourya Kota', 'Sanjay', 'Sheetal', 'Kiran', 'Nidhi', 'Vaishnavi', 
            'Ranjith', 'Shashank', 'Ranjan', 'Shruti'];

            this.injuries = ['Bruising', 'Abrasion', 'Pinched Nerve', 'Abrasion', 'Abrasion', 'Pinched Nerve', 
             'Pinched Nerve', 'Abrasion', 'Pinched Nerve', 'Abrasion'];
        
            this.items = [];
            for (let i = 1; i < 11; i++) {
              this.items.push({
                pid: 'PID' + i,
                pname: this.pnames[Math.floor(Math.random() * this.pnames.length)],
                injury: this.injuries[Math.floor(Math.random() * this.injuries.length)],
                admdate: '11/8/2029',
                disdate: '12/13/2029',
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
              });
            }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DischargePage, {
      item: item
    });
  }
}
