import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

const routes: Routes = [
  { path: 'list', component: TableComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'calculator', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
