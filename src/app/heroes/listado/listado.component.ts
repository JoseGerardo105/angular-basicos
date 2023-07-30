import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  //Constructor Se ejecuta antes de la renderización del componente
  //ngOnInit() Usualmente se utiliza para inicializar cosas como para traer la información de algún servicio

  heroeBorrado: string = '' ;
  //Directiva ngFor
  heroes: string[] = ['Spiderman', 'Ironman','Hulk', 'Thor', 'Capitan America'];

  borrarHeroe(){
                                          //Si es undefined toma el valor de ''
    this.heroeBorrado = this.heroes.pop() || '';
  }

}
