import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  //@Output() personaCreada = new EventEmitter<Persona>();
  
  nombreInput:string = '';
  apellidoInput:string = '';

  constructor(private loggingService:LoggingService,
              private personasService:PersonasService){
                this.personasService.saludar.subscribe(
                  (indice:number) => alert("El indice es: "+indice)
                );
              }
  
  onAgregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //this.personas.push(persona1);
    //this.loggingService.enviarMensajeAConsola("Enviamos persona:" + persona1.nombre + " apellido: " + persona1.apellido);
    //this.personaCreada.emit(persona1) //Permite propagar información del componente hijo al componente padre
    this.personasService.agregarPersona(persona1);
  }
}
