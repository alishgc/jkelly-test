document.addEventListener('DOMContentLoaded', () => {

  /* ============================================
     TAG FILTER — blog index
     Reads data-tags on each .card and toggles
     visibility when a filter button is clicked.
  ============================================ */
  const filterBar = document.querySelector('.tag-filter');
  const cards = document.querySelectorAll('.card[data-tags]');

  if (filterBar && cards.length) {
    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;

      const filter = btn.dataset.filter;

      // Highlight the active pill
      filterBar.querySelectorAll('button').forEach(b => {
        b.classList.toggle('is-active', b === btn);
      });

      // Show / hide cards
      cards.forEach(card => {
        const tags = card.dataset.tags.split(',').map(t => t.trim());
        const show = filter === 'all' || tags.includes(filter);
        card.style.display = show ? '' : 'none';
      });
    });

    // If the URL has ?tag=foo, auto-apply it on load
    const params = new URLSearchParams(window.location.search);
    const initialTag = params.get('tag');
    if (initialTag) {
      const match = filterBar.querySelector(`button[data-filter="${CSS.escape(initialTag)}"]`);
      if (match) match.click();
    }
  }

  /* ============================================
     COPY LINK — post page
     Copies the current URL to the clipboard and
     flashes "Copied!" for 2 seconds.
  ============================================ */
  const copyBtn = document.getElementById('copyLink');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const original = copyBtn.textContent;

      const done = (msg) => {
        copyBtn.textContent = msg;
        setTimeout(() => { copyBtn.textContent = original; }, 2000);
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(window.location.href)
          .then(() => done('Copied!'))
          .catch(() => done('Copy failed'));
      } else {
        // Fallback for http:// or older browsers
        const ta = document.createElement('textarea');
        ta.value = window.location.href;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
          done('Copied!');
        } catch {
          done('Copy failed');
        }
        document.body.removeChild(ta);
      }
    });
  }

});