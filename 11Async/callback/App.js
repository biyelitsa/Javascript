  function task1( callback,cb) {
    setTimeout(() => {
       console.log("Görev 1 bitti") 
   

    }, 1000);
     callback() // task2 1 mls  tas1 arka plamda çalıyor . önce taks2 
                // sonra task çalışır 
    cb()
}
 function task2( ) {
   console.log("Görev 2 bitti")
}
function task3( ) {
  console.log("Görev 3 bitti")
}

task1(task2,task3)
 