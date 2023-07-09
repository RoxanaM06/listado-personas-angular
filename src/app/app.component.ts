import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [
    new Persona('Maria','Lopez'), 
    new Persona('Omar','Gonzalez'),
    new Persona('Juan','Perez')
  ];
  /*
  nombreInput:string = '';
  apellidoInput:string = '';

  agregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);
  }
  */
  personaAgregada(persona: Persona) {
    this.personas.push(persona);
  }
}
