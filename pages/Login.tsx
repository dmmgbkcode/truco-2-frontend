const Login = ({ setNome }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    const nome = e.target.nome.value.trim();
    if (nome) setNome(nome);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleLogin} className="space-y-4">
        <input name="nome" placeholder="Seu nome" className="p-2 border rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
