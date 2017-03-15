import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot([
      {path: '', loadChildren: './whoami/whoami.module#WhoamiModule'},
      {path: 'about', loadChildren: './about/about.module#AboutModule'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
