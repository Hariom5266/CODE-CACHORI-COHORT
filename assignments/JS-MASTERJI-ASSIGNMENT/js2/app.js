let allVideos = [];

// Fetch YouTube videos from the API
const fetchVideos = async () => {
    try {
        const videoContainer = document.getElementById('videoContainer');
        videoContainer.innerHTML = '<p class="loading">Loading videos...</p>';

        const response = await fetch('https://api.freeapi.app/api/v1/public/youtube/videos');
        if (!response.ok) throw new Error("Failed to fetch videos");

        const { statusCode, data } = await response.json();
        if (statusCode !== 200 || !data?.data) throw new Error("Invalid API response");

        // Extract "items" from each object and flatten the array
        allVideos = data.data.flatMap(video => video.items || []);
        displayVideos(allVideos);
    } catch (error) {
        document.getElementById('videoContainer').innerHTML = `<p class="error">Error: ${error.message}</p>`;
        console.error("Fetch error:", error);
    }
};

// Display videos dynamically
const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = '';

    if (!videos.length) {
        videoContainer.innerHTML = '<p class="no-results">No videos match your search</p>';
        return;
    }

    videos.forEach(video => {
        if (!video?.snippet) return; // Ensure valid video data

        const { id, snippet } = video;
        const { title, channelTitle, thumbnails } = snippet;

        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.addEventListener('click', () => {
            window.open(`https://www.youtube.com/watch?v=${id}`, '_blank');
        });

        videoCard.innerHTML = `
            <img class="thumbnail" src="${thumbnails?.high?.url || 'https://via.placeholder.com/480x360'}" alt="${title}">
            <div class="video-info">
                <div class="video-title">${title}</div>
                <div class="channel-name">${channelTitle}</div>
            </div>
        `;

        videoContainer.appendChild(videoCard);
    });
};

// Filter and display videos based on search query
const searchVideos = (query) => {
    query = query.toLowerCase();
    const filteredVideos = allVideos.filter(({ snippet }) =>
        snippet.title.toLowerCase().includes(query) || snippet.channelTitle.toLowerCase().includes(query)
    );
    displayVideos(filteredVideos);
};

// Event listener for search input
document.getElementById('searchBar').addEventListener('input', (event) => {
    searchVideos(event.target.value);
});

// Fetch videos on page load
fetchVideos();
