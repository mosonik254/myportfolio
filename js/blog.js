// Blog search functionality
const searchInput = document.getElementById('searchInput');
const blogPosts = document.querySelectorAll('.blog-post');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        blogPosts.forEach((post) => {
            const title = post.querySelector('h2').textContent.toLowerCase();
            const content = post.querySelector('p').textContent.toLowerCase();
            const tags = Array.from(post.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());

            const matches = title.includes(searchTerm) ||
                           content.includes(searchTerm) ||
                           tags.some(tag => tag.includes(searchTerm));

            post.style.display = matches ? 'block' : 'none';
        });
    });
}

// Highlight navigation link based on current page
const navLinks = document.querySelectorAll('.nav-links a');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
