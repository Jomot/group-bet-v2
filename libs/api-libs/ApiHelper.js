async function checkStatusCode(response) {
  const status = await response.status;

  if (status !== 200) {
    throw new Error(result);
  }
}

async function sendApiRequest(url, options) {
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    await checkStatusCode(response);

    return result;
  } catch (error) {
    console.error(error);
  }
}

export default sendApiRequest;
