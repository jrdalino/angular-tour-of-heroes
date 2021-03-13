import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    /* configure app with AmplifyUIAngularModule */
    AmplifyUIAngularModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
