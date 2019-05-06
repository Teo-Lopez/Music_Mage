window.onload = function() {
let mainTheme = document.createElement("audio")
mainTheme.src = "audio/mainTheme.wav"
mainTheme.play()

  const startButton = document.getElementById("start")
  startButton.onclick = function() {
    startButton.setAttribute("class", "hidden")
    Game.init("myGame")}
}