export const registrationRequest = async (email, password, name, surname) => {
  return fetch(`https://loft-taxi.glitch.me/auth`, {
    method: "Post",
    headers: { "Content-Type": "applications/json" },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
      surname: surname,
    }),
  })
    .then((responce) => responce.json())
    .then((data) => data.success());
};
