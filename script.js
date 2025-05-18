/* ===== Jednoduché vyhledávání ===== */
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  const sections    = [...document.querySelectorAll('section')];

  // Odstranění diakritiky pro porovnání
  const normalize = str =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  searchInput.addEventListener('input', () => {
    const q = normalize(searchInput.value.trim());
    sections.forEach(sec => {
      if (!q) {                       // prázdný dotaz → zobraz vše
        sec.classList.remove('hidden');
        return;
      }
      const text = normalize(sec.textContent);
      sec.classList.toggle('hidden', !text.includes(q));
    });
  });
});
