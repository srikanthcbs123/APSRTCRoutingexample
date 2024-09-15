import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { CustomercareComponent } from './customercare/customercare.component';
import { TicketstatusComponent } from './ticketstatus/ticketstatus.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { TicketserviceComponent } from './ticketservice/ticketservice.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WalletComponent } from './wallet/wallet.component';
import { TimetableComponent } from './timetable/timetable.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { BussearchComponent } from './bussearch/bussearch.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    CustomercareComponent,
    TicketstatusComponent,
    CancelticketComponent,
    TicketserviceComponent,
    GalleryComponent,
    WalletComponent,
    TimetableComponent,
    LogisticsComponent,
    BussearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
