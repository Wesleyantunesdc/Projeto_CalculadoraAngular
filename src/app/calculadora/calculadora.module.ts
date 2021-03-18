import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora';

@NgModule({
  declarations: [CalculadoraComponent],
  imports: [
    CommonModule
  ],
  exports:[CalculadoraComponent]
})
export class CalculadoraModule { }
