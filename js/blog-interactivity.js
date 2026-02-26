document.addEventListener('DOMContentLoaded', function() {
    const tocLinks = document.querySelectorAll('.toc-link');
    const sections = document.querySelectorAll('.blog-content-section');

    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').replace('#', '');
            
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.remove('d-none');
                } else {
                    section.classList.add('d-none');
                }
            });

            tocLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});