import {Pacientes} from "./modelo";
import "./style.css";

//Apartado 1 
//A) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
const ESPECIALIDAD_PEDIATRA : string = "Pediatra";
const LIMITE_EDAD : number = 10

export const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    return pacientes.filter((paciente : Pacientes) : boolean=>paciente.especialidad === ESPECIALIDAD_PEDIATRA);
};

//B) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    return pacientes.filter((paciente : Pacientes) : boolean => paciente.especialidad === ESPECIALIDAD_PEDIATRA && paciente.edad < LIMITE_EDAD);
};