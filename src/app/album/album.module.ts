import { NgModule } from '@angular/core';
import {AlbumDetail} from './album.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
     
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AlbumDetail,
        
    ]
})
export class albumModule {}
