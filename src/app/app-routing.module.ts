import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {AuthGuard} from './guard/auth.guard';
import {AlbumDetail} from './album/album.component';
const routes: Routes = [

    { path: 'album', component:AlbumDetail },

   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
