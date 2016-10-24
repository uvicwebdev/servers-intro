let express = require('express');
let bodyParser = require('body-parser');


let app = express();
const PORT = 3000;

let db = {};

app.use(bodyParser.urlencoded({ extended: false })); // setting for body parser
app.use(bodyParser.json())              // for parsing json from post bodies

app.get('/', (req, res) => {
    res.send('index!');
});

app.get('/:username', (req, res) => {
    let username = req.params.username;
    if (username in db)
        return res.json(db[username])
    else
        return res.status(404).send("User not found")
});

app.post('/:username/update', (req, res) => {
    let username = req.params.username;
    console.log(req.body);
    db[username] = req.body;
    console.log("db", db)
    return res.status(200).send("Updated " + username);  
})

app.listen(PORT, () => {
    console.log("Listening on " + PORT);
});