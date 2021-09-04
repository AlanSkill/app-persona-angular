import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';
import { PersonaModel } from 'src/app/models/persona.model';
import { NgForm } from '@angular/forms';

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

  // Modal Agregar Editar
  modalTitle ="";

  persona: PersonaModel = new PersonaModel();
  

  constructor( private personasService: PersonasService ) { }

  ngOnInit() {
    this.cargando = true;
    
    this.personasService.getPersonas()
    .subscribe( resp => {
      this.respuesta = resp;
      // filtra el arreglo con estatus activo
      this.personas = this.respuesta.filter(persona => persona.estatus === "a");
      // ordenar las personas por id
      this.personas.sort((a, b) => Number(a.id) - Number(b.id));
      this.cargando = false;
    });
  }
  guardar( form: NgForm ) {

  }
  addClick(){
    this.modalTitle="Agregar Persona";
  }
  editClick(){
    this.modalTitle="Editar Persona";
  }
  

}
