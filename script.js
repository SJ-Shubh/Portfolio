/* style.css */
body {
    font - family: 'Poppins', sans - serif; /* Modern font */
    margin: 0;
    line - height: 1.7;
    color: #333;
    background: #f9f9f9; /* Off-white background */
    -webkit - font - smoothing: antialiased; /* for font smoothing */
}

/* Container for consistent spacing */
.container {
    max - width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

header {
    background: #fff;
    padding: 20px 0;
    box - shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    position: fixed;
    width: 100 %;
    z - index: 100;
}

nav {
    display: flex;
    justify - content: space - between;
    align - items: center;
}

.logo {
    font - weight: 600;
    font - size: 1.4rem;
    text - decoration: none;
    color: #333;
}

nav ul {
    list - style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

nav li {
    margin - left: 30px;
}

nav a {
    text - decoration: none;
    color: #555;
    transition: color 0.3s ease; /* Smooth color transition */
}

nav a:hover {
    color: #007bff; /* Highlight color on hover */
}

/* Hero Section */
#hero {
    background: #f0f0f0; /* Very light gray background */
    padding: 150px 0;
    text - align: center;
}

.hero - content h1 {
    font - size: 3rem;
    margin - bottom: 20px;
    color: #222;
}

.hero - content p {
    font - size: 1.2rem;
    color: #555;
    margin - bottom: 30px;
}

.btn {
    display: inline - block;
    background: #007bff; /* Primary color */
    color: white;
    padding: 12px 25px;
    text - decoration: none;
    border - radius: 5px;
    transition: background - color 0.3s ease;
}

.btn:hover {
    background: #0056b3; /* Darker shade on hover */
}

/* About Section */
#about {
    padding: 80px 0;
}

.about - content {
    display: flex;
    align - items: center;
    gap: 50px;
}

.profile - pic {
    width: 300px;
    border - radius: 10px;
    box - shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.about - text {
    flex: 1; /* Takes up remaining space */
}

/* Projects Section */
#projects {
    background: #fff;
    padding: 80px 0;
    box - shadow: 0 - 2px 5px rgba(0, 0, 0, 0.05); /* subtle shadow on the top */
}

.projects - grid {
    display: grid;
    grid - template - columns: repeat(auto - fit, minmax(350px, 1fr));
    gap: 30px;
}

.project {
    border - radius: 8px;
    overflow: hidden;
    box - shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box - shadow 0.3s ease;
}

.project:hover {
    transform: translateY(-5px); /* Lift on hover */
    box - shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.project img {
    width: 100 %;
    height: auto;
    display: block;
}

.project h3, .project p {
    padding: 0 20px;
}

.project - link {
    display: block;
    padding: 15px 0;
    text - align: center;
    background: #f0f0f0;
    color: #333;
    text - decoration: none;
    transition: background - color 0.3s ease;
}

.project - link:hover {
    background - color: #e1e1e1;
}

/* Contact Section */
#contact {
    padding: 80px 0;
    background: #f9f9f9;
}