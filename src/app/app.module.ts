import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './components/home/home.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CreateAccountFormComponent } from './components/create-account-form/create-account-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomeComponent,
    CreateAccountComponent,
    CreateAccountFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
