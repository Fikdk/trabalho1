  window.onload = function() {
    var audio = document.getElementById("bolha");
    audio.play();
  }

  window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}
