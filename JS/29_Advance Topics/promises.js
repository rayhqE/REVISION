const promiseOne = new Promise((resolve, reject) => {
  //Do an async task
  //DB calls,cryptography,network
  setTimeout(() => {
    console.log("Async Task Done");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async Task 2 Resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "ray_hq3", email: "ray@example.com" });
  }, 1000);
});
promiseThree.then((users) => {
  console.log(users);
  console.log(users.email);
  console.log(users.userName);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "hyperEdge_3", password: "123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript41", password: "890" });
    } else {
      reject("JS went Wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  //   const response = await promiseFive;//this syntax didn't handle errors gracefully so thats why we wrapped it in a try-catch Block.
  //   console.log(response);
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();
//ANOTHER WAY TO DO THE SAME TASK WITH ".THEN" & ".CATCH"

fetch("https://api.github.com/users/rayhqE")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//REMINDER(FOR-ME):TRY-CATCH IS USED WITH ASYNC-AWAIT....& (".THEN" & ".CATCH") IS USED WITH PROMISES
