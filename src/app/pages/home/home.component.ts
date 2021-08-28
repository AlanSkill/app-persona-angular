import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';
import { PersonaModel } from 'src/app/models/persona.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  personas: PersonaModel[] = [];
  respuesta: any;
  cargando = false;

  constructor(private personasService: PersonasService ) { }

  ngOnInit() {
    this.cargando = true;
    this.personasService.getPersonas()
    .subscribe( resp => {
      this.respuesta = resp;
      this.personas = this.respuesta.lista;
      // ordenar las personas por id
      this.personas.sort((a, b) => Number(a.id) - Number(b.id));
      this.cargando = false;
    });
  }

}
