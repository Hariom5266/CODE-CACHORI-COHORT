document.addEventListener("DOMContentLoaded", () => {
    const clock = document.querySelector(".clock");
    const hourHand = document.getElementById("hour-hand");
    const minuteHand = document.getElementById("minute-hand");
    const secondHand = document.getElementById("second-hand");
    const digitalClock = document.getElementById("digital-clock");
    const dateElement = document.getElementById("date");

    function updateDate() {
        const today = new Date();
        const fullDate = today.toLocaleDateString('en-US', {
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

        // Update digital clock
        digitalClock.textContent = now.toLocaleTimeString("en-IN", {
            hour12: true,
            timeZone: "Asia/Kolkata"
        });


        // Move analog clock hands
        const hourDeg = ((hours % 12) + minutes / 60) * 30;
        const minuteDeg = (minutes + seconds / 60) * 6;
        const secondDeg = seconds * 6;

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
            number.style.zIndex = -1;
            number.style.left = `${150 + radius * Math.sin(angle) - 10}px`;
            number.style.top = `${150 - radius * Math.cos(angle) - 10}px`;

            clock.appendChild(number);
        }
    }

    updateDate();
    updateTime();
    setInterval(updateTime, 1000);
    addClockNumbers();
});
