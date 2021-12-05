for (let i = 0; i < 3; i++) {
  document.querySelectorAll(".myBox")[i].addEventListener("click", function () {
    let text = this.innerHTML;

    document.querySelector("#title").innerHTML = text;

    switch (text) {
      case "Abbu":
        document.querySelector("#showimage").style.display = "inline-block";
        var audio = new Audio("sound/abbu.m4a");
        audio.play();

        break;
      case "Ammu ":
        var audio = new Audio("sound/ammu.m4a");
        audio.play();
        break;
      case "Zinia ":
        var audio = new Audio("sound/sound/zinia.m4a");
        audio.play();
        break;
      case "Pani ":
        var audio = new Audio("sound/sound/pani.m4a");
        audio.play();
        break;
      case "Suction ":
        var audio = new Audio("sound/sound/suction.m4a");
        audio.play();
        break;
      case "Khabar ":
        var audio = new Audio("sound/sound/Khabar.m4a");
        audio.play();
        break;
    }
  });
}
