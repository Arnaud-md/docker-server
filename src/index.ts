import express from "express";
import 'dotenv/config'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express();
app.use(cors())
app.use(bodyParser.json())

const port :number = parseInt(process.env.PORT as string)

app.get('/server/time', (req, res) => {
    const date = Date.now();
    console.log('date : ' + date);
    res.send({date})
})

app.get('/hello/:name', (req, res) => {
    //console.log('hello : ' + req.params.name);
    res.send("hello fsdfsfd "+req.params.name);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})