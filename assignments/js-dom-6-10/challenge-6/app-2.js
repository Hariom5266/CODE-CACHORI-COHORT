document.addEventListener("DOMContentLoaded", () => {
    const clock = document.querySelector(".clock");
    const hourHand = document.getElementById("hour-hand");
    const minuteHand = document.getElementById("minute-hand");
    const secondHand = document.getElementById("second-hand");
    const digitalClock = document.getElementById("digital-clock");
    const dateElement = document.getElementById("date");

    let lastSecond = -1; // To track last second and prevent unnecessary updates

    function updateDate() {
        const today = new Date();
        const fullDate = today.toLocaleDateString('en-IN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        dateElement.textContent = fullDate.replace(/,/g, ""); // Remove commas
    }

    function updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const milliseconds = now.getMilliseconds();

        // **Prevent unnecessary updates** (update only when second changes)
        if (seconds !== lastSecond) {
            digitalClock.textContent = now.toLocaleTimeString("en-IN", {
                hour12: true,
                timeZone: "Asia/Kolkata"
            });
            lastSecond = seconds; // Update last second
        }

        // **Smooth movement of clock hands**
        const hourDeg = ((hours % 12) + minutes / 60 + seconds / 3600) * 30;
        const minuteDeg = (minutes + seconds / 60 + milliseconds / 60000) * 6;
        const secondDeg = (seconds + milliseconds / 1000) * 6;

        hourHand.style.transform = `rotate(${hourDeg}deg)`;
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
        secondHand.style.transform = `rotate(${secondDeg}deg)`;
    }

    function addClockNumbers() {
        for (let i = 1; i <= 12; i++) {
            const number = document.createElement("div");
            number.classList.add("number");
            number.innerText = i;

            const angle = (i * 30) * (Math.PI / 180);
            const radius = 120;

            number.style.position = "absolute";
            number.style.left = `${150 + radius * Math.sin(angle) - 10}px`;
            number.style.top = `${150 - radius * Math.cos(angle) - 10}px`;
            number.style.zIndex = "1"; // Ensure it's above clock background but below hands

            clock.appendChild(number);
        }
    }

    updateDate(); 
    updateTime();
    setInterval(updateTime, 1000 / 60); // Update 60 times per second for smooth movement
    addClockNumbers();
});
