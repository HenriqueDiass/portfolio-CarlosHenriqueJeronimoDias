
const campoMensagem = document.getElementById('mensagem');
const textoContador = document.getElementById('contador');

campoMensagem.addEventListener('input', function() {
    
    const quantidadeCaracteres = campoMensagem.value.length;
    textoContador.textContent = quantidadeCaracteres;
    
});