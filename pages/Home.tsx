import { useNavigate } from 'react-router-dom';

const Home = ({ nome }) => {
  const navigate = useNavigate();

  const criarSala = async () => {
    const res = await fetch('http://localhost:3001/criar-sala', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome }),
    });
    const data = await res.json();
    navigate('/sala/' + data.codigo);
  };

  const entrarSala = async (e) => {
    e.preventDefault();
    const codigo = e.target.codigo.value.trim();
    const res = await fetch('http://localhost:3001/entrar-sala', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, codigo }),
    });
    const data = await res.json();
    if (data.ok) navigate('/sala/' + codigo);
    else alert(data.erro);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <button onClick={criarSala} className="bg-green-500 text-white px-4 py-2 rounded">Criar Sala</button>
      <form onSubmit={entrarSala} className="space-y-2">
        <input name="codigo" placeholder="Código da sala" className="p-2 border rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Entrar na Sala</button>
      </form>
    </div>
  );
};

export default Home;
