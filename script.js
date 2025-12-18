// Collect all gallery items
const allGalleryItems = document.querySelectorAll(".gallery-item, .hero-image")
const lightbox = document.getElementById("lightbox")
const lightboxImage = document.getElementById("lightbox-image")
const lightboxClose = document.querySelector(".lightbox-close")
const lightboxPrev = document.querySelector(".lightbox-prev")
const lightboxNext = document.querySelector(".lightbox-next")
const lightboxCurrent = document.getElementById("lightbox-current")
const lightboxTotal = document.getElementById("lightbox-total")

let currentIndex = 0
let allImages = []

// Initialize: gather all images with their sources
function initGallery() {
  allImages = Array.from(allGalleryItems).map((item) => {
    const img = item.querySelector("img")
    return {
      src: img.src,
      alt: img.alt,
    }
  })

  lightboxTotal.textContent = allImages.length
}

// Open lightbox
function openLightbox(index) {
  currentIndex = index
  updateLightboxImage()
  lightbox.classList.add("active")
  document.body.style.overflow = "hidden"
}

// Close lightbox
function closeLightbox() {
  lightbox.classList.remove("active")
  document.body.style.overflow = ""
}

// Update image in lightbox
function updateLightboxImage() {
  if (allImages[currentIndex]) {
    lightboxImage.src = allImages[currentIndex].src
    lightboxImage.alt = allImages[currentIndex].alt
    lightboxCurrent.textContent = currentIndex + 1
  }
}

// Navigate to previous image
function showPrevious() {
  currentIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1
  updateLightboxImage()
}

// Navigate to next image
function showNext() {
  currentIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1
  updateLightboxImage()
}

// Event listeners
allGalleryItems.forEach((item, index) => {
  item.addEventListener("click", () => openLightbox(index))
})

lightboxClose.addEventListener("click", closeLightbox)
lightboxPrev.addEventListener("click", showPrevious)
lightboxNext.addEventListener("click", showNext)

// Close on background click
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox()
  }
})

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return

  if (e.key === "Escape") closeLightbox()
  if (e.key === "ArrowLeft") showPrevious()
  if (e.key === "ArrowRight") showNext()
})

// Initialize on page load
initGallery()
