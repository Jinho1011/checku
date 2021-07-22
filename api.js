export const login = (id, pwd) => {
  return fetch('http://3.38.19.120/login', {
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

export const onload = () => {
  return fetch('http://3.38.19.120/onload', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error;
    });
};
