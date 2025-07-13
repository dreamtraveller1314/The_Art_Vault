document.addEventListener('DOMContentLoaded', () => {
    
    const loader = document.getElementById('loader');
    if (loader) {
        
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            
            loader.addEventListener('transitionend', () => loader.remove());
        }, 500); 
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    const toggleThemeBtn = document.getElementById('toggle-theme-btn');

    
    const currentTheme = localStorage.getItem('theme') || 'light-theme';
    document.body.classList.add(currentTheme);

    if (toggleThemeBtn) {
        if (currentTheme === 'dark-theme') {
            toggleThemeBtn.innerHTML = '☀️ Light Theme'; 
        } else {
            toggleThemeBtn.innerHTML = '🌙 Dark Theme'; 
        }

        toggleThemeBtn.addEventListener('click', () => {
            if (document.body.classList.contains('light-theme')) {
                document.body.classList.replace('light-theme', 'dark-theme');
                localStorage.setItem('theme', 'dark-theme');
                toggleThemeBtn.innerHTML = '☀️ Light Theme';
            } else {
                document.body.classList.replace('dark-theme', 'light-theme');
                localStorage.setItem('theme', 'light-theme');
                toggleThemeBtn.innerHTML = '🌙 Dark Theme';
            }
        });
    }
});