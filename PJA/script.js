// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('.theme-toggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
}

// Modal
function openModal(src, title) {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('caption');
    
    modal.style.display = 'flex';
    modalImg.src = src;
    caption.textContent = title;
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeModal() {
    const modal = document.getElementById('certModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Close modal on ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Animate skill bars on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fill').forEach(fill => {
                fill.style.width = fill.parentElement.style.width;
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skills-container').forEach(container => {
    observer.observe(container);
});