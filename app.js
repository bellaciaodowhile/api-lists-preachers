import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routesPreachers from './routes/preachers.js';
import routesUsers from './routes/users.js';
import bodyParser from 'body-parser';
const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/preachers', routesPreachers);
app.use('/users', routesUsers);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=> {
        console.log(`Server in ${PORT}`)
    })
} catch (e) {
    console.log(`Error: ${e}`)
}

