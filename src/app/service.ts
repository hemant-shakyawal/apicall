
import { Injectable } from '@angular/core'; 
import {HttpClient,HttpClientModule, HttpHeaders} from '@angular/common/http' ;
import {Observable} from 'rxjs/Observable';
import { Http,  Response, URLSearchParams, Headers, RequestOptions, RequestOptionsArgs, ResponseType } from '@angular/http';

import {UrlConstants } from './urls/url-constants';
import {apiResponse} from './model/api.model';
@Injectable()
export class Serviceapi {
    authHeaders: HttpHeaders;
    // constructor(private http:HttpClient) {
    // }

    constructor( private http: HttpClient) {
        // this.headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8'});
        // this.reqOptions = new RequestOptions({ headers: this.headers });
        this.authHeaders = new HttpHeaders({'Content-type': 'application/json;charset=UTF-8'});
        
        //this.authHeaders.append('authorization', '29HOQ3QTMCF2KS2foCEmNmgowhhUHh2h');
    }

    // Error handling
    handleError(error: any) {
        console.error('server error:', error);
        if (error instanceof Response) {
            let errMessage = '';
            try {
                errMessage = error.json().error;
                console.log(error.headers.toString() + 'Url: ' + error.url);
            } catch (err) {
                errMessage = error.statusText;
            }
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }

    // Extract data and return it
    private extractData(res: Response) {
        const body = res.json();
        return body.data;
    }
    
    private sendFileUploadResponse(res) {
        return res || {};
    }
    

    registerNewAlbum(albuminfo): Observable<apiResponse>{
        console.log("service calling");
        return this.http.get<apiResponse>(UrlConstants.registerNewAlbum, {headers: this.authHeaders});  



}



}

