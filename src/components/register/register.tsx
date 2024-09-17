import "./auth.css"

export default function Register() {
  return (
    <div className="form">
      <h2>Registro</h2>
      <form>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="endereco">Endereço</label>
        <input type="text" name="endereco" id="endereco" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="senha">Senha</label>
        <input type="password" name="senha" id="senha" required />
        <label htmlFor="confirmarSenha">Confirmar Senha</label>
        <input
          type="password"
          name="confirmarSenha"
          id="confirmarSenha"
          required
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
