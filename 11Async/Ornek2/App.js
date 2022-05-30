  const  task1 = async ( )=>      {
  await  setTimeout(() => {
       console.log("Görev 1 bitti") 
    }, 1000);
    
}
 const  task2 = async ( )=>  {
 await   console.log("Görev 2 bitti")
}

const allTask = async ( )=>  {
await task1()
await  task2()
}
allTask()
 