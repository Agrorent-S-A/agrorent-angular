import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class advertisements {
    constructor(private httpClient: HttpClient) { }


    saveAdv(ad: string) {
        this.httpClient
            .post('https://login-agrorent-default-rtdb.europe-west1.firebasedatabase.app/ad.json', ad)
            .subscribe(responseData => {
                console.log(responseData);
                return responseData;
            });
    }

    getAd():any {
        this.httpClient
            .get('https://login-agrorent-default-rtdb.europe-west1.firebasedatabase.app/ad.json')
            .subscribe(responseData => {            
                console.log('responseData', responseData)
            });
             
    }
}
