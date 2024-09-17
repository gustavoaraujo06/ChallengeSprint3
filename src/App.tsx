import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Layout from "./Layout"
import Chat from "./components/chat/Chat"
import "./App.css"
import Historico from "./components/historico/historico"
import Register from "./components/register/register"
import Login from "./components/login/login"
import About from "./components/about/about"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="home" element={<Home/>}></Route>
            <Route path="chat" element={<Chat/>}></Route>
            <Route path="historico" element={<Historico/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="register" element={<Register/>}></Route>
            <Route path="login" element={<Login/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
