import express from 'express'
import bodyParser from 'body-parser'

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    return res.send('The API is working');
});

app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})