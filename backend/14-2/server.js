import express from "express"
import cors from "cors"
import path from "path"
import __dirname from "path"

const app = express()
const port = 3000//5000, 4000
app.use(cors({origin:"http://127.0.0.1:5500/public/index.html"}))

const quotes = [
  {
    text: "Imagination is more important than knowledge.",
    author: "Albert Einstein"
  },
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

// const arr = [1,2,3,4,5,6,7,8,9,10];

app.get("/", (req, res) => {
  res.send("server is running now...")
})

app.get("/quotes", (req, res) => {
  res.sendfile(path.join(__dirname,"./index.html"))
})

app.get("/api/v1/quotes", (req, res) => {
  res.json({quote:quotes[Math.floor(Math.random()*quotes.length)]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})