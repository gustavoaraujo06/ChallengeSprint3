import HeaderItem from "./HeaderItem";

export default function Sidebar({sidebarCallback}: {sidebarCallback: (open: boolean) => void}) {
  return (
    <div id="sidebar">
      <button id="sidebarCloseButton" onClick={() => sidebarCallback(false)}>&times;</button>
      <HeaderItem title="Home" location="/home"></HeaderItem>
      <HeaderItem title="Chat" location="/chat"></HeaderItem>
      <HeaderItem title="Historico" location="/historico"></HeaderItem>
      <HeaderItem title="Integrantes" location="/about"></HeaderItem>
      <HeaderItem title="Entrar" location="/login"></HeaderItem>
      <HeaderItem title="Registrar" location="/register"></HeaderItem>
    </div>
  );
}
