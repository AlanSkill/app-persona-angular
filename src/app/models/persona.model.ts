export class PersonaModel{
    id: string;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    telefono: string;
    estatus: string;

    // estatus "a" es igual a activo
    constructor(){
        this.estatus = 'a';
    }
}