function fetchNewQuote(){
    const data = fetch("http://127.0.0.1:3000/api/v1/quotes");
    console.log(data);
    
}