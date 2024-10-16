const projects = document.querySelectorAll('.project');
const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    projects.forEach(project => {
        const title = project.querySelector('h2').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
});