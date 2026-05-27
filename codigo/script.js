function carregar() {
  let msg = document.getElementById('msg');
  let img = document.getElementById('img');
  let title = document.getElementById('title');

  let hora = new Date().getHours();
  let minutes = new Date().getMinutes();

  if (hora >= 0 && hora < 12) {
    // BOM DIA
    img.src = '../imagens/manhã.jpg';
    msg.innerText = `São ${hora} horas e ${minutes} minutos`;
    title.innerText = 'Bom dia';
    document.body.style.background = '#81b5d8';
  } else if (hora >= 12 && hora < 18) {
    // BOA TARDE
    img.src = '../imagens/tarde.jpg';
    msg.innerText = `São ${hora} horas e ${minutes} minutos`;
    title.innerText = 'Boa tarde';
    document.body.style.background = '#F89A5B';
  } else {
    img.src = '../imagens/noite.jpg';
    msg.innerText = `São ${hora} horas e ${minutes} minutos`;
    title.innerText = 'Boa noite';
    document.body.style.background = '#082640';
  }
}
