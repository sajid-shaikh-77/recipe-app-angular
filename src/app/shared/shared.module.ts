import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    AlertComponent,
    DialogComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule,
  ],
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    DialogComponent,
  ],
  providers: [],
})
export class SharedModule {}
