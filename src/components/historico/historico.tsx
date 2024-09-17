import Processo from "./processo";
import "./historico.css"

export default function Historico(){
    return (
        <div id="historico">
            <Processo title="Luz da Injeção" status={2} placa="ABC-2233"/>
            <Processo title="Barulho no Motor" status={0} placa="ABC-2233"/>
            <Processo title="Vazamento de Combustivel" status={1} placa="CDB-4432"/>
        </div>
    )
}