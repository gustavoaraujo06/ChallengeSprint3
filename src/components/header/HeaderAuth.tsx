import { Link } from "react-router-dom";

export default function HeaderAuth() {
    return (
        <div>
            <Link to="/login" className="loginButton">Entrar</Link>
            <Link to="/register" className="registerButton">Registrar</Link>
        </div>
    )
}