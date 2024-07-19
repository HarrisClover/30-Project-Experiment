document.addEventListener('DOMContentLoaded', function() {
    const consoles = document.querySelectorAll('.console');
  
    consoles.forEach(function(consoleElement) {
      consoleElement.addEventListener('mouseenter', function() {
        consoles.forEach(function(otherConsole) {
          if (otherConsole !== consoleElement) {
            otherConsole.style.flex = '0.5';
          }
        });
      });
  
      consoleElement.addEventListener('mouseleave', function() {
        consoles.forEach(function(otherConsole) {
          otherConsole.style.flex = '1';
        });
      });
    });
  });