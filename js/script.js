"use strict"

window.addEventListener('load', windowLoad);

function windowLoad() {
  document.addEventListener('click', documentActions);
}

function documentActions(e) {
  const targetElement = e.target;

  //Scroll

  if (targetElement.hasAttribute('data-goto')) {
    const gotoElement = document.querySelector(`${targetElement.dataset.goto}`);
    const headerHeight = document.querySelector('.header').offsetHeight;

    if (gotoElement) {
      window.scrollTo({
        top: gotoElement.offsetTop - headerHeight,
        behavior: "smooth"
      });
    }

    e.preventDefault();
  }

  // Works filter

  /*if (targetElement.classList.contains('items-works__type') && !targetElement.classList.contains('active')) {
    const activeElement = document.querySelector('.items-works__type.active');
    const elements = document.querySelectorAll('.items-works__item');
    const elementType = targetElement.dataset.workType;

    activeElement.classList.remove('active');
    targetElement.classList.add('active');

    elements.forEach(element => {
      !elementType || element.dataset.workType === elementType ?
        element.hidden = false : element.hidden = true;
    })
  }*/
}

document.addEventListener("DOMContentLoaded", function () {
  const btnAll = document.getElementById("btn-all");
  const btnArticles = document.getElementById("btn-articles");
  const btnPosts = document.getElementById("btn-posts");
  const btnSites = document.getElementById("btn-sites");
  const btnEmail = document.getElementById("btn-email"); 
  const titleWorks = document.querySelector(".items-works__title");
  const cards = document.querySelectorAll(".items-works__box");
  const article = document.querySelector(".items-works__articles");

  btnAll.addEventListener("click", function () {
      cards.forEach(card => {
        card.style.display = "flex";
        /*titleWorks.style.display = "none";*/
      });
  });

  btnArticles.addEventListener("click", function () {
    
      cards.forEach(card => {
        if (card.getAttribute("data-category") === "article") {
          card.style.display = "flex";
          /*titleWorks.innerHTML = "Статьи";*/
        } else {
          card.style.display = "none";
        }
      });
  });

  btnPosts.addEventListener("click", function () {
      cards.forEach(card => {
        if (card.getAttribute("data-category") === "post") {
          card.style.display = "flex";
          /*titleWorks.innerHTML = "Посты для соцсетей"*/
        } else {
          card.style.display = "none";
        }
      });
  });

  btnSites.addEventListener("click", function () {
    cards.forEach(card => {
      if (card.getAttribute("data-category") === "site") {
        card.style.display = "flex";
        /*titleWorks.innerHTML = "Тексты для лендингов"*/
      } else {
          card.style.display = "none";
      }
    });
  });

  btnEmail.addEventListener("click", function () {
    cards.forEach(card => {
      if (card.getAttribute("data-category") === "email") {
        card.style.display = "flex";
        /*titleWorks.innerHTML = "Email-рассылки"*/
      } else {
          card.style.display = "none";
      }
    });
  });
});

