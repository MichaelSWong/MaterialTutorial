import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule
} from "@angular/material";

const material = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule
];
@NgModule({
  imports: [CommonModule, material],
  exports: [material],
  declarations: []
})
export class MaterialModule {}
