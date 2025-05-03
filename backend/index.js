const express = require('express');
const cors = require('cors');
const tasksRouter = require('./src/routes/taskRoutes');
require('dotenv').config();

const app = express();
app.use(express.static('public'));


app.use(cors());
app.use(express.json());

app.use('/tasks', tasksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
