document.addEventListener('DOMContentLoaded', () => {
    console.log('NYSBEAM website loaded.');

    const sections = document.querySelectorAll('section');
    const headerTitle = document.querySelector('header h1');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    observer.observe(headerTitle);
});