function mostrarMensagem(event) {
  event.preventDefault(); // Impede o recarregamento do formulário

  const nome = document.getElementById("nome").value;
  const data = document.getElementById("data").value;

  const dataFormatada = new Date(data).toLocaleDateString("pt-BR");

  document.getElementById("mensagem").textContent = `Olá, ${nome}! Você nasceu em ${dataFormatada}.`;
}