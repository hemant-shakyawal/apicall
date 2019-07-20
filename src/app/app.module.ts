import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guard/auth.guard';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import{Serviceapi} from './service'
import {AlbumDetail} from './album/album.component';



@NgModule({
  declarations: [
    AppComponent, AlbumDetail
  ],
  imports: [
    BrowserModule,AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule
    
   
  ],
  providers: [AuthGuard ,Serviceapi],
  bootstrap: [AppComponent]
})
export class AppModule { }
