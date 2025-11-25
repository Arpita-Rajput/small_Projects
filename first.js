document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const generateQuoteBtn = document.getElementById('generate-quote');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    const quotes = [
        {
            quote: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            quote: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
        },
        {
            quote: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            quote: "It is during our darkest moments that we must focus to see the light.",
            author: "Aristotle Onassis"
        },
        {
            quote: "Strive not to be a success, but rather to be of value.",
            author: "Albert Einstein"
        },
        {
            quote: "The mind is everything. What you think you become.",
            author: "Buddha"
        },
        {
            quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
            author: "Oprah Winfrey"
        },
        {
            quote: "The only limit to our realization of tomorrow will be our doubts of today.",
            author: "Franklin D. Roosevelt"
        },
        {
            quote: "Do not wait for a leader; do it alone, person to person.",
            author: "Mother Teresa"
        },
        {
            quote: "The best way to predict the future is to create it.",
            author: "Peter Drucker"
        }
    ];

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function displayQuote() {
        const { quote, author } = getRandomQuote();
        quoteText.style.opacity = 0; // Start fade-out
        quoteAuthor.style.opacity = 0;

        setTimeout(() => {
            quoteText.textContent = `"${quote}"`;
            quoteAuthor.textContent = `- ${author}`;
            quoteText.style.opacity = 1; // Fade-in
            quoteAuthor.style.opacity = 1;
        }, 300); // Duration for fade-out
    }

    // Initial quote display
    displayQuote();

    // Event listener for quote generation
    generateQuoteBtn.addEventListener('click', displayQuote);

    // Dark/Light Mode Toggle
    themeToggleBtn.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
    }
});