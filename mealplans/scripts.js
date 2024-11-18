fetch('/navbar/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));

// Dropdown
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdownButton").forEach(function (button) {
        button.addEventListener("click", function () {
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
                dropdownContent.style.display = "block";
            } else {
                dropdownContent.style.display = "none";
            }
        });
    });

    // Slider ke samping
    const slider = document.querySelector('.meal-days-slider');
    let isDragging = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Scroll fast
        slider.scrollLeft = scrollLeft - walk;
    });

    slider.addEventListener('mouseup', () => {
        isDragging = false;
    });

    slider.addEventListener('mouseleave', () => {
        isDragging = false;
    });
});

fetch('/navbar/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
