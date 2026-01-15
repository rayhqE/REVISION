// // user = {};

// // const { fname= "rayyan", age=32, city="patna" } = user;
// // console.log(age);

// const nums = [1, 2, 3, 4, 5];
// for (const num of nums) {
//   if (num === 3) {
//     continue;
//   }
//   //   console.log(num);
// }

// const greetings = "hello world";
// for (const greet of greetings) {
//   //   if (greet === " ") continue;
//   //   console.log(greet);
// }

// const user = {
//   js: "javascript",
//   py: "python",
//   rb: "ruby",
// };

// for (const key in user) {
//   //   console.log(user[key]);
// }

// const myCoding = [
//   {
//     langaugeName: "javascript",
//     langaugeFileName: "js",
//   },
//   {
//     langaugeName: "python",
//     langaugeFileName: "py",
//   },
//   {
//     langaugeName: "java",
//     langaugeFileName: "java",
//   },
// ];
// // myCoding.forEach((item) =>
// //   console.log(`${item.langaugeName} & ${item.langaugeFileName}`)
// // )

// const shoppingCart = [
//   {
//     courseName: "js Course",
//     price: 999,
//   },
//   {
//     courseName: "python Course",
//     price: 999,
//   },
//   {
//     courseName: "mobile dev Course",
//     price: 999,
//   },
//   {
//     courseName: "data science  Course",
//     price: 999,
//   },
// ];

// const priceTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);
// console.log(priceTotal);

/*Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function*/
// const arr = ["rayyan", "cat", "home", "safetyFirst"];
// const findLongestWord = (arr) => {
//   return arr.reduce((acc, item) => acc + Math.max(item[i]));
// };

// function outer() {
//   function inner() {
//     return `Inner function called`;
//   }
//   return inner();
// }
// console.log(outer());

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve("DATA Fetched Succesfully");
//       reject("Error fetching Data");
//     }, 3000);
//   });
// };
// fetchData()
//   .then((data) => {
//     // return (data = "121 Data");
//     return data.toLowerCase();
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// async function fetchAllData() {
//   try {
//     let data = (await fetchData()).toLowerCase();
//     console.log(data);
//   } catch (error) {
//     console.log(error.toLowerCase());
//   }
// }
// fetchAllData();

// function fetchPostData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Post Data Fetched");
//     }, 2000);
//   });
// }
// function fetchCommentData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Comment Data Fetched");
//     }, 3000);
//   });
// }

// async function getBlogData() {
//   try {
//     console.log("Fetching Blog data....");
//     // const postData = await fetchPostData();
//     // const commentData = await fetchCommentData();
//     const [postData, commentData] = await Promise.all([
//       fetchPostData(),
//       fetchCommentData(),
//     ]);
//     console.log(postData);
//     console.log(commentData);
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//   }
// }
// getBlogData();

// async function getUserData(userId) {
//   // Write your code here
//   try {
//     // Simulated API calls
//   const fetchProfile = id => new Promise(resolve =>
//     setTimeout(() => resolve({ id, name: "John" }), 100));
//   const fetchPosts = id => new Promise(resolve =>
//     setTimeout(() => resolve([{ id: 1, title: "Post 1" }]), 100));
//   const fetchComments = postId => new Promise(resolve =>
//     setTimeout(() => resolve([{ id: 1, text: "Comment 1" }]), 100));
//     const user = await fetchProfile(userId)
//   } catch (error) {

//   }

// }

/*
   Create an async function that simulates fetching user data:
      1. First fetch user profile (simulate delay)
      2. Then fetch user's posts (simulate delay)
      3. Finally fetch post comments (simulate delay)
      
      Handle errors appropriately using try/catch.
      
      Example:
      getUserData(1).then(data => console.log(data))
      // Should return { user: {...}, posts: [...], comments: [...] }


      async function getUserData(userId) {
  // Simulated API calls
  const fetchProfile = id => new Promise(resolve => 
    setTimeout(() => resolve({ id, name: "John" }), 100));
  const fetchPosts = id => new Promise(resolve => 
    setTimeout(() => resolve([{ id: 1, title: "Post 1" }]), 100));
  const fetchComments = postId => new Promise(resolve => 
    setTimeout(() => resolve([{ id: 1, text: "Comment 1" }]), 100));

  // Write your code here
}
*/
// Simulated API calls
function fetchProfile(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id, name: "John" });
    }, 2000);
  });
}
function fetchPost(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ id: 1, title: "Post 1" }]);
    });
  });
}

function fetchComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ id: 1, title: "Post 1 " }]);
    });
  });
}
async function getUserData(userId) {
  try {
    const user = await fetchProfile(userId);
    const post = await fetchPost(user.id);
    const comment = await fetchComments(post[0].id);
    return { user, post, comment };
  } catch (error) {
    console.error("Error Fetching Data: ", error);
  }
}
getUserData(1).then(data => console.log(data))
