import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomersRoutingModule } from "./customers-routing.module";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerCardComponent } from "./customer-card/customer-card.component";

// Material Components
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule
} from "@angular/material";

@NgModule({
  declarations: [CustomerListComponent, CustomerCardComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,

    // Material Components
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class CustomersModule {}
