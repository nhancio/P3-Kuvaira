(() => {
  const addLogo = () => {
    const name = document.querySelector('.brand-logo');
    const parent = name?.parentElement;
    if (!name || !parent || name.closest('.kuvaira-name-row')) return;

    const row = document.createElement('span');
    row.className = 'kuvaira-name-row';

    const image = document.createElement('img');
    image.src = '/logo/3.png';
    image.alt = '';
    image.setAttribute('aria-hidden', 'true');

    parent.insertBefore(row, name);
    row.append(image, name);
  };

  addLogo();
  new MutationObserver(addLogo).observe(document.documentElement, { childList: true, subtree: true });
})();
