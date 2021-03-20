import { Component, OnInit } from '@angular/core';
import { CalculadoraService} from '../services';

@Component({
  selector: 'app-calc',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;


  constructor(private calculadoraService:CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }


  limpar():void{
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  adicionarNumero(numero: string):void{
    if(this.operacao ===null){
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    }else{
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  concatenarNumero(numeroAtual:string, numeroConc:string):string{
      if(numeroAtual === '0' || numeroAtual === null){
        numeroAtual = '';
      }

      if(numeroConc==='.' && numeroAtual === ''){
        return '0.';
      }

      if(numeroConc === '.' && numeroAtual.indexOf('.')> -1){
        return numeroAtual;
      }
      return numeroAtual + numeroConc;
  }

  definirOperacao(operacao:string):void{
    //Apenas defini a operação caso não exista uma
    if(this.operacao === null){
      this.operacao = operacao;
      return;
    }

    //Caso operacao definida e número 2 selecionado efetua o calculo da operacao
    if(this.numero2!=null){
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),parseFloat(this.numero2),this.operacao);
        this.operacao = operacao;
        this.numero1 = this.resultado.toString();
        this.numero2 = null;
        this.resultado = null;
    }
  }

  /**
   * Efetua o cálculo de uma operação
   * @return void
   */
  calcular(): void{
    if(this.numero2 === null){
      return;
    }

    this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),parseFloat(this.numero2),this.operacao);
  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora.
   * @return string
   */

  get display():string{
    if(this.resultado !== null){
      return this.resultado.toString();
    }

    if(this.numero2 !== null){
      return this.numero2;
    }
    return this.numero1;
  }
}
