 if (localStorage.getItem('token') == null) {
    alert('voce precisa estar logado para acessar essa pagina.');
    window.location.href = './assets/html/signin.html';
 }
 
 let userLogado = JSON.parse(localStorage.getItem('userLogado'));
  
 let logado = document.querySelector('#logado');
 
 function sair (){

    localStorage.removeItem('token');
    localStorage.removeItem('userlogado');
    window.location.href= './assets/html/signin.html';
 }