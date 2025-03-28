document.addEventListener('DOMContentLoaded', fetchBooks);
document.getElementById('grid-view').addEventListener('click', () => toggleView('grid'));
document.getElementById('list-view').addEventListener('click', () => toggleView('list'));
document.getElementById('search-input').addEventListener('input', searchBooks);
document.getElementById('sort').addEventListener('change', sortBooks);

const booksContainer = document.getElementById('books-container');

async function fetchBooks() {
    try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/books');
        const result = await response.json();
        console.log("API Response:", result);  // Debugging
        
        const books = result.data.data || [];
        
        if (books.length > 0) {
            renderBooks(books);
        } else {
            throw new Error('No books found');
        }
    } catch (error) {
        console.error('Error fetching books:', error);
        booksContainer.innerHTML = '<p>Error loading books</p>';
    }
}

// Render books
function renderBooks(books) {
    booksContainer.innerHTML = '';

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        const coverImage = book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150';
        const title = book.volumeInfo.title || 'Unknown Title';
        const author = book.volumeInfo.authors?.[0] || 'Unknown Author';
        const publisher = book.volumeInfo.publisher || 'Unknown Publisher';
        const publishedDate = book.volumeInfo.publishedDate || 'Unknown Date';
        const infoLink = book.volumeInfo.infoLink || '#';

        bookCard.innerHTML = `
            <div class="book-cover">
                <img src="${coverImage}" alt="${title}">
            </div>
            <div class="book-details">
                <h2 class="book-title">${title}</h2>
                <p class="book-author">👤 ${author}</p>
                <p class="book-publisher">🏢 ${publisher}</p>
                <p class="book-date">📅 ${publishedDate}</p>
                <a href="${infoLink}" target="_blank" class="more-info">More Info</a>
            </div>
        `;

        booksContainer.appendChild(bookCard);
    });
}

// Toggle Grid/List View
function toggleView(view) {
    booksContainer.className = view + '-view';
    document.getElementById('grid-view').classList.toggle('active', view === 'grid');
    document.getElementById('list-view').classList.toggle('active', view === 'list');
}

// Search Books
function searchBooks() {
    const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    document.querySelectorAll('.book-card').forEach(card => {
        const title = card.querySelector('.book-title').innerText.toLowerCase() || "";
        const author = card.querySelector('.book-author')?.innerText.toLowerCase() || "";
        
        card.style.display = (title.includes(searchTerm) || author.includes(searchTerm)) ? 'block' : 'none';
    });
}

// Sort Books
function sortBooks() {
    const sortOption = document.getElementById('sort').value;
    let books = Array.from(document.querySelectorAll('.book-card'));

    books.sort((a, b) => {
        let aText, bText;
        switch (sortOption) {
            case "title":
                aText = a.querySelector('.book-title').innerText.toLowerCase();
                bText = b.querySelector('.book-title').innerText.toLowerCase();
                break;
            case "author":
                aText = a.querySelector('.book-author')?.innerText.toLowerCase() || "";
                bText = b.querySelector('.book-author')?.innerText.toLowerCase() || "";
                break;
            case "date":
                aText = a.querySelector('.book-date')?.innerText || "9999";
                bText = b.querySelector('.book-date')?.innerText || "9999";
                break;
            case "publisher":
                aText = a.querySelector('.book-publisher')?.innerText.toLowerCase() || "";
                bText = b.querySelector('.book-publisher')?.innerText.toLowerCase() || "";
                break;
            default:
                return 0;
        }
        return aText.localeCompare(bText);
    });

    booksContainer.innerHTML = "";
    books.forEach(book => booksContainer.appendChild(book));
}
