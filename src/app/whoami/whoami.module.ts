import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoamiComponent } from './whoami/whoami.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: WhoamiComponent}
    ])
  ],
  declarations: [WhoamiComponent]
})
export class WhoamiModule { }
