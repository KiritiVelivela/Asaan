import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  selectedItem: any;
  icons: string[];
  pnames: string[];
  levels: string[];
  roles: string[];
  items: Array<{pid: string, pname: string, role: string, level: string, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
            // If we navigated to this page, we will have an item available as a nav param
            this.selectedItem = navParams.get('item');
            this.icons = ['man', 'woman'];
        
            this.pnames = ['Mourya Kota', 'Sanjay', 'Sheetal', 'Kiran', 'Nidhi', 'Vaishnavi', 
            'Ranjith', 'Shashank', 'Ranjan', 'Shruti'];
        
            this.levels = ['Level3', 'Level2'];
            this.roles = ['Paramedic Attendant', 'Staff Nurse/Doctor'];

            this.items = [];
            for (let i = 1; i < 11; i++) {
              this.items.push({
                pid: 'PID' + i,
                pname: this.pnames[Math.floor(Math.random() * this.pnames.length)],
                role: this.roles[Math.floor(Math.random() * this.roles.length)],
                level: this.levels[Math.floor(Math.random() * this.levels.length)],
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
              });
            }
  }


}
