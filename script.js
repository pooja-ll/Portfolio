const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  topBtn.style.display = document.documentElement.scrollTop > 100 ? "block" : "none";
};
topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.navbar a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    const id = this.getAttribute('href').replace('#','');
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});