import axios from "axios";

//const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// const posts = [
//   {
//     id: 1,
//     title: "1번 타이틀",
//     body: "1번 바디",
//   },
//   {
//     id: 2,
//     title: "2번 타이틀",
//     body: "2번 바디",
//   },
//   {
//     id: 3,
//     title: "3번 타이틀",
//     body: "3번 바디",
//   },
//   {
//     id: 4,
//     title: "4번 타이틀",
//     body: "4번 바디",
//   },
// ];

// export const getPostById = async (id) => {
//   await sleep(500);
//   return posts.find((post) => post.id === id);
// };

// export const getPosts = async () => {
//   await sleep(500);
//   return posts;
// };

export const getPosts = async () => {
  const response = await axios.get("/posts");
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
};
