import { Component, OnInit } from '@angular/core';
import { Serviceapi } from './../service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { apiResponse } from './../model/api.model';
import { Router } from '@angular/router';


@Component({
    selector: 'album',
    templateUrl: './album.component.html',
})

export class AlbumDetail implements OnInit {

    public detail: apiResponse;

    /*start form model variable*/

    albumId1: number = 0;
    id: number = 0;
    title: string = "";
    url: string = "";
    thumbnailUrl: string = "";




    constructor(private dataService: Serviceapi, private router: Router) {

    }

    ngOnInit() {

        this.detail = new apiResponse();

        console.log('h');
 
    }

    findAlbuminfo() {
        var myJSONObject = {};

        this.dataService.registerNewAlbum(myJSONObject).subscribe(result => {
            console.log("Final response" + JSON.stringify(result));
            this.detail.albumId = result["albumId"];
            this.detail.id = result["id"];
            this.detail.title = result["title"];
            this.detail.url = result["url"];
            this.detail.thumbnailUrl = result["thumbnailUrl"];

             this.albumId1 = this.detail.albumId;
             this.thumbnailUrl = this.detail.thumbnailUrl;
             this.url = this.detail.url;
          
        }, err => {
            console.log(err);0
        });



    }
    submitForm(formData: NgForm) {

        console.log(formData.value);
        console.log("=======================>" + JSON.stringify(formData.value));
        // this.registerNewPatientDetail(JSON.parse(JSON.stringify(formData.value)));
        this.findAlbuminfo();
    }

}
