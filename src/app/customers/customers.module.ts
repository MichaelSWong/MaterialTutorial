import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CustomersRoutingModule } from "./customers-routing.module";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerCardComponent } from "./customer-card/customer-card.component";
import { MaterialModule } from "../material/material.module";
import { CustomerNewComponent } from "./customer-new/customer-new.component";

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCardComponent,
    CustomerNewComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Material Components
    MaterialModule
  ]
})
export class CustomersModule {}
