import {obtenPacientesAsignadosAPediatria, obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios, activarProtocoloUrgencia} from "./motor";
import {Pacientes,pacientes} from "./modelo";

const listaDePacientes : Pacientes[] = obtenPacientesAsignadosAPediatria(pacientes);
const pacientesPedriatriaMenorDeDiez : Pacientes[] = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
const protocoloUrgencia : boolean = activarProtocoloUrgencia(pacientes);


console.log({listaDePacientes});
console.log({pacientesPedriatriaMenorDeDiez});
console.log(protocoloUrgencia);