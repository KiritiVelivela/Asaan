import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AdmitProvider } from '../../providers/admit/admit';

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
  // user = {
  //   name: 'Seshachari B',
  //   profileImage: 'assets/img/avatar/girl-avatar.png',
  //   coverImage: 'assets/imgs/KGH-Logo.png',
  //   occupation: '24 years',
  //   location: 'Male',
  //   description: '8886558488 | Bombay Colony, Rushikonda | seshachari@test.com',
  //   followers: 456,
  //   following: 1052,
  //   posts: 35
  // };

  // posts = [
  //   {
  //     postImageUrl: 'assets/img/background/background-2.jpg',
  //     text: `CT Scan Findings at Admission - EDH`,
  //     date: '2:40PM November 5, 2016',

  //   },
  //   {
  //     postImageUrl: 'assets/img/background/background-3.jpg',
  //     text: 'CT Scan Findings - SAD',
  //     date: '11:00AM October 23, 2016',

  //   },
  //   {
  //     postImageUrl: 'assets/img/background/background-4.jpg',
  //     date: '4:00PM June 28, 2016',
  //     text: `Contusion`,
  //   },
  // ];

  // profile: Array<{pid: string, pname: string, ward: string, injury: string, stamp: string, icon: string}>;

  pdetails: any;
  updat = [];
  // updat: any;
  authForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public formBuilder: FormBuilder,public admitService: AdmitProvider) {
    this.authForm = formBuilder.group({
      PatientId: ['', Validators.compose([Validators.required])],
      BP: ['', Validators.compose([Validators.required])],
      Pulse: ['', Validators.compose([Validators.required])],
      Pupils: ['', Validators.compose([Validators.required])],
      Blood: ['', Validators.compose([Validators.required])],
      GCS_Eye: ['', Validators.compose([Validators.required])],
      GCS_Verbal: ['', Validators.compose([Validators.required])],
      GCS_Motor: ['', Validators.compose([Validators.required])],
      GCS_Total: ['', Validators.compose([Validators.required])],
      CTScan: ['', Validators.compose([Validators.required])],
      medications: ['', Validators.compose([Validators.required])],
      reports: ['', Validators.compose([Validators.required])],
      Status: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.pdetails = this.navParams.get("firstparams")
    console.log(this.pdetails);
    // console.log(this.navParams.data);
    console.log(this.pdetails.PatientId);
    this.admitService.getupdates(this.pdetails.PatientId).subscribe(data => {
      if(data) {
        console.log("hellooo this is getUpdates Start");
        console.log(data);
        if(data.records.length > 1) {
          for (let i = 0; i < data.records.length; i++) {
            data.records[i];
            console.log(data.records[i]);
            this.updat.push(data.records[i]);
          }
        }
        else{
          this.updat.push(data);
        }
        console.log(this.updat);
        console.log("hellooo this.updat");
      }
    });
  }

  onSubmit(value: any): void { 
    value.PatientId = this.pdetails.PatientId
    value.Pupils = "Normal"
    value.reports = "Nothing"
    value.CTScan = "Normal"
    value.Status = "Genral Ward"
    value.medications = "Continue"
    this.admitService.profileupdate(value).then(data => {
      if(data) {
        console.log("on login click!!!!");
        console.log(data);
      }
      })
    console.log(value);
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
