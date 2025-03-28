// Get DOM elements
const markdownInput = document.getElementById('markdown-input');
const preview = document.getElementById('preview');
const clearBtn = document.getElementById('clear-btn');
const copyBtn = document.getElementById('copy-btn');
const themeToggle = document.getElementById('theme-toggle');
const wordCount = document.getElementById('word-count');

// Configure marked options
marked.setOptions({
    breaks: true,
    highlight: function (code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
    }
});

// Function to update the preview
function updatePreview() {
    const markdownText = markdownInput.value;
    const htmlOutput = marked.parse(markdownText);
    preview.innerHTML = htmlOutput;

    // Update word count
    const text = markdownInput.value;
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    wordCount.textContent = words + (words === 1 ? ' word' : ' words');
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Copy HTML content
function copyHTML() {
    const htmlContent = preview.innerHTML;
    navigator.clipboard.writeText(htmlContent).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy HTML';
        }, 2000);
    });
}

// Event listeners
markdownInput.addEventListener('input', updatePreview);
clearBtn.addEventListener('click', function () {
    markdownInput.value = '';
    updatePreview();
});
copyBtn.addEventListener('click', copyHTML);
themeToggle.addEventListener('change', toggleDarkMode);

// Add sample markdown on load
window.addEventListener('load', function () {
    markdownInput.value = `# Modern Markdown Previewer

## Create beautiful documents with ease

This is a **live preview** of your _markdown_ content. Edit on the left and see the results instantly on the right.

### Key Features:
* Real-time preview
* Dark mode support
* Support for *italic* and **bold** text
* Support for [links](https://example.com)
* Code highlighting

#### Code Example:
\`\`\`javascript
// This will be syntax highlighted
function greet() {
const time = new Date().getHours();
let greeting = "Hello";

if (time < 12) {
    greeting = "Good morning";
} else if (time < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

return greeting + ", World!";
}

console.log(greet());
\`\`\`

Inline code is also supported: \`const year = new Date().getFullYear();\`

> This is a blockquote - perfect for highlighting important information or quoting someone.

### Lists Support:

1. First ordered item
2. Second ordered item
3. Third ordered item

- Unordered list item
- Another unordered item
- And another one

### Tables:

| Feature | Supported |
|---------|-----------|
| Headings | ✅ |
| Bold/Italic | ✅ |
| Links | ✅ |
| Code | ✅ |
| Lists | ✅ |
| Tables | ✅ |

![Placeholder Image](https://via.placeholder.com/800x400)

##### Enjoy creating with Markdown!
`;
    updatePreview();
});
