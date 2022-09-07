export const serverLogin = async (email, password) => {
  return fetch('https://loft-taxi.glitch.me/auth?username=test@test.com&password=123123').then(res => res.json()).then(data => data.success)
};
