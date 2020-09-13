let NameSetting = 0;
let LayoutSetting = 0;
let highlightsetting = 0;

const NameRadios = document.name.selectname;
const LayoutRadios = document.name.layout;
const input = document.PlayerName.player;
const highlight = document.highlight.highlightcheckbox
const playercolor = document.highlight.playercolor

highlight.addEventListener('change', ToHighlight);
input.addEventListener('change', updateName);
playercolor.addEventListener('change', changePlayercolor);

function ToHighlight() {
  if (this.checked) {
    highlightsetting = 1;
  }
  else {
    highlightsetting = 0;
  };
  localStorage.setItem("HighlightSetting", highlightsetting)
  changePlayercolor ();
}

function changePlayercolor () {
  localStorage.setItem("PlayerColor", playercolor.value);

  if (highlightsetting == 1) {
  playercardcolor = document.getElementById("table");
  playercardcolor.style = `background-color:${playercolor.value}`
  }
}

function updateName (e) {
  localStorage.setItem("PlayerName", e.target.value);
  console.log(e.target.value)
}
  


for (let i = 0; i < NameRadios.length; i++) {
  NameRadios[i].onclick = function () {
    if (this !== NameSetting) {
      NameSetting = this;
    }
      NameSetting = this.value;
      localStorage.setItem("NameSetting", NameSetting);
      ChangeName(NameSetting);
      }
}

for (let i = 0; i < LayoutRadios.length; i++) {
  LayoutRadios[i].onclick = function () {
    if (this !== LayoutSetting) {
      LayoutSetting = this;
    }
    LayoutSetting = this.value;
      localStorage.setItem("LayoutSetting", LayoutSetting);
      }
}

window.onload = function () {
  NameRadios[localStorage.getItem("NameSetting")].checked = true;
  LayoutRadios[localStorage.getItem("LayoutSetting")].checked = true;

  let LocalPlayer = localStorage.getItem("PlayerName");

  if (LocalPlayer == null) {
    input.value = "YOU";
  }
  else {
    input.value = LocalPlayer;
  }
}

function ChangeName (Setting) {
  const name = document.getElementById("blur");

  if (Setting == 0) {
    name.textContent = "Forgotten Freedom";
  }
  if (Setting == 1) {
    name.textContent = "F. F.";
  }
  if (Setting == 2) {
    name.textContent = "Forgotten F.";
  }
}