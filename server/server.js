const express = require('express');
const axios = require('axios');

const app = express();

async function authenticate(name, password) {
    const base = "https://xm-crm-react-exercise-server.herokuapp.com/login";
    const response = await axios.post(base, {
        name,
        password
    });
    return response.data.token;
}

app.get('/api/protected', async (req, res) => {
    const data = await authenticate("xm", "exercise");
    res.json(data);
});

async function getIngredients() {
    const apiUrl = 'https://xm-crm-react-exercise-server.herokuapp.com/ingredients';
    const token = await authenticate("xm", "exercise");
    return await axios.get(apiUrl, {
        headers: {
            'Authorization': token
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
}

app.get('/api/ingredients', async (request, response) => {
    const data = await getIngredients();
    response.json(data);
})

app.listen(5000, () => {
    console.log("Server started on port 5000")
})