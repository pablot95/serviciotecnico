document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth Reveal Animation on Scroll
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.showcase-item').forEach(item => {
        observer.observe(item);
    });

    // Form Handling
    const form = document.querySelector('.styled-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'ENVIANDO...';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                alert('¡Mensaje enviado! Nos contactaremos pronto.');
                form.reset();
                btn.innerText = 'MENSAJE ENVIADO';
                btn.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }

    // Smooth Scroll for Nav
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
