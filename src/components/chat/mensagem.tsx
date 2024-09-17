export default function Mensagem({mensagem, foto, side}: {mensagem: string, foto: string, side:string}){
    return (
    <>
        <div className={`mensagem ${side}`}>
            <div className="foto">
                <img src={foto} alt="Foto do usuário" />
            </div>
            <p>{mensagem}</p>
        </div>
    </>)
}