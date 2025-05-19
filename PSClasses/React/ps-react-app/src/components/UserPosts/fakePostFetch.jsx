export const fakePostFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://jsonplaceholder.typicode.com/posts/1") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            userId: 1,
            id: 1,
            title:
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          },
        });
      } else {
        reject({
          status: 404,
          message: "Post not found",
        });
      }
    }, 2000);
  });
};
