export const _login = (id, pwd) => {
  return fetch('http://3.38.19.120/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({id: id, pwd: pwd}),
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};
