const formLogin = document.getElementById('formLogin')
const mensagem = document.getElementById('mensagem')

async function verificarLogin() {
    const resposta = await fetch('/api/status')
    const dados = await  resposta.json();

    if(dados.logado){
        window.location.href = 'dashboard.html';
    }
};

formLogin.addEventListener('submit', async (event)=>{

    console.log("3 - submit");

    event.preventDefault();
    console.log("4 - prevent");

    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if(usuario === '' || senha === ''){
        mensagem.textContent = 'Preencha usuário e senha';
        return;

    }

    const resposta = await fetch('/api/login',{

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usuario, senha })
    });

    const dados = await resposta.json();

    if(!resposta.ok){
        mensagem.textContent = dados.mensagem;
        return;
    }

    setTimeout(()=> {
        window.location.href = 'dashboard.html';
    }, 700);

});

verificarLogin()



