import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputersComponent } from './computers/computers.component';
import { DesktopComponent } from './desktop/desktop.component';
import { FreshComponent } from './fresh/fresh.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimCardComponent } from './sim-card/sim-card.component';
import { ToysComponent } from './toys/toys.component';

const routes: Routes = [
  {path:'fresh',component:FreshComponent},
  {path:'mobiles',component:MobilesComponent,children:[{path:'simcard',component:SimCardComponent},]},
  {path:'computers',component:ComputersComponent,children:[{path:'desktop',component:DesktopComponent},]},
  {path:'toys',component:ToysComponent},
  
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
