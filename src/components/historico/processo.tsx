export default function Processo({title, status, placa}: {title: string, status: number, placa: string}){
    const statusLabel = ["Em andamento", "Finalizado", "Cancelado"]
    const statusColor = ["#FFD700", "#00FF00", "#FF0000"]
    return (
        <div className="processo">
            <div className="processoField">
                <h3>
                    Titulo
                </h3>
                <p>
                    {title}
                </p>
            </div>
            <div className="processoField">
            <h3>
                    Status
                </h3>
                <p style={{color: statusColor[status]}}>
                    {statusLabel[status]}
                </p>
            </div>
            <div className="processoField">
                <h3>
                    Placa do Veiculo
                </h3>
                <p>
                    {placa}
                </p>
            </div>
        </div>
    )

}