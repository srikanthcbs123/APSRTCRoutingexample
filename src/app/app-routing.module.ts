import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { CustomercareComponent } from './customercare/customercare.component';
import { TicketstatusComponent } from './ticketstatus/ticketstatus.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WalletComponent } from './wallet/wallet.component';
import { TimetableComponent } from './timetable/timetable.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { BussearchComponent } from './bussearch/bussearch.component';
import { TicketserviceComponent } from './ticketservice/ticketservice.component';

const routes: Routes = [
  //EACH ROUTE OBJECT IS A COMBINATION OF PATH AND COMPONENT.
    //EACH OBJECT REPRESENTS ONE ROUTE.
  {path:"home",component:HomeComponent},//By using routing we can navigate to the one page to another page.
  {path:"about",component:AboutUsComponent},//each route is one object
  {path:"contact",component:ContactComponent},
  {path:"customercare",component:CustomercareComponent},
  {path:"ticketstatus",component:TicketstatusComponent},
  {path:"cancelticket",component:CancelticketComponent},
  {path:"ticketservice",component:TicketserviceComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"wallet",component:WalletComponent},
  {path:"timetable",component:TimetableComponent},
  {path:"logistics",component:LogisticsComponent},
  {path:"bussearch",component:BussearchComponent},
  {path:"",component:HomeComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
