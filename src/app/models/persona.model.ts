export class PersonaModel{
    id: string;
    nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    telefono: string;
    estatus: string;

    // estatus "a" es igual a activo
    constructor(){
        this.estatus = 'a';
    }
}