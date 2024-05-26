import {obtenPacientesAsignadosAPediatria, obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios} from "./motor";
import {Pacientes,pacientes} from "./modelo";

const listaDePacientes : Pacientes[] = obtenPacientesAsignadosAPediatria(pacientes);
const pacientesPedriatriaMenorDeDiez : Pacientes[] = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);


console.log({listaDePacientes})
console.log({pacientesPedriatriaMenorDeDiez})