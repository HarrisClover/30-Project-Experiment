
function loadData() {
  setTimeout(function() {
    var contentPlaceholder = document.getElementById('content-placeholder');
    contentPlaceholder.innerHTML = '<h2>Loaded Content</h2>';
  }, 2000);
}

loadData();
