// don't forget to include script.js in html code manually 

function changeImage() {
  if (
    document.getElementById("statue").src == "https://64.media.tumblr.com/d3b09b5f6555581b77a67f72a3b391c9/ff99ecb0a87ff343-e7/s640x960/9c56dd588123ebce2e7dc6dc22ea67f886327c0d.gifv"
  ) {
    document.getElementById("statue").src =
      "https://64.media.tumblr.com/f0f95547bf9c083e5048a062a060faae/tumblr_nwsqm0cYTY1rw87mto3_640.gif";
  }
}
function play() {
  var audio = new Audio(
    "https://static.wikia.nocookie.net/undertale/images/0/05/Memory_music.ogg"
  );
  audio.play();
}
