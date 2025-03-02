document.addEventListener("DOMContentLoaded", () => {
  const images = [
      { url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop", caption: "Beautiful Mountain Landscape" },
      { url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop", caption: "Ocean Sunset View" },
      { url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop", caption: "Autumn Forest Path" },
      { url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format=fit=crop", caption: "Urban City Skyline" }
  ];

  let currentIndex = 0;
  let autoPlayInterval = null;
  let countdownTimer = null;
  let secondsRemaining = 5;

  const carouselTrack = document.getElementById("carouselTrack");
  const caption = document.getElementById("caption");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const autoPlayButton = document.getElementById("autoPlayButton");
  const countdownText = document.getElementById("countdownText"); // Countdown text element
  const carouselNav = document.getElementById("carouselNav");

  function loadImage(index) {
      if (!carouselTrack.children[index]) {
          const slide = document.createElement("div");
          slide.classList.add("carousel-slide");
          carouselTrack.appendChild(slide);
      }
      const slide = carouselTrack.children[index];
      if (!slide.style.backgroundImage) {
          slide.style.backgroundImage = `url(${images[index].url})`;
      }
  }

  // Create navigation indicators
  images.forEach((_, index) => {
      const indicator = document.createElement("div");
      indicator.classList.add("carousel-indicator");
      if (index === 0) indicator.classList.add("active");
      indicator.addEventListener("click", () => updateSlide(index));
      carouselNav.appendChild(indicator);
  });

  function updateSlide(index) {
      currentIndex = index;
      loadImage(index);
      if (index > 0) loadImage(index - 1);
      if (index < images.length - 1) loadImage(index + 1);
      carouselTrack.style.transform = `translateX(-${index * 100}%)`;
      caption.textContent = images[index].caption;

      // Update active indicator
      document.querySelectorAll(".carousel-indicator").forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
      });

      // Hide countdown if autoplay is not active
      if (!autoPlayInterval) {
          countdownText.textContent = "";
      }
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlide(currentIndex);
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlide(currentIndex);
  }
  function toggleAutoPlay() {
      if (autoPlayInterval) {
          clearInterval(autoPlayInterval);
          clearInterval(countdownTimer);
          autoPlayInterval = null;
          countdownTimer = null;
          autoPlayButton.textContent = "Start Auto Play";
          countdownText.textContent = ""; // Clear text when autoplay stops
      } else {
          secondsRemaining = 5; // Ensure it starts at 5
          updateCountdownText(); // Show "Next slide in 5s" immediately

          countdownTimer = setInterval(() => {
              if (secondsRemaining > 1) {
                  secondsRemaining--;
                  updateCountdownText();
              } else {
                  clearInterval(countdownTimer); // Stop the countdown at 1
              }
          }, 1000);

          autoPlayInterval = setInterval(() => {
              nextSlide();
              secondsRemaining = 5; // Reset countdown for next slide
              updateCountdownText();

              // Restart countdown after slide change
              clearInterval(countdownTimer);
              countdownTimer = setInterval(() => {
                  if (secondsRemaining > 1) {
                      secondsRemaining--;
                      updateCountdownText();
                  } else {
                      clearInterval(countdownTimer); // Stop countdown at 1
                  }
              }, 1000);
          }, 5000);

          autoPlayButton.textContent = "Stop Auto Play";
      }
  }

  function updateCountdownText() {
      countdownText.textContent = `Next slide in ${secondsRemaining}s`;
  }


  // Event Listeners
  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);
  autoPlayButton.addEventListener("click", toggleAutoPlay);

  // Initialize first slide
  updateSlide(currentIndex);
});
