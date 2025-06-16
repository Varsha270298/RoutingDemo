import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreshComponent } from './fresh/fresh.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ComputersComponent } from './computers/computers.component';
import { ToysComponent } from './toys/toys.component';
import { SimCardComponent } from './sim-card/sim-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DesktopComponent } from './desktop/desktop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { PersonComponent } from './person/person.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductAlertsComponent } from './productlist/product-alerts/product-alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    FreshComponent,
    MobilesComponent,
    ComputersComponent,
    ToysComponent,
    SimCardComponent,
    PageNotFoundComponent,
    DesktopComponent,
    FormsComponent,
    ProfileEditorComponent,
    PersonComponent,
    ProductlistComponent,
    ProductAlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
