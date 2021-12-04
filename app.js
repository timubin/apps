for (let i = 0; i < 3; i++) {
  document.querySelectorAll(".myBox")[i].addEventListener("click", function () {
    let text = this.innerHTML;

    console.log(text);
    document.querySelector("#title").innerHTML = text;

    switch (text) {
      case "Abbu":
        var audio = new Audio("sound/abbu.m4a");
        audio.play();
        break;
      case "Ma ":
        var audio = new Audio("sound/ammu.m4a");
        audio.play();
        break;
      case "Zinia ":
        var audio = new Audio("sound/sound/zinia.m4a");
        audio.play();
        break;
    }
  });
}
