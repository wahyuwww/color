const tUbahWarna = document.getElementById("tUbahWarna");
tUbahWarna.onclick = function () {
  //   document.body.style.backgroundColor = "blue";
  //   document.body.setAttribute("class", "biru-muda");
  document.body.classList.toggle("biru-muda");
};

const tAcakWarna = document.createElement("button");
const tTextBaru = document.createTextNode("acak warna");
tAcakWarna.appendChild(tTextBaru);
tAcakWarna.setAttribute("type", "button");
tUbahWarna.after(tAcakWarna);
tAcakWarna.addEventListener("click", function () {
  // round untuk menghilangkan koma atau float
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");
// change bisa digeser"
// input tidak menunggu kursor dilepas beda dengan change
sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
});
sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
});
sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
});

document.body.addEventListener("mousemove", function (event) {
  // posisi disumbu X
  //   console.log(event.clientX);
  // ukuran browser
  //   console.log(window.innerWidth);
  const posX = Math.round((event.clientX / window.innerWidth) * 255);
  const posY = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + posX + "," + posY + ",100)";
});
