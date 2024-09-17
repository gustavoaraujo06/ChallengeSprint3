export default function MemberCard({nome, rm}: {nome: string, rm:number}){
    return (
        <div className="memberCardContainer">
            <div className="memberCard">
                <div className="front">
                    <h3>{nome}</h3>
                </div>
                <div className="back">
                    <h3>RM: {rm}</h3>
                </div>
            </div>
        </div>
    )
}