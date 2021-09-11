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
  persona: PersonaModel = new PersonaModel();

  // Variable para respuesta de todas las personas
  respTodas: any;
  // Variable para respuesta de guardar una persona
  respGuard: any;

  cargando = false;

  // Modal Agregar Editar
  modalTitle ="";

  
  constructor( private personasService: PersonasService ) { }

  ngOnInit() {
    this.cargando = true;
    
    this.personasService.getPersonas()
    .subscribe( resp => {
      this.respTodas = resp;
      // filtra el arreglo con estatus activo
      this.personas = this.respTodas.filter(persona => persona.estatus === "a");
      // ordenar las personas por id
      this.personas.sort((a, b) => Number(a.id) - Number(b.id));
      this.cargando = false;
    });
  }
  addClick(){
    this.modalTitle="Agregar Persona";
    this.persona.id="0";
    this.persona.nombre="";
    this.persona.primer_apellido="";
    this.persona.segundo_apellido="";
    this.persona.telefono="";
    this.persona.estatus="a";
  }
  editClick(seleccionado: PersonaModel, i: number){
    this.modalTitle="Editar Persona";
    this.persona.id=seleccionado.id;
    this.persona.nombre=seleccionado.nombre;
    this.persona.primer_apellido=seleccionado.primer_apellido;
    this.persona.segundo_apellido=seleccionado.segundo_apellido;
    this.persona.telefono=seleccionado.telefono;
    this.persona.estatus=seleccionado.estatus;
  }
  // Guardar nueva y actualizar persona
  guardar( form: NgForm ) {
    this.personasService.crearActualizarPersona(this.persona)
      .subscribe(resp => {
        this.respGuard=resp;
        console.log(resp);
      });
  }
  // Borrar persona
  borrarPersona( seleccionada: PersonaModel, i: number ) {
    console.log(seleccionada.id);
    this.personasService.borrarPersona(seleccionada.id).subscribe();
    location.reload();
  }

}
