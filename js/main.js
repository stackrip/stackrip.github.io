(function() {
  function main() {
    load_disqus();
  }

  function load_disqus() {
    var d = document, s = d.createElement('script');
    s.src = 'https://stackrip.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }

  document.addEventListener('DOMContentLoaded', main, false);
})();
