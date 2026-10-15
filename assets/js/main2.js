/* ~~~~~~~~~~~~~~~ Go to Top Button ~~~~~~~~~~~~~~~ */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Fetch and load the header
fetch('header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        // 1. Inject the header into the page
        document.getElementById('header-placeholder').innerHTML = data;

        // 2. INITIALIZE MOBILE MENU *AFTER* THE HEADER EXISTS
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        const teamDropdownButton = document.querySelector('.mobile-menu .dropdown-button');
        const mobileTeamDropdown = document.querySelector('.mobile-dropdown-content');

        if (hamburger) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                mobileMenu.classList.toggle('active');
            });
        }

        if (teamDropdownButton) {
            teamDropdownButton.addEventListener('click', () => {
                mobileTeamDropdown.classList.toggle('active');
            });
        }
    })
    .catch(error => {
        console.error('Error loading the header:', error);
    });
