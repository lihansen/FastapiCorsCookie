const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const htmlContent = `
<!DOCTYPE html>
<html>

<head>
    <title>Cookie Test</title>
</head>

<body>
    <h1>Cookie Test</h1>
    <button id="setcookie">Set Cookie</button>
</body>
<script>
    document.getElementById('setcookie').addEventListener('click', function () {
        fetch('http://localhost:8000/setcookie', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8000',
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
</script>

</html>`;
    res.send(htmlContent);
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});