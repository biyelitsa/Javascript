function cevir(tx) {
    return  Number(document.getElementById(tx).value) 
}

function topla( ) {
 sonuc =    cevir("s1") + cevir("s2")
document.getElementById("sonuc").innerHTML = sonuc;
}

const  cikar = ( ) =>  document.getElementById("sonuc").innerHTML =  cevir("s1") - cevir("s2")
   
function carp( ) {
sonuc =    cevir("s1") * cevir("s2")
document.getElementById("sonuc").innerHTML = sonuc;
}
function bol( ) {
sonuc =    cevir("s1") / cevir("s2")
document.getElementById("sonuc").innerHTML = sonuc;
}