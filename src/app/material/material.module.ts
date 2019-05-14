import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule
} from "@angular/material";

const material = [MatButtonModule, MatIconModule, MatSidenavModule];
@NgModule({
  imports: [CommonModule, material],
  exports: [material],
  declarations: []
})
export class MaterialModule {}
