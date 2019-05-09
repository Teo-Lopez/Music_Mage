window.onload = function() {
  const sound = new Audio('audio/button.mp3')
  const startButton = document.getElementById("start")
  const introduction = document.getElementsByClassName("inicio")[0]
  startButton.onclick = function() {
    sound.play()
    startButton.setAttribute("class", "hidden")
    introduction.setAttribute("class", "hidden")
    Game.init("myGame")}
}




 
