
export async function createUser(payload) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(payload)
  };

  return fetch('http://localhost:3000/users', options)
    .then(response => response.json())
    .catch(error => console.log(error));
}