import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { HomeComponent } from './pages/home/home.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { LayoutComponent } from './layout/layout.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ClientsComponent,
    SkillsComponent,
    HomeComponent,
    TestimonialsComponent,
    LayoutComponent,
    SinglePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
