require('./config/configDB');
const cors = require("cors");
const morgan = require("morgan");

const fileUpload = require("express-fileupload")
const express = require('express');
const bodyParser = require('body-parser');
PORT = process.env.PORT || 2221

app.use(cors());

app.use(morgan("dev"));


const router = require('./routes/userRoute');
const app = express();
app.use(express.json());


app.use(express.urlencoded({extended:true}))
app.use(fileUpload({ 
    useTempFiles: true
}))


app.use('/api', router);



app.get('/', (req, res)=>{
    res.send('Welcome Message');
});

app.use("/uploaded-image", express.static(process.cwd() + "/uploads"));


app.listen(PORT, ()=>{
    console.log('The Server is listening on Port: ' + PORT)
});

