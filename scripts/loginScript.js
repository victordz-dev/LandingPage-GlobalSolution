document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const senha = document.getElementById('password').value;
      const mensagemErro = document.getElementById('mensagemErro');
  
      const login = 'usuario';
      const senhaCadastrada = 'senha123';
  
      if (username === login && senha === senhaCadastrada) {
          alert('Login bem-sucedido!');
          // Redirecionar ou executar ação de sucesso
      } else {
            alert('Usuário ou senha incorretos.');
          mensagemErro.textContent = 'Usuário ou senha incorretos.';
          mensagemErro.style.display = 'block';
  
          // Limpar campos e focar no campo de usuário
          document.getElementById('username').value = '';
          document.getElementById('password').value = '';
          document.getElementById('username').focus();
      }
  });