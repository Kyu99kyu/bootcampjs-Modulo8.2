import {Pacientes} from "./modelo";
import "./style.css";

//Apartado 1 
//A) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
const ESPECIALIDAD_PEDIATRA : string = "Pediatra";
const LIMITE_EDAD : number = 10;
const FRECUENCIA_CARDIACA : number= 100;
const TEMPERATURA : number = 39

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

//Apartado 2
/**
 Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

Es decir, crear una función que devuelve true/false dependiendo si se da la condición, algo así como:
 */

export const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    return pacientes.some((paciente : Pacientes): boolean =>
         paciente.frecuenciaCardiaca > FRECUENCIA_CARDIACA &&
         paciente.temperatura > TEMPERATURA)
};