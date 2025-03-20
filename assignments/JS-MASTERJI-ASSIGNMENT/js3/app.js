// Fetch and display a random quote
const fetchQuote = async () => {
    try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random', { cache: 'no-store' });
        if (!response.ok) throw new Error("Failed to fetch quote");

        const { success, data } = await response.json();
        if (!success || !data?.content) throw new Error("Invalid response format");

        document.getElementById('quoteText').innerText = `"${data.content}"`;
        document.getElementById('quoteAuthor').innerText = `- ${data.author}`;
    } catch (error) {
        console.error(error);
        document.getElementById('quoteText').innerText = "Error fetching quote. Try again.";
        document.getElementById('quoteAuthor').innerText = "";
    }
};

// Copy the current quote to the clipboard
const copyToClipboard = () => {
    const quoteText = document.getElementById('quoteText').innerText;
    const quoteAuthor = document.getElementById('quoteAuthor').innerText;
    const quote = `${quoteText}\n${quoteAuthor}`;

    navigator.clipboard.writeText(quote)
        .then(() => alert("Quote copied to clipboard!"))
        .catch(err => console.error("Clipboard copy failed:", err));
};

// Share the quote on Twitter
const shareOnTwitter = () => {
    const quoteText = document.getElementById('quoteText').innerText;
    const quoteAuthor = document.getElementById('quoteAuthor').innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quoteText} ${quoteAuthor}`)}`;
    window.open(twitterUrl, '_blank');
};

// Export the quote as an image
const exportQuote = async () => {
    try {
        const quoteContainer = document.getElementById('quoteContainer');
        if (!quoteContainer) {
            alert("Error: Quote container not found!");
            return;
        }

        console.log("Capturing screenshot...");
        const canvas = await html2canvas(quoteContainer, {
            backgroundColor: "#ffffff",
            scale: 2,
            useCORS: true
        });

        console.log("Canvas generated successfully!");

        // Convert canvas to image and trigger download
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'quote.png';
        link.click();

        console.log("Export successful!");
    } catch (error) {
        console.error("Error exporting quote:", error);
        alert("Failed to export quote. Try again!");
    }
};

// Load a new quote on page load
fetchQuote();
