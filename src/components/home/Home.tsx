import Card from "./Card"
import "./home.css"
export default function Home() {
    return (
        <div id="home">
            <Card title="Faça um Diagnostico" description="Explique para nossa IA o seu problema e ela te ajudara a resolve-lo" image="/chat.png" path="/chat" />
            <Card title="Acesse seu Historico" description="Acesse seu historico de processos e veja como está a situação" image="/historico.png" path="/historico"/>
            <Card title="Veja os Integrantes" description="Acesse a pagina de integrantes quem fez esse sistema" image="/perfil.png" path="/about"/>
        </div>
    )
}