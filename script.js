// =====================================
// Mobile Navigation
// =====================================

const menuToggle =
  document.getElementById('menu-toggle');

const navLinks =
  document.getElementById('nav-links');

const navAnchors =
  document.querySelectorAll('.nav-links a');


if (menuToggle && navLinks) {

  menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('open');

    document.body.classList.toggle(
      'menu-open'
    );

  });


  navAnchors.forEach((anchor) => {

    anchor.addEventListener('click', () => {

      navLinks.classList.remove('open');

      document.body.classList.remove(
        'menu-open'
      );

    });

  });

}


// =====================================
// Dynamic Copyright Year
// =====================================

const year =
  document.getElementById('year');

if (year) {

  year.textContent =
    new Date().getFullYear();

}


// =====================================
// Active Navigation Link
// =====================================

const sections =
  document.querySelectorAll(
    'section[id]'
  );


const updateActiveLink = () => {

  const scrollPosition =
    window.scrollY + 150;

  let currentSection = '';


  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop;

    const sectionBottom =
      sectionTop +
      section.offsetHeight;


    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionBottom
    ) {

      currentSection =
        section.getAttribute('id');

    }

  });


  navAnchors.forEach((anchor) => {

    anchor.classList.remove('active');

    const target =
      anchor.getAttribute('href');


    if (
      target ===
      `#${currentSection}`
    ) {

      anchor.classList.add('active');

    }

  });

};


window.addEventListener(
  'scroll',
  updateActiveLink
);

window.addEventListener(
  'load',
  updateActiveLink
);


// =====================================
// Scroll Reveal Animation
// =====================================

const revealItems =
  document.querySelectorAll(
    '.reveal'
  );


if (
  'IntersectionObserver'
  in window
) {

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              'visible'
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.15,

        rootMargin:
          '0px 0px -50px 0px'
      }
    );


  revealItems.forEach((item) => {

    revealObserver.observe(item);

  });

} else {

  revealItems.forEach((item) => {

    item.classList.add(
      'visible'
    );

  });

}


// =====================================
// Smooth Navigation
// =====================================

navAnchors.forEach((anchor) => {

  anchor.addEventListener(
    'click',
    (event) => {

      const targetId =
        anchor.getAttribute('href');


      if (
        !targetId ||
        !targetId.startsWith('#')
      ) {

        return;

      }


      const targetElement =
        document.querySelector(
          targetId
        );


      if (!targetElement) {

        return;

      }


      event.preventDefault();


      targetElement.scrollIntoView({

        behavior: 'smooth',

        block: 'start'

      });

    }
  );

});
