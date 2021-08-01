export const login = (id, pwd) => {
  return fetch('https://checku.site/login', {
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
  return fetch('https://checku.site/onload', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
  })
    .then(response => {
      return response.text();
    })
    .catch(error => {
      throw error;
    });
};

export const gradeAll = stdNo => {
  return fetch('https://checku.site/grade/all', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({strStdNo: stdNo}),
  })
    .then(response => {
      return response.text();
    })
    .catch(error => {
      throw error;
    });
};
