async function postJSON(data) {
  try {
    const response = await fetch("cursojs.test/js/datos.json", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const data = { username: "example" };
postJSON(data);

{
  {
    postJSON(data);
    console.log(data);
  }
}
