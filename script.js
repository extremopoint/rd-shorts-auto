function gerar(){
  const url = document.getElementById('url').value;

  document.getElementById('titulo').value =
    '🔥 Melhor momento do vídeo';

  document.getElementById('descricao').value =
    '🎬 Corte criado automaticamente\\n\\n' +
    '📌 Vídeo original: ' + url + '\\n\\n' +
    '#shorts #viral #cortes';
}

function thumbnail(){
  const c = document.getElementById('thumb');
  const ctx = c.getContext('2d');

  ctx.fillStyle = '#111827';
  ctx.fillRect(0,0,1280,720);

  ctx.fillStyle = '#2563eb';
  ctx.fillRect(40,40,1200,640);

  ctx.fillStyle = 'white';
  ctx.font = 'bold 64px Arial';
  ctx.fillText('MELHOR MOMENTO', 80, 220);

  ctx.font = 'bold 42px Arial';
  ctx.fillText('Corte automático', 80, 320);
}

function salvar(){
  const data = {
    titulo: document.getElementById('titulo').value,
    descricao: document.getElementById('descricao').value,
    data: new Date().toISOString()
  };

  localStorage.setItem('ultimoPost', JSON.stringify(data));
  alert('Salvo no navegador!');
}

function publicar(){
  alert('Aqui vamos conectar a YouTube API.');
}
