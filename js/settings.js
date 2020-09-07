let NameSetting = 0;


const NameRadios = document.name.selectname;
const input = document.PlayerName.player;


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

window.onload = function () {
  NameRadios[localStorage.getItem("NameSetting")].checked = true;

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