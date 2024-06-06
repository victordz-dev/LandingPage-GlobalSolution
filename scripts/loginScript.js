document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const senha = document.getElementById('senha').value;
      const mensagemErro = document.getElementById('mensagemErro');
  
      const login = 'usuario';
      const senhaCadastrada = 'senha123';
  
      if (username === login && senha === senhaCadastrada) {
        alert('Login bem-sucedido!');
        document.getElementById('username').value = '';
        document.getElementById('senha').value = '';
        mensagemErro.textContent = '';
      } else {
        alert('Usuário ou senha incorretos.');
        mensagemErro.textContent = 'Usuário ou senha incorretos.';
        mensagemErro.style.display = 'block';
        document.getElementById('username').value = '';
        document.getElementById('senha').value = '';
        document.getElementById('username').focus();
      }
  });