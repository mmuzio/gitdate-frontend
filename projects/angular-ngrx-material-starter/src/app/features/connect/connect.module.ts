import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { ConnectRoutingModule } from './connect-routing.module';
import { ConnectComponent } from './connect/connect.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ConnectComponent],
  imports: [
    CommonModule, 
    SharedModule, 
    ConnectRoutingModule,
    NgbModule
  ]
})
export class ConnectModule {}