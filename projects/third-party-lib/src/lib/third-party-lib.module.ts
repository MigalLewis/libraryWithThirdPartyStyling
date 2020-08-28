import { NgModule } from '@angular/core';
import { ThirdPartyLibComponent } from './third-party-lib.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [ThirdPartyLibComponent, HeaderComponent],
  imports: [
  ],
  exports: [
    ThirdPartyLibComponent,
    HeaderComponent
  ]
})
export class ThirdPartyLibModule { }
