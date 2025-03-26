document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll('.dropdown');
  const dropbtns = document.querySelectorAll('.dropbtn');

  // For desktop: Show dropdown on hover
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', function() {
      this.querySelector('.dropdown-content').style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', function() {
      this.querySelector('.dropdown-content').style.display = 'none';
    });
  });

  // For mobile: Show dropdown on click
  dropbtns.forEach(dropbtn => {
    dropbtn.addEventListener('click', function () {
      const parentDropdown = this.closest('.dropdown');
      parentDropdown.classList.toggle('open');
    });
  });
});
