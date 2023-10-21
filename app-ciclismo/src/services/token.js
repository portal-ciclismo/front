const token = () => {
  const salvarToken = (tk) => {
      localStorage.setItem('token', tk);
  };

  const obterToken = () => {
      return localStorage.getItem('token');
  };

  const removerToken = () => {
      localStorage.removeItem('token');
  };

  const fazerRequisicaoComToken = async () => {
      const token = obterToken();
      
      if (!token) {
        console.error('Token não encontrado.');
        return;
      }
    
      try {
        const resposta = await fetch('http://localhost:8080/usuarios', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
    
        if (!resposta.ok) {
          throw new Error('Erro na requisição.');
        }
    
        const dados = await resposta.json();
        console.log('Dados da resposta:', dados);
      } catch (error) {
        console.error('Erro na requisição:', error.message);
      }
  };
}

export default token;