export interface Doctor {
  id: number;
  nombre: string;
  especialidad: string;
  añosExperiencia: number;
  obtenerDetalles(): string;
  actualizarEspecialidad(nuevaEspecialidad: string): void;
}

export class DoctorHospital implements Doctor {
  id: number;
  nombre: string;
  especialidad: string;
  añosExperiencia: number;

  constructor(id: number, nombre: string, especialidad: string, añosExperiencia: number) {
    this.id = id;
    this.nombre = nombre;
    this.especialidad = especialidad;
    this.añosExperiencia = añosExperiencia;
  }

  obtenerDetalles(): string {
    return `El doctor ${this.nombre}, especializado en ${this.especialidad}, tiene ${this.añosExperiencia} años de experiencia.`;
  }

  actualizarEspecialidad(nuevaEspecialidad: string): void {
    this.especialidad = nuevaEspecialidad;
  }
}
