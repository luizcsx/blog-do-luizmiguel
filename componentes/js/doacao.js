  document.getElementById('footer-year').textContent = new Date().getFullYear();

  const el = document.getElementById('mensagem');
  const raw = el.textContent.trim();
  el.innerHTML = raw
    .split(/\n{2,}/)
    .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
    .join('');

  function copiarPix() {
    const chave = document.getElementById('pix-key').textContent.trim();
    const btn   = document.getElementById('copy-btn');
    const label = document.getElementById('btn-label');

    navigator.clipboard.writeText(chave).then(() => {
      btn.classList.add('copied');
      label.textContent = 'Chave copiada!';
      setTimeout(() => {
        btn.classList.remove('copied');
        label.textContent = 'Copiar chave Pix';
      }, 2500);
    }).catch(() => {
      const tmp = document.createElement('textarea');
      tmp.value = chave;
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand('copy');
      document.body.removeChild(tmp);
      label.textContent = 'Chave copiada!';
      setTimeout(() => { label.textContent = 'Copiar chave Pix'; }, 2500);
    });
  }
