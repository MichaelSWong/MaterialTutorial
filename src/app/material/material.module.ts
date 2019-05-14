import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatCardModule,
  MatTabsModule
} from "@angular/material";

const material = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatCardModule,
  MatTabsModule
];
@NgModule({
  imports: [CommonModule, material],
  exports: [material],
  declarations: []
})
export class MaterialModule {}
