import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SilosComponent } from './silos/silos.component';

const routes: Routes = [
	{ path: '', redirectTo: '/indicators', pathMatch: 'full' },
	{ path: 'indicators', component: SilosComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
