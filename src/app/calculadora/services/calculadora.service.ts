/**
 * Serviço responsável por executar as operações da
 * calculadora.
 * 
 * @author Wesley Antunes
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /*
    Define as constantes utilizadas 
    para identificar os possivel calculos
  */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICADO: string = '*';

  constructor() { }

  /**
   * Metodo que calcula uma operação matematica
   * 
   * @param num1 number
   * @param num2 number
   * @param operacao operacao string Operação a ser executada
   * @returns number resultado da operacao
   */

  calcular(num1:number, num2:number, operacao:string):number{
    let resultado:number; // Armazena o resultado da operação

    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1+num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1-num2;
        break;
      case CalculadoraService.MULTIPLICADO:
        resultado = num1*num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1/num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }


}
