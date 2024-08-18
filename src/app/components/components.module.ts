import { AsyncPipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import ButtonComponent from './button/button.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    NavComponent,
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    NavComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
     FormsModule,
    AsyncPipe,
  ],
  providers: [],
})
export class ComponentsModule {}
