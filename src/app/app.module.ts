import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import {FormsModule} from '@angular/forms';
import { ForbiddenValidatorDirective } from './shared/forbidden-validator.directive';
import { IdentityRevealedValidatorDirective } from './shared/identity-revealed-validator.directive';
import { MinValueValidatorDirective } from './shared/min-value-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    MinValueValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
