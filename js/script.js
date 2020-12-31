((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

((d) => {
  const $menuFAQ1 = d.querySelector('#btn-faq-1');
  const $menuFAQ2 = d.querySelector("#btn-faq-2");
  const $menuFAQ3 = d.querySelector("#btn-faq-3");
  const $menuFAQ4 = d.querySelector("#btn-faq-4");
  const $faq1 = d.querySelector('#faq-1-body');
  const $faq2 = d.querySelector('#faq-2-body');
  const $faq3 = d.querySelector('#faq-3-body');
  const $faq4 = d.querySelector('#faq-4-body');
  $menuFAQ1.addEventListener('click', e => {
    $menuFAQ1.firstElementChild.classList.toggle("none");
    $menuFAQ1.lastElementChild.classList.toggle("none");
    $faq1.classList.toggle("none");
  })
  $menuFAQ2.addEventListener("click", (e) => {
    $menuFAQ2.firstElementChild.classList.toggle("none");
    $menuFAQ2.lastElementChild.classList.toggle("none");
    $faq2.classList.toggle("none");
  });
  $menuFAQ3.addEventListener("click", (e) => {
    $menuFAQ3.firstElementChild.classList.toggle("none");
    $menuFAQ3.lastElementChild.classList.toggle("none");
    $faq3.classList.toggle("none");
  });
  $menuFAQ4.addEventListener("click", (e) => {
    $menuFAQ4.firstElementChild.classList.toggle("none");
    $menuFAQ4.lastElementChild.classList.toggle("none");
    $faq4.classList.toggle("none");
  });
})(document);
