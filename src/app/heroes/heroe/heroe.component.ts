import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
  nombre: string = 'Superman';
  edad: number = 45;

  detalles() : string {
    return `${this.nombre} - ${this.edad}`
  }

  //Un get es llamado como una propiedad (no necesita ()) y no como un método
  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  cambiarNombre(): void{
    this.nombre = 'Spiderman'
  }

  cambiarEdad(): void{
    this.edad = 22
  }

}


