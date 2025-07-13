document.addEventListener('DOMContentLoaded', () => {
    const artQuestions = [
    {
        question: "Who painted the Mona Lisa?",
        options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
        correctAnswer: 1,
        explanation: "Leonardo da Vinci painted the Mona Lisa in the early 1500s during the Italian Renaissance. It’s one of the most recognized paintings in the world."
    },
    {
        question: "Which art movement is Salvador Dalí associated with?",
        options: ["Impressionism", "Cubism", "Surrealism", "Renaissance"],
        correctAnswer: 2,
        explanation: "Dalí was a leading figure in the Surrealist movement, which emphasized dreamlike, irrational imagery."
    },
    {
        question: "What is the main characteristic of Impressionist art?",
        options: ["Precise lines", "Emotional symbolism", "Use of abstract forms", "Capturing light and movement"],
        correctAnswer: 3,
        explanation: "Impressionist artists like Monet aimed to capture fleeting light and everyday scenes with loose, visible brushstrokes."
    },
    {
        question: "Which of these artists is known for 'The Starry Night'?",
        options: ["Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Georges Seurat"],
        correctAnswer: 2,
        explanation: "Van Gogh painted 'The Starry Night' in 1889, depicting a swirling night sky from his asylum room in Saint-Rémy-de-Provence."
    },
    {
        question: "What was Andy Warhol known for?",
        options: ["Pop art and mass media", "Renaissance frescoes", "Cubist sculpture", "Baroque paintings"],
        correctAnswer: 0,
        explanation: "Warhol was a leader in the Pop Art movement, turning everyday consumer items like soup cans into iconic art."
    },
    {
        question: "Which technique did Georges Seurat famously use?",
        options: ["Drip painting", "Fresco", "Pointillism", "Collage"],
        correctAnswer: 2,
        explanation: "Seurat used tiny dots of color in a technique called Pointillism, especially seen in 'A Sunday Afternoon on the Island of La Grande Jatte'."
    },
    {
        question: "Where is the Louvre Museum located?",
        options: ["London", "New York", "Madrid", "Paris"],
        correctAnswer: 3,
        explanation: "The Louvre, home to the Mona Lisa, is located in Paris and is the most visited museum in the world."
    },
    {
        question: "What does 'Renaissance' mean?",
        options: ["The end", "Rebirth", "New world", "Middle age"],
        correctAnswer: 1,
        explanation: "The term Renaissance means 'rebirth' and refers to the revival of classical art, architecture, and learning in Europe."
    },
    {
        question: "What defines Cubism?",
        options: ["Soft colors and smooth lines", "Use of organic forms", "Breaking subjects into geometric shapes", "Hyperrealistic detail"],
        correctAnswer: 2,
        explanation: "Cubism, pioneered by Picasso and Braque, breaks objects into geometric components and presents multiple viewpoints simultaneously."
    },
    {
        question: "Which artist is famous for cutting off part of his ear?",
        options: ["Michelangelo", "Vincent van Gogh", "Rembrandt", "Raphael"],
        correctAnswer: 1,
        explanation: "Van Gogh is known for cutting off part of his own ear during a mental health crisis and later painted several self-portraits with a bandaged ear."
    }
];

    const artFacts = [
    {
        fact: "The Mona Lisa has no eyebrows!",
        detail: "Shaving eyebrows was fashionable during the Renaissance.",
        emoji: "🖼️",
        category: "Renaissance"
    },
    {
        fact: "Van Gogh only sold one painting in his lifetime.",
        detail: "Now his works sell for millions.",
        emoji: "🌻",
        category: "Modern"
    },
    {
        fact: "Paint was once made from ground-up mummies.",
        detail: "It was called 'Mummy Brown' and used in the 16th–17th centuries.",
        emoji: "🧟",
        category: "Ancient"
    },
    {
        fact: "AI is now creating art.",
        detail: "Tools like DALL·E and MidJourney turn text into visuals.",
        emoji: "🤖",
        category: "AI Era"
    },
    {
        fact: "Cave art may be prehistoric animation.",
        detail: "Some paintings show multiple limbs to suggest movement.",
        emoji: "🦣",
        category: "Prehistoric"
    },
    {
        fact: "Leonardo da Vinci was ambidextrous.",
        detail: "He could write with one hand while drawing with the other.",
        emoji: "✍️",
        category: "Renaissance"
    },
    {
        fact: "Banksy once shredded his artwork after it was sold.",
        detail: "It self-destructed right after fetching $1.4 million at auction.",
        emoji: "🧨",
        category: "Street Art"
    },
    {
        fact: "Some museums dim the lights for Van Gogh's works.",
        detail: "His yellow pigments are so sensitive they fade under strong light.",
        emoji: "💡",
        category: "Modern"
    },
    {
        fact: "Artists used beetle shells for paint.",
        detail: "Iridescent green pigment came from ground beetles.",
        emoji: "🐞",
        category: "Materials"
    },
    {
        fact: "Michelangelo painted himself into the Sistine Chapel.",
        detail: "As St. Bartholomew’s flayed skin — quite the self-portrait!",
        emoji: "🖌️",
        category: "Renaissance"
    },
    {
        fact: "The world’s oldest known drawing is 73,000 years old.",
        detail: "Found in Blombos Cave, South Africa.",
        emoji: "📐",
        category: "Prehistoric"
    },
    {
        fact: "Jackson Pollock used house paint.",
        detail: "He preferred it for its texture and flow in drip paintings.",
        emoji: "🎨",
        category: "Modern"
    },
    {
        fact: "Ancient Greek statues were painted.",
        detail: "They weren't white — they were originally bright and colorful.",
        emoji: "🏛️",
        category: "Ancient"
    },
    {
        fact: "Frida Kahlo created 143 paintings.",
        detail: "55 of them are self-portraits.",
        emoji: "🎭",
        category: "Modern"
    },
    {
        fact: "The Great Wave off Kanagawa isn't just art — it's math.",
        detail: "Its curves and composition reflect Fibonacci patterns.",
        emoji: "🌊",
        category: "Japanese Art"
    },
    {
        fact: "Warhol once made a painting of 100 soup cans.",
        detail: "It symbolized mass production and pop culture.",
        emoji: "🥫",
        category: "Pop Art"
    },
    {
        fact: "Street artist Invader uses mosaic tiles.",
        detail: "Inspired by 8-bit video games like Space Invaders.",
        emoji: "👾",
        category: "Street Art"
    },
    {
        fact: "Salvador Dalí’s mustache is in a museum.",
        detail: "He was buried with it perfectly intact.",
        emoji: "🌀",
        category: "Surrealism"
    },
    {
        fact: "Picasso could draw before he could walk.",
        detail: "He completed his first painting at age 9.",
        emoji: "🧒",
        category: "Modern"
    },
    {
        fact: "Some cave art is located deep underground.",
        detail: "Early humans crawled miles through tunnels to paint in the dark.",
        emoji: "🕳️",
        category: "Prehistoric"
    }
];

    let currentQuestionIndex = 0; 
    let score = 0;
    let timer;
    let timeLeft = 15;

    
    const quizCard = document.querySelector('.quiz-card.card-item'); 
    const quizStartScreen = document.getElementById('quiz-start-screen');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const quizMainContent = document.getElementById('quiz-main-content');

    const quizQuestion = document.getElementById('art-quiz-question');
    const quizOptions = document.getElementById('quiz-options');
    const quizFeedback = document.getElementById('quiz-feedback');
    const quizExplanation = document.getElementById('quiz-result'); 
    const nextBtn = document.getElementById('next-btn');
    const quizProgress = document.getElementById('quiz-progress');
    const scoreDisplay = document.getElementById('score-display');
    const timeLeftDisplay = document.getElementById('time-left-display'); 

    const quizResultsScreen = document.getElementById('quiz-results-screen'); 
    let quizResultsTitle;  
    let quizFinalScore;  
    let quizSummaryMessage;  
    let restartQuizBtn;  
    let backToArtBtn; 


    const artFactButton = document.getElementById('art-fact');

    
    function updateQuizTextColors() {
        const textColor = document.body.classList.contains('dark-theme') ? 'var(--text-color)' : 'var(--text-color)';
        const primaryColor = document.body.classList.contains('dark-theme') ? 'var(--primary-color)' : 'var(--primary-color)';
        const accentColor = document.body.classList.contains('dark-theme') ? 'var(--accent-color)' : 'var(--accent-color)';

        if (quizQuestion) quizQuestion.style.color = textColor;
        if (scoreDisplay) scoreDisplay.style.color = textColor;
        if (quizFeedback) quizFeedback.style.color = primaryColor; 
        if (quizExplanation) quizExplanation.style.color = textColor;
        if (timeLeftDisplay) timeLeftDisplay.style.color = textColor;

        if (quizResultsScreen && quizResultsScreen.style.display === 'block') {
            if (quizResultsTitle) quizResultsTitle.style.color = primaryColor;
            if (quizFinalScore) quizFinalScore.style.color = textColor;
            if (quizSummaryMessage) quizSummaryMessage.style.color = textColor;
        }
    }

    
    function startTimer() {
        timeLeft = 15;
        if (timeLeftDisplay) {
            timeLeftDisplay.textContent = `Time left: ${timeLeft}s`;
        }
        clearInterval(timer); 
        timer = setInterval(() => {
            timeLeft--;
            if (timeLeftDisplay) {
                timeLeftDisplay.textContent = `Time left: ${timeLeft}s`;
            }
            if (timeLeft <= 0) {
                clearInterval(timer);
                selectAnswer(-1);
            }
        }, 1000);
    }

    
    function loadQuestion() {
        if (quizStartScreen) quizStartScreen.style.display = 'none';
        if (quizResultsScreen) quizResultsScreen.style.display = 'none';
        if (quizMainContent) quizMainContent.style.display = 'block';

        if (currentQuestionIndex >= artQuestions.length) {
            displayFinalQuizResult(); 
            return;
        }

        const question = artQuestions[currentQuestionIndex];
        quizQuestion.textContent = question.question;
        quizOptions.innerHTML = ''; 
        quizFeedback.innerHTML = ''; 
        quizExplanation.innerHTML = '';
        nextBtn.style.display = 'none';

        
        for (let i = 0; i < question.options.length; i++) {
            const opt = question.options[i];
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.classList.add('quiz-option-btn'); 
            btn.onclick = () => selectAnswer(i);
            quizOptions.appendChild(btn);
        };

        
        quizProgress.value = currentQuestionIndex + 1;
        quizProgress.max = artQuestions.length;
        scoreDisplay.textContent = `Score: ${score}`;
        updateQuizTextColors(); 
        startTimer(); 
    }

    
    function selectAnswer(index) {
        clearInterval(timer); 
        const question = artQuestions[currentQuestionIndex];
        const options = quizOptions.querySelectorAll('.quiz-option-btn');

        options.forEach(b => b.disabled = true);

        if (index === -1) { 
            quizFeedback.innerHTML = `⏰ Time's up!`;
            quizExplanation.innerHTML = `The correct answer was <strong>${question.options[question.correctAnswer]}</strong>.<br>🧠 ${question.explanation}`;
            
            if (options[question.correctAnswer]) {
                options[question.correctAnswer].classList.add('correct-answer');
            }
        } else { 
            if (index === question.correctAnswer) {
                options[index].classList.add('correct-answer'); 
                quizFeedback.innerHTML = `✅ Correct!`;
                quizExplanation.innerHTML = `🧠 ${question.explanation}`;
                score++; 
                const correctAudio = document.getElementById('correctSound');
                if (correctAudio) correctAudio.play();
            } else {
                options[index].classList.add('wrong-answer'); 
                options[question.correctAnswer].classList.add('correct-answer'); 
                quizFeedback.innerHTML = `❌ Wrong!`;
                quizExplanation.innerHTML = `Correct answer is <strong>${question.options[question.correctAnswer]}</strong>.<br>🧠 ${question.explanation}`;
            }
        }

        scoreDisplay.textContent = `Score: ${score}`;
        updateQuizTextColors(); 
        nextBtn.style.display = 'inline-block'; 
    }

    
    function displayFinalQuizResult() {
        clearInterval(timer); 
        if (quizMainContent) quizMainContent.style.display = 'none'; 
        if (quizResultsScreen) quizResultsScreen.style.display = 'block'; 

        
        quizResultsTitle = quizResultsScreen.querySelector('.quiz-results-title');
        quizFinalScore = quizResultsScreen.querySelector('.quiz-final-score');
        quizSummaryMessage = quizResultsScreen.querySelector('.quiz-summary-message');
        restartQuizBtn = document.getElementById('restart-quiz-btn');
        backToArtBtn = document.getElementById('back-to-art-btn');

        if (quizResultsTitle) quizResultsTitle.textContent = `Quiz Completed!`;
        if (quizFinalScore) quizFinalScore.innerHTML = `You scored <span class="highlight-score">${score}</span> out of ${artQuestions.length}.`;

        const finalScorePercentage = (score / artQuestions.length) * 100;
        let resultSummary = '';
        if (finalScorePercentage === 100) {
            resultSummary = "🥳 Absolutely brilliant! You're an art history master!";
        } else if (finalScorePercentage >= 80) {
            resultSummary = "👍 Great job! You have a strong grasp of art history.";
        } else if (finalScorePercentage >= 60) {
            resultSummary = "👏 Good effort! Keep learning, you're on your way!";
        } else {
            resultSummary = "✍️ Don't worry, every artist starts somewhere. Keep practicing!";
        }
        if (quizSummaryMessage) quizSummaryMessage.textContent = resultSummary;

        
        if (restartQuizBtn) {
            restartQuizBtn.addEventListener('click', () => {
                currentQuestionIndex = 0;
                score = 0;
                loadQuestion(); 
            });
        }
        if (backToArtBtn) {
            backToArtBtn.addEventListener('click', () => {
                
                if (quizResultsScreen) quizResultsScreen.style.display = 'none';
                if (quizStartScreen) quizStartScreen.style.display = 'block';
                
                currentQuestionIndex = 0;
                score = 0;
            });
        }

        updateQuizTextColors(); 
    }

    let currentFactIndex = 0;

    
    function showArtFact() {
        
        if (!artFacts || artFacts.length === 0) {
            console.warn("Art facts data not available or empty.");
            if (artFactButton) {
                artFactButton.querySelector('.fact-header').innerHTML = `<span class="emoji">⚠️</span> No facts available`;
                artFactButton.querySelector('.fact-body').textContent = 'Please check artFacts data source.';
                artFactButton.querySelector('.fact-detail').textContent = '';
            }
            return;
        }

        const selected = artFacts[currentFactIndex];

        
        const factHeader = artFactButton.querySelector('.fact-header');
        const factBody = artFactButton.querySelector('.fact-body');
        const factDetail = artFactButton.querySelector('.fact-detail');

        
        if (factHeader) factHeader.innerHTML = `${selected.emoji ? selected.emoji + ' ' : ''}Random Art Fact`; 
        if (factBody) factBody.textContent = selected.fact;
        if (factDetail) factDetail.textContent = selected.detail; 

        
        if (artFactButton) {
            artFactButton.style.transition = 'none'; 
            artFactButton.style.opacity = 0;
            artFactButton.style.transform = "scale(0.9)";

            setTimeout(() => {
                artFactButton.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out"; 
                artFactButton.style.opacity = 1;
                artFactButton.style.transform = "scale(1)";
            }, 50);
        }

        currentFactIndex = (currentFactIndex + 1) % artFacts.length;
    }

    

    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', loadQuestion);
    } else {
        console.error("Start Quiz Button (#start-quiz-btn) not found.");
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            loadQuestion();
        });
    } else {
        console.error("Next Button (#next-btn) not found.");
    }

    if (artFactButton) {
        artFactButton.addEventListener('click', showArtFact);
        showArtFact();
    } else {
        console.error("Art Fact Button (#art-fact) not found.");
    }

    if (quizMainContent) quizMainContent.style.display = 'none';
    if (quizResultsScreen) quizResultsScreen.style.display = 'none';
    if (quizStartScreen) quizStartScreen.style.display = 'block'; 

    updateQuizTextColors();
});