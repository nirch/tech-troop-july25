// function simplePromise() {
//   return new Promise((resolve, reject) => {
//     // write your code...
//     resolve();
//     reject();
//   });
// }

// const coinFlip = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const random = Math.random();
//     if (random > 0.5) {
//       resolve("Heads");
//     } else {
//       reject("Tails");
//     }
//   }, 2000)
// });

// Creating an Asynchronous function that returns a promise
function coinFlip() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random > 0.5) {
        resolve("Heads");
      } else {
        reject("Tails");
      }
    }, 2000);
  });
}

// function getMovies(actorName, callback) {
//   // call imdb api to get all movies of actorName
//   // when code if finished callback(movies)
// }

// function getMovies(actorName, callback) {
//   return new Promise((resolve, reject) => {
//     // call imdb api to get all movies of actorName
//     if (data is ok) {
//       resolve (movies)
//     } else {
//       reject (error)
//     }
//     // when code if finished callback(movies)
//   })
// }

// Consuming a function that returns a promise
coinFlip()
  .then((data) => {
    console.log(data);
    //  return new Promise(...)
  })
  .catch((data) => {
    console.log(data);
  });

console.log("eof");

// Here the callback will be invoked once the promise is fulfilled (resolved)

// Simulating a user registration flow



function validateEmail(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email.includes("@")) {
        resolve(email);
      } else {
        reject("Invalid email format");
      }
    }, 500);
  });
}

function createAccount(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userId = Math.floor(Math.random() * 1000);
      resolve({ email, userId, status: "created" });
    }, 1000);
  });
}

function sendWelcomeEmail(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Welcome email sent to ${user.email}`);
    }, 800);
  });
}



validateEmail('user@bla.com').then(email => {
  createAccount(email);
}).then(user => {
  return sendWelcomeEmail(user);
}).then(message => {
  console.log(message);
}).catch(err => {
  console.log(error);
})

Promise.resolve(5)              
  .then(num => num * 2)                     // A promise is implicitly returned (always from a then function) - and immediately resolved with the value 10
  .then(num => num + 3)                     // A promise is implicitly returned (always from a then function) - and immediately resolved with the value 13
  .then(result => console.log(result));     // 13




function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('first'), 2000);
  })
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('second'), 1000);
  })
}

Promise.all([promise1(), promise2()]).then(results => {
  console.log(results);
}).catch(error => {

})
