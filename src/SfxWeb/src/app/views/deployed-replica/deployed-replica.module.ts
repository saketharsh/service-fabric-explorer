import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeployedReplicaRoutingModule } from './deployed-replica-routing.module';
import { BaseComponent } from './base/base.component';
import { EssentialsComponent } from './essentials/essentials.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [BaseComponent, EssentialsComponent, DetailsComponent],
  imports: [
    CommonModule,
    DeployedReplicaRoutingModule
  ]
})
export class DeployedReplicaModule { }
