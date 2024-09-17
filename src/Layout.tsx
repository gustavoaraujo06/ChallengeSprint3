import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer/footer";
import "./App.css"

export default function Layout(){
    return (
        <div className="layout">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}