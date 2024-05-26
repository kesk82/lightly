// import myesmodule from './myesmodule';

// console.log(myesmodule);

const toggleMobileNavigation = document.getElementById('navPanelToggle');
const navPanel = document.getElementById('navPanel');

if (navPanel) {
  navPanel.style.display = 'block';
}

if (toggleMobileNavigation) {
  window.addEventListener('click', function(e) {
    if (toggleMobileNavigation.contains(e.target)) {
      e.preventDefault();
      document.body.classList.toggle('navPanel-visible');
    } else {
      if (document.body.classList.contains('navPanel-visible')) {
        document.body.classList.remove('navPanel-visible');
      }
    }
  });
}

// const showMoreBtn = document.querySelector('#intro .actions a');

// if (showMoreBtn) {
//   console.log("Found Show More BTN!");
//   showMoreBtn.addEventListener('click', e => {
//     e.preventDefault();
//     console.log("Click Show More BTN!!!");
//   });
// }

const introContainer = document.getElementById('intro');

function onPageScroll() {
  if (window.scrollY > 50) {
    if (introContainer) {
      introContainer.classList.add('hidden');
    }
    if (toggleMobileNavigation) {
      toggleMobileNavigation.classList.add('alt');
    }
  } else {
    if (introContainer) {
      introContainer.classList.remove('hidden');
    }
    if (toggleMobileNavigation) {
      toggleMobileNavigation.classList.remove('alt');
    }
  }
}

document.addEventListener('scroll', onPageScroll);

// setTimeout(() => {
//   document.body.classList.remove('is-preload');
// }, 100);