import 'dotenv/config';
import express from 'express';

const app = express();

try {
    const PORT = process.env.PORT || 3000;
    app.listen(3000, ()=> {
        console.log(`Server in ${PORT}`)
    })
} catch (e) {
    console.log(`Error: ${e}`)
}

