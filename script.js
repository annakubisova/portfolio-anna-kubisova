function toggleText() {
  var moreText = document.getElementById("more-text");
  var toggleButton = document.getElementById("toggle-button");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    toggleButton.textContent = "Less";
  } else {
    moreText.style.display = "none";
    toggleButton.textContent = "More";
  }
}
