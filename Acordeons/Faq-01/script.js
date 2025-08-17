function initAccordion() {
  var e = document.querySelectorAll(".acordion-title");
  function t() {
    this.classList.toggle("ativo"),
      this.nextElementSibling.classList.toggle("ativo");
  }
  e[0].classList.add("ativo"),
    e[0].nextElementSibling.classList.add("ativo"),
    e.forEach(function (e) {
      e.addEventListener("click", t);
    });
}
initAccordion();