const express = require('express');

const app = express();
const path = require('path');

let initial_path = path.join(__dirname, "public");


const PORT = process.env.PORT || 3500;

app.use(express.static(initial_path));



app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})


// const port = 3000;
// const ipAddress = "192.168.1.106";

app.listen(PORT, () => console.log(`Le serveur tourne sur ${PORT}`));

// app.listen(port, ipAddress, () => console.log(`Le serveur tourne sur ${PORT}`));
