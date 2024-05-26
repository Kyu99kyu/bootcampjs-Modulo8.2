import {obtenPacientesAsignadosAPediatria} from "./motor";
import {Pacientes,pacientes} from "./modelo";

const listaDePacientes : Pacientes[] = obtenPacientesAsignadosAPediatria(pacientes);


console.log(listaDePacientes)