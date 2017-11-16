import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BodyComponent } from './Components/body/body.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { DirectivasComponent } from './Components/directivas/directivas.component';
import { PipesComponent } from './Components/pipes/pipes.component';
import { StripHtmlPipe } from './Pipes/strip-html.pipe';
import { TruncateStringPipe } from './Pipes/truncate-string.pipe';
import { FormsComponent } from './Components/forms/forms.component';

import {UserProviderService} from './Services/user-provider.service';
import { ReactiveFormsComponent } from './Components/reactive-forms/reactive-forms.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DataBindingComponent,
    DirectivasComponent,
    PipesComponent,
    StripHtmlPipe,
    TruncateStringPipe,
    FormsComponent,
    ReactiveFormsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [
    UserProviderService,
    {provide: LOCALE_ID,useValue:"es-ES"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
