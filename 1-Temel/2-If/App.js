function GunYaz() {
var gun =  document.getElementById("gun").value
let   gunad =""
if (gun ==1) {
  gunad ="Pazartesi"
}
else if (gun == 2) {
  gunad ="Salı"
}
else if (gun == 3) {
  gunad ="Çarşamba"
}
else if (gun == 4) {
  gunad ="Perşembe"
}
else if (gun == 5) {
  gunad ="Cuma"
}
else if (gun == 6) {
  gunad ="Cumartesi"
}
else if (gun == 7) {
  gunad ="Pazar"
}
else {
  gunad = "Yanlış Gün"
}
document.getElementById("gunad").innerHTML = "Sonuc:" + gunad
}