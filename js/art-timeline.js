document.addEventListener('DOMContentLoaded', () => {
    const artTimelineButtons = document.querySelectorAll('.art-timeline-navigation button'); 
    const artTimelineContent = document.getElementById('art-timeline-content');

    const artPeriods = {
        prehistoric: {
        title: "Prehistoric Art",
        description: "Early humans created cave paintings and simple sculptures.",
        artworks: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/9_Bisonte_Magdaleniense_pol%C3%ADcromo.jpg/1024px-9_Bisonte_Magdaleniense_pol%C3%ADcromo.jpg", alt: "Cave of Altamira" },
            { src: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/cave-lions-chauvet-cave.jpg", alt: "Chauvet Cave" }
        ]
    },
    ancient: {
        title: "Ancient Art",
        description: "Civilizations like Egypt, Greece, and Rome produced monumental sculptures and architecture.",
        artworks: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg/1024px-Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg", alt: "Pyramid of Giza" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/800px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg", alt: "School of Athens" }
        ]
    },
    renaissance: {
        title: "Renaissance Art",
        description: "A rebirth of classical art, with masters like Leonardo da Vinci and Michelangelo.",
        artworks: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/400px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg", alt: "Mona Lisa" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/%27David%27_by_Michelangelo_Fir_JBU004.jpg/800px-%27David%27_by_Michelangelo_Fir_JBU004.jpg", alt: "David (Michelangelo)" }
        ]
    },
    baroque: {
        title: "Baroque Art",
        description: "Characterized by drama, emotion, and grandeur.",
        artworks: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ecstasy_of_Saint_Teresa_September_2015-2a.jpg/800px-Ecstasy_of_Saint_Teresa_September_2015-2a.jpg", alt: "The Ecstasy of Saint Teresa" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/800px-The_Night_Watch_-_HD.jpg", alt: "The Night Watch" }
        ]
    },
    impressionism: {
        title: "Impressionism",
        description: "Focused on capturing fleeting moments and the effect of light.",
        artworks: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/330px-Monet_-_Impression%2C_Sunrise.jpg", alt: "Impression, Sunrise" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Edgar_Degas_-_La_Classe_de_danse.jpg/250px-Edgar_Degas_-_La_Classe_de_danse.jpg", alt: "The Dance Class" }
        ]
    },
    modern: {
        title: "Modern Art",
        description: "A wide range of styles, including Cubism, Surrealism, and Abstract Expressionism.",
        artworks: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/250px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg", alt: "The Scream" },
            { src: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/330px-Les_Demoiselles_d%27Avignon.jpg", alt: "Les Demoiselles d'Avignon" }
        ]
    },
    "ai-generated": {
        title: "AI-Generated Art",
        description: "Visual artwork created or enhanced through the use of artificial intelligence (AI) programs.",
        artworks: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Th%C3%A9%C3%A2tre_D%E2%80%99op%C3%A9ra_Spatial.png/1024px-Th%C3%A9%C3%A2tre_D%E2%80%99op%C3%A9ra_Spatial.png", alt: "Théâtre D'opéra Spatial" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Edmond_de_Belamy.png/800px-Edmond_de_Belamy.png", alt: "Edmond de Belamy" }
        ]
    }
};

    function updateTextColors(element) {
        const textColor = document.body.classList.contains('dark-theme') ? '#f0f0f0' : '#333';
        element.querySelectorAll('h3, p').forEach(el => el.style.color = textColor);
    }

    function showArtPeriod(era) {
        const period = artPeriods[era];
        if (period) {
            let content = `<h3 class="text-center">${period.title}</h3><p class="text-center">${period.description}</p>`;
            if (period.artworks && period.artworks.length > 0) {
                content += '<div class="art-grid">';
                period.artworks.forEach(artwork => {
                    content += `
                        <div class="art-item">
                            <a href="https://en.wikipedia.org/wiki/${encodeURIComponent(artwork.alt)}" target="_blank" rel="noopener noreferrer">
                                <img src="${artwork.src}" alt="${artwork.alt}">
                            </a>
                            <p>${artwork.alt}</p>
                        </div>
                    `;
                });
                content += '</div>';
                content += '<p class="art-tip text-center">📚 Tip: Click on any artwork image to explore more on Wikipedia!</p>';
            }
            artTimelineContent.innerHTML = content;
            updateTextColors(artTimelineContent);

            const artGrid = artTimelineContent.querySelector('.art-grid');
            if (artGrid) {
                const imageCount = period.artworks.length;
                if (imageCount === 1) {
                    artGrid.style.gridTemplateColumns = '1fr'; 
                } else if (imageCount === 2) {
                    artGrid.style.gridTemplateColumns = 'repeat(2, 1fr)'; 
                } else if (imageCount <= 4) {
                    artGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
                } else {
                    artGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
                }
            }

        } else {
            artTimelineContent.innerHTML = '<p class="text-center">No information available for this period.</p>';
            artTimelineContent.style.color = document.body.classList.contains('dark-theme') ? '#f0f0f0' : '#333';
        }
    }

    artTimelineButtons.forEach(button => {
        button.addEventListener('click', () => {
            const era = button.getAttribute('data-era');
            showArtPeriod(era);
            artTimelineButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
    updateTextColors(artTimelineContent);
});