import {Pacientes} from "./modelo";
import "./style.css";

//Apartado 1 
//A) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
const pediatra : string = "Pediatra";
const edad : number = 10

export const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    return pacientes.filter((paciente : Pacientes)=>paciente.especialidad === pediatra);
};

//B) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    return pacientes.filter((paciente : Pacientes)=> paciente.especialidad === pediatra && paciente.edad < edad);
};