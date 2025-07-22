// Blog data storage
let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

// DOM elements
const blogForm = document.getElementById('blog-form');
const blogsContainer = document.getElementById('blogs-container');
const searchInput = document.getElementById('search-input');
const authorFilter = document.getElementById('author-filter');
const categoryFilter = document.getElementById('category-filter');
const sortBy = document.getElementById('sort-by');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  if (blogForm) {
    blogForm.addEventListener('submit', handleBlogSubmit);
    document.getElementById('blog-date').valueAsDate = new Date();
  }
  
  if (blogsContainer) {
    displayBlogs();
    setupFilters();
  }
});

// Handle blog form submission
function handleBlogSubmit(e) {
  e.preventDefault();
  
  const blog = {
    id: Date.now().toString(),
    title: document.getElementById('blog-title').value,
    author: document.getElementById('blog-author').value,
    category: document.getElementById('blog-category').value,
    date: document.getElementById('blog-date').value,
    content: document.getElementById('blog-content').value
  };
  
  blogs.push(blog);
  saveBlogs();
  alert('Blog published successfully!');
  this.reset();
  window.location.href = 'blogs.html';
}

// Save blogs to localStorage
function saveBlogs() {
  localStorage.setItem('blogs', JSON.stringify(blogs));
}

// Display all blogs
function displayBlogs(filteredBlogs = blogs) {
  if (!blogsContainer) return;

  // Sort blogs
  const sortedBlogs = sortBlogs(filteredBlogs);

  // Clear container
  blogsContainer.innerHTML = '';

  // Add blog cards
  if (sortedBlogs.length === 0) {
    blogsContainer.innerHTML = '<p class="no-blogs">No blogs found. Try different filters.</p>';
    return;
  }

  sortedBlogs.forEach(blog => {
    const blogCard = document.createElement('div');
    blogCard.className = 'blog-card';
    blogCard.innerHTML = `
      <h3 class="blog-title">${blog.title}</h3>
      <div class="blog-meta">
        <span class="blog-category">${blog.category}</span>
        <span class="blog-author">By ${blog.author}</span>
        <span class="blog-date">${new Date(blog.date).toLocaleDateString()}</span>
      </div>
      <p class="blog-content">${blog.content.substring(0, 200)}...</p>
      <a href="#" class="read-more">Read more</a>
    `;
    blogsContainer.appendChild(blogCard);
  });
}

// Sort blogs based on selected option
function sortBlogs(blogsToSort) {
  const sortValue = sortBy ? sortBy.value : 'date-desc';
  
  return [...blogsToSort].sort((a, b) => {
    if (sortValue === 'date-desc') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });
}

// Setup filter event listeners
function setupFilters() {
  if (searchInput) searchInput.addEventListener('input', filterBlogs);
  if (authorFilter) authorFilter.addEventListener('change', filterBlogs);
  if (categoryFilter) categoryFilter.addEventListener('change', filterBlogs);
  if (sortBy) sortBy.addEventListener('change', () => displayBlogs(blogs));
  
  // Populate author filter
  const authors = [...new Set(blogs.map(blog => blog.author))];
  authors.forEach(author => {
    const option = document.createElement('option');
    option.value = author;
    option.textContent = author;
    authorFilter.appendChild(option);
  });
}

// Filter blogs based on search and filters
function filterBlogs() {
  const searchTerm = searchInput.value.toLowerCase();
  const author = authorFilter.value;
  const category = categoryFilter.value;

  const filtered = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm) || 
                         blog.content.toLowerCase().includes(searchTerm);
    const matchesAuthor = author === '' || blog.author === author;
    const matchesCategory = category === '' || blog.category === category;
    
    return matchesSearch && matchesAuthor && matchesCategory;
  });

  displayBlogs(filtered);
}