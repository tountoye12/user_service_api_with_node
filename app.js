import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/user.js'

import {connectTodb, sequelize} from './db.js';


const PORT = 3000
const app = express();

app.use(bodyParser.json())

app.use('/users', userRouter);



app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`)
    await connectTodb();
    }
);