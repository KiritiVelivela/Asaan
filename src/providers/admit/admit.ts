import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class AdmitProvider {

  constructor(public http: Http) {
    console.log('Hello AdmitProvider Provider');
  }

  getadmits() {
    return  this.http.get('http://app.traumacare.co/PHP/category/read.php').map(res => res.json());
  }
  

  getprofile(patientID){
    var creds = patientID;
    // var headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return  this.http.get('http://app.traumacare.co/PHP/product/read_one.php?PatientId='+creds).map(res => res.json());
  }

  getupdates(patientID){
    var creds = patientID;
    console.log("Inside getUpdates");
    console.log(creds);
    
    // var headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return  this.http.get('http://app.traumacare.co/PHP/profileupdates/read_one.php?PatientId='+creds).map(res => res.json());
  }

  profileupdate(updates){
    var creds = updates;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {
      console.log("Inside ProfileUpdate Provideer");
      console.log(creds);
      this.http.post('http://app.traumacare.co/PHP/profileupdates/create.php', creds, {headers: headers}).subscribe(data => {
        if(data){
          // this.storeUserCredentials(data.json());
          console.log(data);
          console.log(data.json());
          resolve(data.json().verified);
        }
        else
          resolve(false);
      });
    });
  }

}
