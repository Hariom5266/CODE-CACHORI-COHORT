document.addEventListener("DOMContentLoaded", () => {
    const quoteText = document.getElementById("quote");
    const authorText = document.getElementById("author");
    const newQuoteBtn = document.getElementById("new-quote");

    async function fetchQuote() {
        try {
            const response = await fetch("http://localhost:5000/api/v1/quotes");
            const data = await response.json();
            quoteText.textContent = `"${data.text}"`;
            authorText.textContent = `— ${data.author}`;
        } catch (error) {
            quoteText.textContent = "Oops! Failed to fetch a quote.";
            authorText.textContent = "";
        }
    }

    newQuoteBtn.addEventListener("click", fetchQuote);
    
    // Load first quote on page load
    fetchQuote();
});
