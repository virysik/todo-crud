const doRequests = async (methodName, bodyData = null, todoID = null) => {
  let baseUrl = 'https://60b9e81d80400f00177b729f.mockapi.io/endpoint/todo/';

  if (methodName !== 'GET' && methodName !== 'POST') {
    baseUrl = baseUrl + todoID;
  }
  try {
    const request = await fetch(baseUrl, {
      method: methodName,
      headers: {
        'Content-Type': 'application/json',
      },
      body: bodyData ? JSON.stringify(bodyData) : null,
    });

    if (request.status === 200 || request.status === 201) {
      return request.json();
    }
  } catch (error) {
    console.log(error);
  }
};

export default doRequests;
