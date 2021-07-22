export const login = (id, pwd) => {
  return fetch('http://api.checku.site/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({id: id, pwd: pwd}),
  })
    .then(response => {
      return response.text();
    })
    .catch(error => {
      throw error;
    });
};
