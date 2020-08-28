import { NgModule } from '@angular/core';
import { ThirdPartyLibComponent } from './third-party-lib.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ThirdPartyLibComponent, HeaderComponent],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ThirdPartyLibComponent,
    HeaderComponent
  ]
})
export class ThirdPartyLibModule { }
