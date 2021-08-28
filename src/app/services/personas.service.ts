import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonaModel } from '../models/persona.model';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private url = 'http://localhost:8001';

  constructor( private http: HttpClient ) { }

  getPersona(id: string) {
    return this.http.get(`${ this.url }/personas/${ id }`);
  }

  getPersonas() {
    return this.http.get(`${ this.url }/personas/`).pipe(delay(0));
  }

  crearPersona( persona: PersonaModel ) {
    return this.http.post(`${ this.url }/personas/`, persona);
  }

  actualizarPersona(persona: PersonaModel) {

    const personaTemp = {
      ...persona
    };
    delete personaTemp.id;

    return this.http.put(`${ this.url }/persona/${ persona.id }`, personaTemp);
  }

  borrarPersona(id: string) {
    return this.http.delete(`${ this.url }/persona/${ id }`);
  }
}
