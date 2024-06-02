const toggleMobileNavigation = document.getElementById('navPanelToggle');
const navPanel = document.getElementById('navPanel');
const mainContent = document.getElementById('main');

if (navPanel) {
  navPanel.style.display = 'block';

  navPanel.addEventListener('touchmove', function(e) {
    e.preventDefault();
    if (document.body.classList.contains('navPanel-visible')) {
      document.body.classList.remove('navPanel-visible');
    }
  });
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

const introContainer = document.getElementById('intro');

function onPageScroll() {
  if (toggleMobileNavigation && mainContent) {
    if (window.scrollY > ( mainContent.offsetTop - toggleMobileNavigation.offsetTop - toggleMobileNavigation.offsetHeight )) {
      toggleMobileNavigation.classList.add('alt');
    } else {
      toggleMobileNavigation.classList.remove('alt');
    }
  }

  if (introContainer) {
    if (window.scrollY > 50) {
      introContainer.classList.add('hidden');
    } else {
      introContainer.classList.remove('hidden');
    }
  }
}

document.addEventListener('scroll', onPageScroll);