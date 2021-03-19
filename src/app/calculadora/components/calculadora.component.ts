import { Component, OnInit } from '@angular/core';
import { CalculadoraService} from '../services';

@Component({
  selector: 'app-calc',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  constructor(private calculadoraService:CalculadoraService) { }

  ngOnInit(): void {
  }

}