import express from 'express';

import bodyParser from 'body-parser';


import mealRoutes from './api/routes/meal.route';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send('The API is working');
});

app.use('/api/v1/meals', mealRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});