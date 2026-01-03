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
