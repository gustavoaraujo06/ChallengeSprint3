import "../register/auth.css"

export default function Login() {
  return (
    <div className="form">
      <h2>Entrar</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          name="confirmarSenha"
          id="confirmarSenha"
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
