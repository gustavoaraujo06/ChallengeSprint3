import HeaderAuth from "./HeaderAuth";
import HeaderItem from "./HeaderItem";
import "./header.css";
import Sidebar from "./sideBar";

export default function Header() {
    const handleSidebar = (open: boolean) => {
        const sidebar = document.getElementById("sidebar");
        if(sidebar != null){
            if(open){
                sidebar.style.display = "flex";
                sidebar.style.width = "100%";
            }else{
                sidebar.style.display = "none";
            }
        }
    }
  return (
    <header>
        <Sidebar sidebarCallback={handleSidebar}></Sidebar>
        <div id="sidebarButton" onClick={() => {
            handleSidebar(true)
        }}>
        ☰
        </div>
      <div className="title">
        <img src="/mecatus.png"></img>
        <h1>Mecatus</h1>
      </div>
      <HeaderItem title="Home" location="/home"></HeaderItem>
      <HeaderItem title="Chat" location="/chat"></HeaderItem>
      <HeaderItem title="Historico" location="/historico"></HeaderItem>
      <HeaderItem title="Integrantes" location="/about"></HeaderItem>
      <HeaderAuth></HeaderAuth>
    </header>
  );
}
