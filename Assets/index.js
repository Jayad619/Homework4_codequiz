// Target start button
const startButton = document.getElementById("start-btn");

//target banner section
const bannerSection = document.getElementById("banner")

//declare event handler function for start buttonclick
const handleStartButtonClick = (event) => {
  console.log("Start button clicked");
};

// add event listener to start button
startButton.addEventListener("click",handleStartButtonClick);