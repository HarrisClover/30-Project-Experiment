window.onload = function() {
    var faqs = document.getElementsByClassName('faq');

    for (var i = 0; i < faqs.length; i++) {
        faqs[i].addEventListener('click', function() {
            this.children[1].style.display = this.children[1].style.display == 'none' ? 'block' : 'none';
        });
    }
};
