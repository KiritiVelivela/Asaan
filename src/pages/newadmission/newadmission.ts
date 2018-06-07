import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { ListPage } from '../list/list';
import { NewadmissionProvider } from '../../providers/newadmission/newadmission';

/**
 * Generated class for the NewadmissionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newadmission',
  templateUrl: 'newadmission.html',
})
export class NewadmissionPage {

  authForm: FormGroup;

  constructor(public newadmissionservice: NewadmissionProvider, public nav: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {

    this.geolocation.getCurrentPosition().then((resp) => {
			console.log(resp);
			this.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
			// this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.latitude)
  			// 	.then((result: NativeGeocoderReverseResult) => console.log(JSON.stringify(result)))
  			// 	.catch((error: any) => console.log(error));
			// resp.coords.latitude
			// resp.coords.longitude
		   }).catch((error) => {
			 console.log('Error getting location', error);
		   });

		this.nav = nav;

	    this.authForm = formBuilder.group({
	        PatientName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
			PatientAge: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.min(5)])],
			PatientGender: ['', Validators.compose([Validators.required])],
			PatientId: ['', Validators.compose([Validators.required])],
			PatientNo: ['', Validators.compose([Validators.required])],
			PatientAddress: ['', Validators.compose([Validators.required])],
			PatientEmail: ['', Validators.compose([Validators.required])],
			ModeOfInjury: ['', Validators.compose([Validators.required])],
			DateOfInjury: ['', Validators.compose([Validators.required])],
			TimeOfInjury: ['', Validators.compose([Validators.required])],
			DateOfED: ['', Validators.compose([Validators.required])],
			TimeOfED: ['', Validators.compose([Validators.required])],
			ModeOfTransport: ['', Validators.compose([Validators.required])],
			CareAtED: ['', Validators.compose([Validators.required])],
			PatientEducation: ['', Validators.compose([Validators.required])],
			VitalSign_HeartRate: ['', Validators.compose([Validators.required])],
			VitalSign_BP: ['', Validators.compose([Validators.required])],
			VitalSign_RespiratoryRate: ['', Validators.compose([Validators.required])],
			VitalSign_O2: ['', Validators.compose([Validators.required])],
			GCS_Eye: ['', Validators.compose([Validators.required])],
			GCS_Verbal: ['', Validators.compose([Validators.required])],
			GCS_Motor: ['', Validators.compose([Validators.required])],
			GCS_Total: ['', Validators.compose([Validators.required])],
			CervicalSpine: ['', Validators.compose([Validators.required])],
			PupilsArrival: ['', Validators.compose([Validators.required])],
			AirwayED: ['', Validators.compose([Validators.required])],
			IfAirwaySecuredPTA: ['', Validators.compose([Validators.required])],
			AirwayTreatment: ['', Validators.compose([Validators.required])],
			ScalpBleeding: ['', Validators.compose([Validators.required])],
			Bleeding: ['', Validators.compose([Validators.required])],
			NeuralogicalDeficts: ['', Validators.compose([Validators.required])],
			InfluenceOfAlcohol: ['', Validators.compose([Validators.required])],
			AssociatedInjuries: ['', Validators.compose([Validators.required])],
			CTBrain: ['', Validators.compose([Validators.required])],
			Treatments_Hemorrhage: ['', Validators.compose([Validators.required])],
			Treatments_AirwaySecure: ['', Validators.compose([Validators.required])],
			Treatments_FluidSupport: ['', Validators.compose([Validators.required])],
			Treatments_Transfusion: ['', Validators.compose([Validators.required])],
			Drugs_Mannitol: ['', Validators.compose([Validators.required])],
			Drugs_Phenytoin: ['', Validators.compose([Validators.required])],
			Drugs_Sedation: ['', Validators.compose([Validators.required])],
	    });

  }

  reverseGeocode(lat : number, lng : number) : Promise<any>
   {
      return new Promise((resolve, reject) =>
      {
         this.nativeGeocoder.reverseGeocode(lat, lng)
         .then((result : NativeGeocoderReverseResult) =>
         {
            let str : string   = `The reverseGeocode address is ${result.locality} in ${result.countryCode}`;
            resolve(str);
         })
         .catch((error: any) =>
         {
            console.log(error);
            reject(error);
         });
      });
   }


	onSubmit(value: any): void { 
	    if(this.authForm.valid) {
			this.newadmissionservice.new_admission(value).then(data => {
				if(data) {
				  console.log("on login click!!!!");
				  console.log(data);
				  // if (data == "mail verified") {
				//   console.log(user.email);
				//   this.navCtrl.setRoot(BeginPage, user.email);
				  // }
				  // else{
				  //   let alert = this.alertCtrl.create({
				  //     title: 'Email Not Verified!!',
				  //     subTitle: 'Please verify your email to move ahead.!',
				  //     buttons: ['OK']
				  //   });
				  // alert.present();
				  // }
				}
			  })
			console.log(value);
			// window.localStorage.setItem('username', value.username);
			// window.localStorage.setItem('age', value.age);
			// window.localStorage.setItem('gender', value.gender);
			// window.localStorage.setItem('location', value.location);

			// this.nav.push(ListPage);
	    }
	}

}
