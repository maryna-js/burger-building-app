const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

async function authenticate(name, password) {
  const base = "https://xm-crm-react-exercise-server.herokuapp.com/login";
  const response = await axios.post(base, {
    name,
    password,
  });
  return response.data.token;
}

async function getIngredients() {
  const apiUrl =
    "https://xm-crm-react-exercise-server.herokuapp.com/ingredients";
  const token = await authenticate("xm", "exercise");
  return await axios
    .get(apiUrl, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

app.get("/api/protected", async (req, res) => {
  const data = await authenticate("xm", "exercise");
  res.json(data);
});

app.get("/api/ingredients", async (request, response) => {
  const data = await getIngredients();
  response.json(data);
});

const corsOrigin = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOrigin));

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
