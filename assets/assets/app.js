(function(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  const map = {
    "index.html": "home",
    "reports.html": "reports",
    "optimization.html": "opt",
    "guides.html": "guides",
    "checks.html": "checks",
    "about.html": "about"
  };

  const key = map[path] || "home";
  document.querySelectorAll('.tab').forEach(a => {
    if (a.dataset.tab === key) a.classList.add('active');
  });
})();
