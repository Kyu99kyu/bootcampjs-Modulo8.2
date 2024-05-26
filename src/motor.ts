import {Pacientes} from "./modelo";
import "./style.css";

//Apartado 1: Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
const pediatra = "Pediatra";

export const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    return pacientes.filter((paciente : Pacientes)=>paciente.especialidad === pediatra);
  };