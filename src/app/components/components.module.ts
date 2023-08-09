import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';




@NgModule({
  declarations: [
    TableComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    TableComponent,
    CalculatorComponent
  ],

})
export class ComponentsModule { }
