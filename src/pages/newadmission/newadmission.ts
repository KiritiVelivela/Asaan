import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { ListPage } from '../list/list';

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

  constructor(public nav: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {

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
	        username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
			age: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.min(5)])],
			gender: ['', Validators.compose([Validators.required])]
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
			window.localStorage.setItem('username', value.username);
			window.localStorage.setItem('age', value.age);
			window.localStorage.setItem('gender', value.gender);
			window.localStorage.setItem('location', value.location);

			this.nav.push(ListPage);
	    }
	}

}
