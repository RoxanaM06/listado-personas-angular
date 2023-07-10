import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';
  personas: Persona[] = [];
  /*
  personas: Persona[] = [
    new Persona('Maria','Lopez'), 
    new Persona('Omar','Gonzalez'),
    new Persona('Juan','Perez')
  ];
  */
  constructor(private loggingService:LoggingService,
              private personasService:PersonasService){}

  ngOnInit(): void {
      this.personas = this.personasService.personas;
  }
  
  /*
  nombreInput:string = '';
  apellidoInput:string = '';

  agregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);
  }
  */
  /*
  onPersonaAgregada(persona: Persona) {
    //this.loggingService.enviarMensajeAConsola("Agregamos al arreglo la nueva persona "+persona.nombre)
    //this.personas.push(persona);
    this.personasService.agregarPersona(persona);
  }
  */
}
