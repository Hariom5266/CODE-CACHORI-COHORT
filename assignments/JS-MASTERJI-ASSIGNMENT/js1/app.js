document.addEventListener("DOMContentLoaded", () => {
    let selectedMood = null;
    const moodOptions = document.querySelectorAll(".mood-option");
    const saveButton = document.querySelector(".saveMood");
    const historyList = document.getElementById("moodHistory");

    function getMoodText(emoji) {
        const moodMap = {
            "😊": "Happy",
            "😢": "Sad",
            "😐": "Neutral",
            "🤩": "Excited",
            "😠": "Angry",
            "😴": "Sleepy",
            "😰": "Anxious",
            "❤️": "Love"
        };
        return moodMap[emoji] || "Unknown";
    }

    moodOptions.forEach(option => {
        option.addEventListener("click", () => {
            moodOptions.forEach(m => m.classList.remove("selected"));
            option.classList.add("selected");
            selectedMood = option.textContent;
        });
    });

    saveButton.addEventListener("click", () => {
        if (!selectedMood) {
            alert("Please select a mood first!");
            return;
        }

        const today = dayjs().format("YYYY-MM-DD");
        let moods = JSON.parse(localStorage.getItem("moods")) || [];

        const existingEntryIndex = moods.findIndex(entry => entry.date === today);
        
        if (existingEntryIndex !== -1) {
            moods[existingEntryIndex].mood = selectedMood;
            alert("Mood updated successfully!");
        } else {
            moods.push({ date: today, mood: selectedMood });
            alert("Mood saved!");
        }

        localStorage.setItem("moods", JSON.stringify(moods));
        loadMoodHistory("month");
        renderCalendar();
    });

    function loadMoodHistory(filter) {
        historyList.innerHTML = "";
        const moods = JSON.parse(localStorage.getItem("moods")) || [];
        const today = dayjs();
        
        let filteredMoods = moods.filter(entry => {
            if (filter === "day") return dayjs(entry.date).isSame(today, "day");
            if (filter === "week") return dayjs(entry.date).isAfter(today.subtract(7, "day"));
            if (filter === "month") return dayjs(entry.date).isAfter(today.subtract(30, "day"));
            return true;
        });

        filteredMoods.reverse().forEach(entry => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${entry.date}:</strong> ${entry.mood} (${getMoodText(entry.mood)})`;
            historyList.appendChild(li);
        });
    }

    function renderCalendar() {
        const calendarView = document.getElementById("calendarView");
        calendarView.innerHTML = "";
        const moods = JSON.parse(localStorage.getItem("moods")) || [];

        for (let i = 1; i <= 30; i++) {
            const day = dayjs().subtract(30 - i, "day").format("YYYY-MM-DD");
            const moodEntry = moods.find(m => m.date === day);
            const div = document.createElement("div");
            div.classList.add("mood-day");
            div.innerHTML = `${i} ${moodEntry ? moodEntry.mood : "🟩"}`;
            calendarView.appendChild(div);
        }
    }

    loadMoodHistory("month");
    renderCalendar();
});
