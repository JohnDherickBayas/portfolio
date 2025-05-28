// Background animation
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 1.2,
    dy: (Math.random() - 0.5) * 1.2
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "#f44336";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Project carousel
const projects = [
  {
    title: "Car Finder App",
    image: "car.jpg",
    description: "A smart web application that lets users discover their ideal car by filtering specs like engine type, budget, and brand. Designed for simplicity and power, just like a V8 engine."
  },
  {
    title: "Personal Portfolio",
    image: "website.png",
    description: "A stylish and fully responsive portfolio website showcasing Dherick’s frontend skills, complete with animations, interactive UI, and a clean automotive-inspired theme."
  },
  {
    title: "Bike Garage Manager",
    image: "truck.png",
    description: "An intuitive dashboard tool for Malinta Corrugated Boxes Manufacturing Corporation with Automated inventory monitoring, Centralized digital system, and improve route planning and dispatch coordination feature."
  }
];


let current = 0;
const projectDisplay = document.getElementById('projectDisplay');

function showProject(index) {
  const project = projects[index];
  projectDisplay.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <div class="project-description">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </div>
  `;
}

function prevProject() {
  current = (current - 1 + projects.length) % projects.length;
  showProject(current);
}

function nextProject() {
  current = (current + 1) % projects.length;
  showProject(current);
}

showProject(current);
