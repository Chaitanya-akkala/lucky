// Sample event data
const events = [
  {
    title: "Onam Cultural Show",
    date: "2025-07-05",
    location: "Kerala",
    image:"onam.jpeg"
  },
  {
    title: "Krishna Janmashtami",
    date: "2025-08-16",
    location: "Dwaraka",
    image: "krishna.jpeg"
  },
  {
    title: "Ganesh Chaturthi",
    date: "2025-08-27",
    location: "Gujarat",
    image: "ganesh.jpeg"
  },
  {
    title: "Durga Ashtami",
    date: "2025-10-02",
    location: "Kolkata",
    image: "durga.jpeg"
  },
  {
    title: "Diwali Celebration",
    date: "2025-10-20",
    location: "Andhra Pradesh",
    image: "deepali.jpeg"
  },
  {
    title: "Merry Christmas",
    date: "2025-12-25",
    location: "Hyderabad",
    image: "chrismas.jpeg"
  }
];

// Load event cards with images
function loadEvents() {
  const eventList = document.getElementById("eventList");
  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}" class="event-img">
      <h3>${event.title}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Location:</strong> ${event.location}</p>
    `;
    eventList.appendChild(card);
  });
}

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formResponse").textContent = "Thank you! We'll get in touch soon.";
});

// Image slider
let sliderImages = ["assets/slider1.jpg", "assets/slider2.jpg", "assets/slider3.jpg"];
let currentSlide = 0;
setInterval(() => {
  currentSlide = (currentSlide + 1) % sliderImages.length;
  document.getElementById("sliderImage").src = sliderImages[currentSlide];
}, 3000);

// Scroll animation for sections
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

// Load events on window load
window.onload = loadEvents;

