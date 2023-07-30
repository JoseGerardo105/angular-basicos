import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{title}}</h1>
    <h3>La base es de <strong> {{base}} </strong></h3>
    <button (click)=" acumular(base) ">+{{base}}</button>
    <span> {{numero}} </span>
    <button (click)=" acumular(-base) ">-{{base}}</button>
  `
})
export class ContadorComponent{
  //Podemos pasar estos atributos al html, si queremos mostrarlo con {{}}
  title:string = 'Contador APP';
  numero:number = 10;

  base:number = 5;

  //Se pueden llamar funciones desde el HTML
  acumular(valor: number){
    this.numero += valor;
  }
}
