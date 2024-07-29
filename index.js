const express = require("express")
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connectdb = require("./DB/Db");
const { Router } = require("./Routes/Routes");
var cookieParser = require('cookie-parser')

app.use(cors());

app.use(bodyParser.json());
app.use(Router)
app.use(cookieParser())

const port = 4000;


app.get('/', (req, res) => {
    res.send('Welcome to EliteEmart')
})

connectdb().then( () => {
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
});
