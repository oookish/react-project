export const authRequest = async (email, password) => {
  return fetch(`https://loft-taxi.glitch.me/auth`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((responce) => responce.json())
    .then((data) => data.success);
};
