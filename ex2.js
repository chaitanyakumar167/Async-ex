let lastseen = new Date();
const blogs = [];

async function post() {
  let createPost1 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      updateLastUserActivityTime();
      let obj = { title: "Post1" };
      blogs.push(obj);
      resolve(obj);
    }, 3000);
  });

  let createPost2 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      updateLastUserActivityTime();
      let obj = { title: "Post2" };
      blogs.push(obj);
      resolve(obj);
    }, 3000);
  });

  let createPost3 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      updateLastUserActivityTime();
      let obj = { title: "Post3" };
      blogs.push(obj);
      resolve(obj);
    }, 3000);
  });

  const printPost = () => {
    return new Promise((resolve, reject) => {
      if (blogs.length > 0) {
        for (let i = 0; i < blogs.length; i++) {
          console.log(blogs[i].title);
        }
        resolve();
      }
    });
  };
  const deleteBlog = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (blogs.length > 0) {
          resolve(blogs.pop());
        } else {
          reject("ERROR");
        }
      }, 1000);
    });
  };
  printPost();
  await deleteBlog();
  printPost();
  console.log(lastseen);
}
post();
function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastseen = new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      resolve(lastseen);
    }, 1000);
  });
}
