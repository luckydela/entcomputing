import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import {FooterComponent}  from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  
  
  {path:'', 
  component:HeaderComponent,
  children:[
  {path:'aboutus',component:AboutComponent},
{path:'contactus',component:ContactComponent}
]
},
{path:'', component:LandingComponent, outlet:'secondary'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponent=[ LandingComponent,HeaderComponent,
   FooterComponent,AboutComponent,ContactComponent, ClientComponent]
