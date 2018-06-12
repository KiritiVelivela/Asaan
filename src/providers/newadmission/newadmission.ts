import { Http,  Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class NewadmissionProvider {

  constructor(public http: Http) {
    console.log('Hello NewadmissionProvider Provider');
  }

  new_admission(user) {
    var creds = user;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {
      console.log("Inside providers");
      console.log(creds);
      this.http.post('http://app.traumacare.co/PHP/product/create.php', creds, {headers: headers}).subscribe(data => {
        if(data){
          // this.storeUserCredentials(data.json());
          console.log(data);
          resolve(data.json().verified);
        }
        else
          resolve(false);
      });
    });
  }

}
