import { useState } from "react"
import "./chat.css"
import Mensagem from "./mensagem"
interface mensagem{
    mensagem: string,
    foto: string,
    side: string
}
export default function Chat(){
    const [mensagens, setMensagens] = useState<mensagem[]>(
        [{
            mensagem: "Olá, como posso te ajudar?", 
            foto: "/mecatus.png", 
            side: "left"}]
    )
    const handleMessage = () => {
        const input = document.getElementById("messageInput") as HTMLInputElement
        setMensagens([...mensagens, {mensagem: input.value, foto: "/profilePic.png", side: "right"}])
        input.value = ""
    }
    return (
        <div id="chat">
            <div id="messagesContainer">
               {mensagens.map((mensagem, index) => <Mensagem key={index} mensagem={mensagem.mensagem} foto={mensagem.foto} side={mensagem.side}/>)}
            </div>
            <div id="messagesInput">
                <input type="text" id="messageInput" placeholder="Digite sua mensagem..."/>
                <button id="sendButton" onClick={handleMessage}>Enviar</button>
            </div>
        </div>
    )
}