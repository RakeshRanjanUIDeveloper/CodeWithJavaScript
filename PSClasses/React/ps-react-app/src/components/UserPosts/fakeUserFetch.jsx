export const fakeUserFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://jsonplaceholder.typicode.com/users/1") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
              street: "Kulas Light",
              suite: "Apt. 556",
              city: "Gwenborough",
              zipcode: "92998-3874",
              geo: {
                lat: "-37.3159",
                lng: "81.1496",
              },
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
              name: "Romaguera-Crona",
              catchPhrase: "Multi-layered client-server neural-net",
              bs: "harness real-time e-markets",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "user not found",
        });
      }
    });
  });
};

export default fakeUserFetch;
