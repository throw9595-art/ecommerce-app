async function solvePromise() {
   const promise = new Promise((resolve, reject) => {
      reject("The promise is rejected");
   });

   try {
      const result = await promise;
      console.log("Inside the try block.");
      console.log(result);
   } catch (err) {
      console.log("Inside the catch block.");
      console.log(err);
   }
}

solvePromise();