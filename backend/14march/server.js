import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Enables JSON parsing for incoming requests

// Quotes Data
const quotes = [
    { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.", author: "Steve Jobs" },
    { text: "The time is always right to do what is right.", author: "Martin Luther King Jr." },
    { text: "The best investment you can make is in yourself.", author: "Warren Buffet" },
    { text: "Not all of us can do great things. But we can do small things with great love.", author: "Mother Teresa" },
    { text: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "If I have seen further, it is by standing on the shoulders of giants.", author: "Isaac Newton" },
    { text: "To be, or not to be, that is the question.", author: "William Shakespeare" },
    { text: "The best way to not feel hopeless is to get up and do something.", author: "Barack Obama" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
    { text: "The biggest adventure you can take is to live the life of your dreams.", author: "Oprah Winfrey" },
    { text: "Absorb what is useful, discard what is not, add what is uniquely your own.", author: "Bruce Lee" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" }
];

// Quotes API Route
app.get("/api/v1/quotes", (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomQuote);
});

// Start Server
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
