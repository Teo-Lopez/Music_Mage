window.onload = function() {
//let mainTheme = document.createElement("audio")
//mainTheme.src = "audio/mainTheme.wav"
//mainTheme.play()

  const startButton = document.getElementById("start")
  const introduction = document.getElementsByClassName("inicio")[0]
  startButton.onclick = function() {
    startButton.setAttribute("class", "hidden")
    introduction.setAttribute("class", "hidden")
    Game.init("myGame")}
}


