import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { HomeComponent } from './home/home.component';
import { AccountsPageComponent } from './accounts-page/accounts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountFormComponent,
    HomeComponent,
    AccountsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
