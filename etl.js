const axios = require('axios');

(async () => {
  const { data } = await axios.post('http://localhost:3000/auth/login', {
    username: 'username3',
    password: 'password',
  });
  console.log(data);
  const { token } = data;
  console.log(token);
  try {
    const result = await axios.get('http://localhost:3000/auth', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
