function saveTodayMood(todayMood) {
    
    const moods=[];
    const today = new Date();
    console.log(today.toLocaleString());
    
    moods.push({date:todayMood,mood:todayMood})
    console.log("Data saved to the DB:", todayMood);
}

function getMoodText(emoji) {
    const moodTxt = {
        "😊": "Happy",
        "😢": "Sad",
        "😐": "Neutral",
        "🤩": "Excited",
        "😠": "Angry",
        "😴": "Sleepy",
        "😰": "Anxious",
        "❤️": "Love"
    };
    return moodTxt[emoji] ?? "Unknown";
}

function getTodayMood() {
    const moodOptions = document.querySelectorAll(".mood-option");
    let moodEmoji = "😐"; 
    
    moodOptions.forEach(mood => {
        mood.addEventListener("click", () => {
            moodEmoji = mood.textContent;
            console.log(getMoodText(moodEmoji));
            // console.log(Object.keys(moodEmoji));
            // console.log(moodEmoji in moodTxt);
            // console.log(moodTxt.hasOwnProperty(moodEmoji));
            
            currentMood = moodEmoji;
        });
    });
    
    return moodEmoji;
}

let currentMood = getTodayMood();
console.log(currentMood);

document.querySelector(".saveMood").addEventListener("click", () => {
    if (currentMood) {
        saveTodayMood(currentMood);
    }
}); 