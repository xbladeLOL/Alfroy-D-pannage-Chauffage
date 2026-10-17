(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  const setMenu = (open) => {
    toggle?.setAttribute('aria-expanded', String(open));
    nav?.classList.toggle('is-open', open);
    if (toggle) toggle.innerHTML = `Menu <span aria-hidden="true">${open ? '−' : '+'}</span>`;
  };
  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.header')) setMenu(false);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  const desktop = window.matchMedia('(min-width:981px)');
  desktop.addEventListener?.('change', () => setMenu(false));

  const filters = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('[data-category]')];
  const filterStatus = document.querySelector('#filter-status');
  function applyFilter(category, updateUrl) {
    if (!filters.some(button => button.dataset.filter === category)) category = 'tous';
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
    let count = 0;
    cards.forEach(card => {
      card.hidden = category !== 'tous' && card.dataset.category !== category;
      if (!card.hidden) count++;
    });
    if (filterStatus) filterStatus.textContent = `${count} installation${count > 1 ? 's' : ''} présentée${count > 1 ? 's' : ''}`;
    if (updateUrl) {
      const url = new URL(location.href);
      if (category === 'tous') url.searchParams.delete('categorie');
      else url.searchParams.set('categorie', category);
      history.replaceState(null, '', url);
    }
  }
  if (filters.length) {
    applyFilter(new URLSearchParams(location.search).get('categorie') || 'tous', false);
    filters.forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.filter, true)));
  }

  const form = document.querySelector('#contact-form');
  const summary = document.querySelector('#request-summary');
  if (form) {
    form.addEventListener('input', event => {
      if (typeof event.target.setCustomValidity === 'function') event.target.setCustomValidity('');
    });
    const requested = new URLSearchParams(location.search).get('besoin');
    const select = form.elements.namedItem('besoin');
    if ([...select.options].some(option => option.value === requested)) select.value = requested;
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const value = key => String(data.get(key) || '').trim();
      const emptyField = ['prenom', 'nom', 'ville', 'message', 'telephone'].find(key => !value(key));
      if (emptyField) {
        form.elements.namedItem(emptyField).setCustomValidity('Merci de renseigner ce champ.');
        form.reportValidity();
        return;
      }
      const subject = select.options[select.selectedIndex].text;
      summary.value = ['DEMANDE À PRÉSENTER À ALFROY', 'Aucun message envoyé — appeler le 02 38 55 44 13', '', `Objet : ${subject}`, `Nom : ${value('prenom')} ${value('nom')}`, value('societe') && `Société : ${value('societe')}`, `Téléphone : ${value('telephone')}`, value('email') && `E-mail : ${value('email')}`, `Localisation : ${[value('adresse'), value('codepostal'), value('ville')].filter(Boolean).join(', ')}`, '', 'Votre demande :', value('message')].filter(line => line !== false).join('\n');
      document.querySelector('#request-result').hidden = false;
      document.querySelector('#copy-status').textContent = '';
      document.querySelector('#result-title').focus();
    });
    document.querySelector('#copy-summary')?.addEventListener('click', async () => {
      const status = document.querySelector('#copy-status');
      try {
        await navigator.clipboard.writeText(summary.value);
        status.textContent = 'Récapitulatif copié. Aucun message n’a été envoyé à l’entreprise.';
      } catch {
        summary.focus();
        summary.select();
        status.textContent = 'Le récapitulatif est sélectionné. Utilisez la commande Copier de votre appareil.';
      }
    });
    document.querySelector('#download-summary')?.addEventListener('click', () => {
      const url = URL.createObjectURL(new Blob([summary.value], {type:'text/plain;charset=utf-8'}));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'demande-alfroy.txt';
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      document.querySelector('#copy-status').textContent = 'Téléchargement préparé. Aucun message n’a été envoyé à l’entreprise.';
    });
  }
})();
