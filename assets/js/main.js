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

// 1. Fetch and load the header
fetch('includes/header.html')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
    })
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;

        // Initialize mobile menu elements *after* header exists
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
    .catch(error => console.error('Error loading the header:', error));

// 2. Fetch and load the footer
fetch('includes/footer.html')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
    })
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading the footer:', error));
