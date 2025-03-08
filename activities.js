document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.hero-content').classList.add('active');

    // Fade-in animation
    const fadeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

    // Counter animation
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let target = entry.target, count = +target.dataset.count, current = 0;
                const increment = Math.ceil(count / 50), timer = setInterval(() => {
                    target.textContent = (current += increment) >= count ? (clearInterval(timer), count) : current;
                }, 30);
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter-number').forEach(el => counterObserver.observe(el));

    // CTA button alert
    document.getElementById('ctaButton').addEventListener('click', e => {
        e.preventDefault();
        alert('Thank you for your interest in Prime Fitness! Our team will contact you shortly.');
    });
});
