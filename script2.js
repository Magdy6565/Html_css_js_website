document.addEventListener('DOMContentLoaded', function() {

    const currentPage = window.location.pathname.split('/').pop();
  
    const links = document.querySelectorAll('.links li a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
  });