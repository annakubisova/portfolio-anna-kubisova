function toggleText() {
  // Get the element that contains the additional text
  var moreText = document.getElementById("more-text");
  // Get the button element that was clicked
  var toggleButton = document.getElementById("toggle-button");

  if (moreText.style.display === "none") {
    // Checks if the additional text is currently hidden
    moreText.style.display = "inline"; // Hidden text, it makes visible
    toggleButton.textContent = "Less"; // Button changes text to "Less" to indicate that clicking it will hide the text
  } else {
    moreText.style.display = "none"; // If the text is visible, hide it
    toggleButton.textContent = "More"; // Change the button text to "More" to indicate that clicking it will show the text
  }
}

// Initial setup to ensure the "more-text" element is hidden when the page loads
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("more-text").style.display = "none";
});

// Used ChatGPT as help within explaining my code comprehensively: https://chatgpt.com/c/b1e721fc-0e7c-420a-8c11-c0c35b1f9d7f
