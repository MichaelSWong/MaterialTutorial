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
  MatTabsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatRadioModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatTableModule,
  MatSortModule,
  MatCheckboxModule,
  MatPaginatorModule
} from "@angular/material";
import { MatMomentDateModule } from "@angular/material-moment-adapter";

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
  MatTabsModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatDialogModule,
  MatRadioModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatTableModule,
  MatSortModule,
  MatCheckboxModule,
  MatPaginatorModule
];
@NgModule({
  imports: [CommonModule, material],
  exports: [material],
  declarations: []
})
export class MaterialModule {}
