require('./config/configDB');
const router = require('./routes/userRoute');
// const routere = require('./routes/recordRoute')
const express = require('express');
PORT = process.env.PORT || 2221

const app = express();
app.use(express.json());
app.use('/api', router);

app.get('/', (req, res)=>{
    res.send('Welcome Message');
});



app.listen(PORT, ()=>{
    console.log('The Server is listening on Port: ' + PORT)
});