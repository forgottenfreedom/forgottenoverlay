let NameSetting = 0;
let LayoutSetting = 0;

const NameRadios = document.name.selectname;
const LayoutRadios = document.name.layout;
const input = document.PlayerName.player;
const highlight = document.highlight.highlightcheckbox

highlight.addEventListener('change', ToHighlight);

function ToHighlight() {
  const name = document.getElementById('blur');
  if (this.checked) {
    name.className = 'noblurplayer';
  }
  else {
    name.className = 'noblur';
  };
}

input.addEventListener('change', updateName);

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