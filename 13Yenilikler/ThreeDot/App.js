let x= [10,20,30]
console.log(x)
x=  [...x , 50]
console.log(x)
 
let a = [10,20,30,40]
a= [...a , a.filter(a=> a<20)]
console.log(a)

akucuk20 = a.filter(x=> x<30)
console.log(akucuk20)

bos = [];
console.log(bos)
bos1 = {"id" :1, "ad":"Şamil"}
console.log(bos1)
ogrenciler = [
    {"id" :1, "ad":"Şamil"},
    {"id" :2, "ad":"Kamil"}
]
yogrenci = {"id:":3, "ad":"Ahmet"}
ogrenciler = [...ogrenciler,yogrenci]
console.log(ogrenciler)
