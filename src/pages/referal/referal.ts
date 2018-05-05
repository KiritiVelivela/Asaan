import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-referal',
  templateUrl: 'referal.html',
})
export class ReferalPage {
  selectedItem: any;
  icons: string[];
  pnames: string[];
  levels: string[];
  items: Array<{pid: string, pname: string, referedby: string, level: string, referaldate: string, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.icons = ['man', 'woman'];
    
        this.pnames = ['Mourya Kota', 'Sanjay', 'Sheetal', 'Kiran', 'Nidhi', 'Vaishnavi', 
        'Ranjith', 'Shashank', 'Ranjan', 'Shruti'];
    
        this.levels = ['Level3', 'Level2'];
    
        this.items = [];
        for (let i = 1; i < 11; i++) {
          this.items.push({
            pid: 'PID' + i,
            pname: this.pnames[Math.floor(Math.random() * this.pnames.length)],
            referedby: this.pnames[Math.floor(Math.random() * this.pnames.length)],
            level: this.levels[Math.floor(Math.random() * this.levels.length)],
            referaldate: '12/13/2029',
            icon: this.icons[Math.floor(Math.random() * this.icons.length)]
          });
        }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ReferalPage, {
      item: item
    });
  }

}
