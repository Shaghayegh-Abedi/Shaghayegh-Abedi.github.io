# How to Add Your Information to Your Portfolio

## Quick Guide

All your personal information is in the `index.html` file. Here's where to edit each section:

## 1. Sidebar Profile (Lines 14-16)

Edit these lines to change your profile picture, name, and title:

```html
<img src="https://via.placeholder.com/150" alt="Profile" class="profile-img" />
<h2>Your Name</h2>
<p>Machine Learning Engineer</p>
```

**To add your profile picture:**
- Upload an image to your repository (create an `images` folder)
- Or use a URL from a hosting service
- Change the `src` to: `src="images/your-photo.jpg"` or `src="https://your-image-url.com/photo.jpg"`

**To change your name and title:**
- Replace `Your Name` with your actual name
- Replace `Machine Learning Engineer` with your title

## 2. About Section (Lines 72-77)

Edit the paragraph inside the `<div class="post">`:

```html
<div class="post">
  <p>Welcome to my portfolio! I'm a Machine Learning Engineer passionate about building intelligent systems and solving complex problems.</p>
</div>
```

You can add multiple paragraphs, lists, or any HTML content here.

## 3. Experience Section (Lines 79-86)

Add your work experience. You can add multiple experience entries:

```html
<section id="experience" class="section" style="display: none;">
  <h1>Experience</h1>
  
  <div class="post">
    <h2>Job Title</h2>
    <p class="date">Company Name | Start Date - End Date</p>
    <p>Description of your role and achievements.</p>
    <ul>
      <li>Achievement 1</li>
      <li>Achievement 2</li>
    </ul>
  </div>
  
  <div class="post">
    <h2>Previous Job Title</h2>
    <p class="date">Previous Company | Start Date - End Date</p>
    <p>Description...</p>
  </div>
</section>
```

## 4. Education Section (Lines 88-95)

Add your educational background:

```html
<section id="education" class="section" style="display: none;">
  <h1>Education</h1>
  
  <div class="post">
    <h2>Degree Name</h2>
    <p class="date">University Name | Graduation Year</p>
    <p>Additional details, GPA, honors, relevant coursework, etc.</p>
  </div>
  
  <div class="post">
    <h2>Another Degree</h2>
    <p class="date">Another University | Year</p>
    <p>Details...</p>
  </div>
</section>
```

## 5. Skills Section (Lines 97-103)

List your technical and soft skills:

```html
<section id="skills" class="section" style="display: none;">
  <h1>Skills</h1>
  
  <div class="post">
    <h2>Programming Languages</h2>
    <p>Python, JavaScript, Java, C++, etc.</p>
  </div>
  
  <div class="post">
    <h2>Frameworks & Tools</h2>
    <p>React, TensorFlow, PyTorch, Docker, etc.</p>
  </div>
  
  <div class="post">
    <h2>Soft Skills</h2>
    <p>Leadership, Communication, Problem-solving, etc.</p>
  </div>
</section>
```

## 6. Projects Section (Lines 105-110)

**This section is automatic!** It automatically fetches your GitHub repositories. No editing needed unless you want to add a description above the repositories.

## 7. Publications Section (Lines 112-119)

Add your research papers, articles, blog posts:

```html
<section id="publications" class="section" style="display: none;">
  <h1>Publications</h1>
  
  <div class="post">
    <h2>Paper Title</h2>
    <p class="date">Journal/Conference Name | Year</p>
    <p>Authors: Your Name, Co-author, etc.</p>
    <p><a href="https://link-to-paper.com" target="_blank">Read Paper</a></p>
  </div>
  
  <div class="post">
    <h2>Another Publication</h2>
    <p class="date">Publication Venue | Year</p>
    <p>Description and link...</p>
  </div>
</section>
```

## 8. Interests Section (Lines 121-127)

Share your hobbies and interests:

```html
<section id="interests" class="section" style="display: none;">
  <h1>Interests</h1>
  
  <div class="post">
    <h2>Hobbies & Interests</h2>
    <p>Photography, Reading, Hiking, Music, etc.</p>
  </div>
  
  <div class="post">
    <h2>Volunteer Work</h2>
    <p>Description of volunteer activities...</p>
  </div>
</section>
```

## 9. Page Title (Line 6)

Change the browser tab title:

```html
<title>Your Name - Portfolio</title>
```

## Tips for Editing

1. **Keep the structure**: Don't remove the `<section>`, `<div class="post">`, or other HTML tags - just edit the content inside them.

2. **Add multiple entries**: You can add multiple `<div class="post">` blocks in each section for multiple items.

3. **Add links**: Use `<a href="url" target="_blank">Link Text</a>` to add clickable links.

4. **Add lists**: Use `<ul><li>Item</li></ul>` for bullet points or `<ol><li>Item</li></ol>` for numbered lists.

5. **Add images**: Use `<img src="image-url" alt="description" />` to add images.

6. **Test locally**: After editing, you can open `index.html` in your browser to preview before pushing to GitHub.

## After Editing

1. Save the file
2. Commit and push to GitHub:
   ```bash
   git add index.html
   git commit -m "Update personal information"
   git push origin main
   ```

3. Wait 1-2 minutes for GitHub Pages to update your site!

