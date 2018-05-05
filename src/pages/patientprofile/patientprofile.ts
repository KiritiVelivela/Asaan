import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-patientprofile',
  templateUrl: 'patientprofile.html',
})
export class PatientprofilePage {
  testRadioOpen = false;
  testRadioResult: any;
  testICUOpen = false;
  testICUResult: any;

  following = false;
  user = {
    name: 'Seshachari B',
    profileImage: 'assets/img/avatar/girl-avatar.png',
    coverImage: 'assets/imgs/KGH-Logo.png',
    occupation: '24 years',
    location: 'Male',
    description: '8886558488 | Bombay Colony, Rushikonda | seshachari@test.com',
    followers: 456,
    following: 1052,
    posts: 35
  };

  posts = [
    {
      postImageUrl: 'assets/img/background/background-2.jpg',
      text: `CT Scan Findings at Admission - EDH`,
      date: '2:40PM November 5, 2016',

    },
    {
      postImageUrl: 'assets/img/background/background-3.jpg',
      text: 'CT Scan Findings - SAD',
      date: '11:00AM October 23, 2016',

    },
    {
      postImageUrl: 'assets/img/background/background-4.jpg',
      date: '4:00PM June 28, 2016',
      text: `Contusion`,
    },
  ];

  profile: Array<{pid: string, pname: string, ward: string, injury: string, stamp: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.profile = this.navParams.data
    console.log(this.profile);
    console.log(this.navParams.data);
  }

  doRadio() {
    const alert = this.alertCtrl.create();
    alert.setTitle('Disposition');

    alert.addInput({
      type: 'radio',
      label: 'Refered to Higher Center',
      value: 'Refered to Higher Center',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Admitted In ICU',
      value: 'Admitted In ICU'
    });

    alert.addInput({
      type: 'radio',
      label: 'Admitted In Ward',
      value: 'Admitted In Ward'
    });

    alert.addInput({
      type: 'radio',
      label: 'Dishcharge OK',
      value: 'Dishcharge OK'
    });

    alert.addInput({
      type: 'radio',
      label: 'Lama',
      value: 'Lama'
    });

    alert.addInput({
      type: 'radio',
      label: 'Dead',
      value: 'Dead'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present();
  }

  doICU() {
    const alert = this.alertCtrl.create();
    alert.setTitle('CT Scan Findings at Admission');

    alert.addInput({
      type: 'radio',
      label: 'EDH',
      value: 'EDH',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'SDH',
      value: 'SDH'
    });

    alert.addInput({
      type: 'radio',
      label: 'SAH',
      value: 'SAH'
    });

    alert.addInput({
      type: 'radio',
      label: 'DAI',
      value: 'DAI'
    });

    alert.addInput({
      type: 'radio',
      label: 'Contusion',
      value: 'Contusion'
    });

    alert.addInput({
      type: 'radio',
      label: 'Fractures',
      value: 'Fractures'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        console.log('ICU:', data);
        this.testICUOpen = false;
        this.testICUResult = data;
      }
    });

    alert.present();
  }

}
