import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //Diferentes formas de trabajar con templates
  //1.html separado
  templateUrl: 'app.component.html',

  //2. Escribir el html en acá mismo
  // template: '<h1>Hola que tal</h1>'
  // template: `
  //   <h1>Hola de nuevo</h1>
  // `
  // styleUrls: ['./app.component.css']
})
export class AppComponent {

}
