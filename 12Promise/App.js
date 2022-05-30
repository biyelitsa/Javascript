function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }

  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 1000;
  
  // The producing code (this may take some time)
  
    if (x == 100) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  ); 
   
