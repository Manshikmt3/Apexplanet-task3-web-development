// ✅ Image Carousel
let images = document.querySelectorAll(".carousel-image");
let currentIndex = 0;

document.getElementById("next").addEventListener("click", () => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
});

document.getElementById("prev").addEventListener("click", () => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  images[currentIndex].classList.add("active");
});


document.getElementById("getJoke").addEventListener("click", async () => {
  let response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
  let data = await response.json();
  document.getElementById("joke").innerText = data.joke;
});
