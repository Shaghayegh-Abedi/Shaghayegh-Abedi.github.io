const canvas = document.getElementById("trail");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let spots = [];
let hue = 0;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener("mousemove", (e) => {
  spots.push({ x: e.x, y: e.y, alpha: 1, hue: hue });
  hue += 8; // shifts color along the spectrum
  if (hue > 360) hue = 0;
});

function draw() {
  // slight fade effect for smooth trails
  ctx.fillStyle = "rgba(11, 11, 32, 0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < spots.length; i++) {
    const s = spots[i];
    const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 40);

    // multiple hues for color variation
    gradient.addColorStop(0, `hsla(${s.hue}, 100%, 70%, ${s.alpha})`);
    gradient.addColorStop(0.3, `hsla(${(s.hue + 60) % 360}, 100%, 60%, ${s.alpha * 0.7})`);
    gradient.addColorStop(1, "transparent");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(s.x, s.y, 40, 0, Math.PI * 2);
    ctx.fill();

    s.alpha -= 0.03; // faster fade for thinner effect
    if (s.alpha <= 0) spots.splice(i, 1);
  }

  requestAnimationFrame(draw);
}

draw();

// Navigation functionality
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

// Show section based on hash or default to about
function showSection(sectionId) {
  sections.forEach(section => {
    section.style.display = 'none';
  });
  
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = 'block';
  }
  
  // Update active nav item
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${sectionId}`) {
      item.classList.add('active');
    }
  });
}

// Handle navigation clicks
navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = item.getAttribute('href').substring(1);
    showSection(sectionId);
    window.history.pushState({}, '', `#${sectionId}`);
  });
});

// Handle hash changes
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.substring(1) || 'about';
  showSection(hash);
});

// Initialize - show about section by default
const initialHash = window.location.hash.substring(1) || 'about';
showSection(initialHash);

// Fetch GitHub repositories
const username = 'Shaghayegh-Abedi';

function getReposContainer() {
  return document.getElementById('repositories-container');
}

const languageColors = {
  'Python': '#3572A5',
  'JavaScript': '#F1E05A',
  'TypeScript': '#2B7489',
  'Java': '#B07219',
  'C++': '#F34B7D',
  'C': '#555555',
  'C#': '#239120',
  'Go': '#00ADD8',
  'Rust': '#DEA584',
  'Ruby': '#701516',
  'PHP': '#4F5D95',
  'Swift': '#FA7343',
  'Kotlin': '#F18E33',
  'HTML': '#E34C26',
  'CSS': '#563D7C',
  'Shell': '#89E051',
  'Dart': '#00B4AB',
  'R': '#198CE7',
  'Scala': '#DC322F',
  'Vue': '#2C3E50',
  'React': '#61DAFB',
  'Jupyter Notebook': '#DA5B0B',
};

async function fetchRepositories() {
  const reposContainer = getReposContainer();
  if (!reposContainer) return;
  
  try {
    reposContainer.innerHTML = '<p>Loading repositories...</p>';
    
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    
    const repos = await response.json();
    
    if (repos.length === 0) {
      reposContainer.innerHTML = '<p>No repositories found.</p>';
      return;
    }
    
    reposContainer.innerHTML = '';
    
    repos.forEach(repo => {
      const repoCard = document.createElement('div');
      repoCard.className = 'repo-card';
      
      const language = repo.language || '';
      const langColor = languageColors[language] || '#888';
      const description = repo.description || 'No description available';
      const updated = new Date(repo.updated_at).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
      
      // Create tags
      const tags = [];
      if (language) tags.push(`<span class="repo-tag">${language}</span>`);
      if (repo.fork) tags.push('<span class="repo-tag">Fork</span>');
      if (repo.archived) tags.push('<span class="repo-tag">Archived</span>');
      
      repoCard.innerHTML = `
        <div class="repo-header">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" style="color: #888;">
            <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
          </svg>
          <a href="${repo.html_url}" target="_blank" class="repo-name">${repo.name}</a>
        </div>
        <p class="date">Updated ${updated}</p>
        <p class="repo-description">${description}</p>
        ${tags.length > 0 ? `<div class="repo-tags">${tags.join('')}</div>` : ''}
        <div class="repo-meta">
          ${language ? `<div class="repo-meta-item">
            <span class="language" style="background-color: ${langColor};"></span>
            ${language}
          </div>` : ''}
          <div class="repo-meta-item">⭐ ${repo.stargazers_count}</div>
          <div class="repo-meta-item">🍴 ${repo.forks_count}</div>
        </div>
      `;
      
      reposContainer.appendChild(repoCard);
    });
  } catch (error) {
    console.error('Error fetching repositories:', error);
    reposContainer.innerHTML = '<p>Error loading repositories. Please try again later.</p>';
  }
}

// Fetch repositories when Projects section is shown
function handleProjectsSection() {
  const reposContainer = getReposContainer();
  if (reposContainer && (reposContainer.innerHTML === '<p>Loading repositories...</p>' || reposContainer.innerHTML === '')) {
    fetchRepositories();
  }
}

const projectsLink = document.querySelector('a[href="#projects"]');
if (projectsLink) {
  projectsLink.addEventListener('click', () => {
    setTimeout(handleProjectsSection, 100);
  });
}

// Also fetch if projects is the initial section
if (initialHash === 'projects') {
  setTimeout(handleProjectsSection, 100);
}

// Watch for section changes
const observer = new MutationObserver(() => {
  const projectsSection = document.getElementById('projects');
  if (projectsSection && projectsSection.style.display !== 'none') {
    handleProjectsSection();
  }
});

const mainContent = document.querySelector('.content');
if (mainContent) {
  observer.observe(mainContent, { attributes: true, attributeFilter: ['style'], subtree: true });
}