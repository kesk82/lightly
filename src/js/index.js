// import $ from 'jquery';
import myesmodule from './myesmodule';

console.log(myesmodule);
// console.log(mynodemodule);
// console.log($);


// Test parameter from .env file:
// console.log(process.env.TEST);

// Test global variable from webpack.DefinePlugin:
// console.log(some.var);

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