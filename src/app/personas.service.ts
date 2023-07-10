import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas: Persona[] = [
        new Persona('Maria','Lopez'), 
        new Persona('Omar','Gonzalez'),
        new Persona('Juan','Perez')
      ];

    saludar = new EventEmitter<number>();
    
    constructor(private loggingService:LoggingService){}
    
    agregarPersona(persona: Persona) {
      this.loggingService.enviarMensajeAConsola("Agregamos persona: "+persona.nombre)
      this.personas.push(persona);
    }
}