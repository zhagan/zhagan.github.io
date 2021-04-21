import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicianComponent } from './musician/musician.component';
import { DeveloperComponent } from './developer/developer.component';

const routes: Routes = [
  { path: 'music', component: MusicianComponent },
  { path: 'code', component: DeveloperComponent },
  { path: '', component: MusicianComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
