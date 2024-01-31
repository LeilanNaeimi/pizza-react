//create input range
var vol = document.createElement("INPUT");
vol.setAttribute("type", "range");
vol.min = 0;
vol.max = 1;
vol.step = 0.01;
vol.value = 0.8;

////input range displayed
var range = document.getElementById("volumeRange");
range.appendChild(vol);

//volume range listen for input event
range.addEventListener("input", volumeChange);

//default audio volume set to vol.value
var masterVolume = document.querySelectorAll("audio");
masterVolume.volume = vol.value;

////default value of range displayed before volumeChange() state:
document.getElementById("currentVolume").innerHTML = vol.value;

//masterVolume queries all audio objects and changes individual .volume attributes similtaneously
function volumeChange() {
  document.getElementById("currentVolume").innerHTML = vol.value;
  var masterVolume = document.querySelectorAll("audio");
  var i = 0;
  for (i = 0; i < masterVolume.length; i++) {
    masterVolume[i].volume = vol.value;
  }
}

//begin jquery
$(document).ready(function () {
  $(".box").on("click", function (e) {
    var x = e.pageX;
    var y = e.pageY;
    var clickY = y - $(this).offset().top;
    var clickX = x - $(this).offset().left;

    var box = this;
    var setX = parseInt(clickX); //create integers
    var setY = parseInt(clickY);

    $(this).find("svg").remove(); //remove existing svg
    $(this).append(
      '<svg><circle cx="' +
        setX +
        '" cy="' +
        setY +
        '" r="' +
        0 +
        '"></circle></svg>'
    ); //create new svg

    var c = $(box).find("circle"); //box = this box
    c.animate(
      {
        r: $(box).outerWidth(),
      },
      {
        easing: "swing",
        duration: 200,
        step: function (val) {
          c.attr("r", val);
        },
      } //end properties
    ); //end animate
  }); //end svg append

  jQuery.fn.playSound = function () {
    return this.each(function () {
      this.currentTime = 0;
      this.play();
    });
  };

  $(".box").mousedown(function () {
    var sound = $(this).attr("data-id");
    console.log(sound);
    $('audio[data-id="' + sound + '"]').playSound();
  });

  $(".box").mouseup(function () {
    setTimeout(removeSVG, 300);
    function removeSVG() {
      $(".box").find("svg").fadeOut("150");
    }
  });
}); //jQuery
