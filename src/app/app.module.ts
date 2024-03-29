import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetownersComponent } from './components/petowners/petowners.component';
import { PeopleService } from './services/people.service';

@NgModule({
  declarations: [AppComponent, PetownersComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
