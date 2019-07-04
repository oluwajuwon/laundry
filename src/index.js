import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/v1';

const app = express();

const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.use('/api/v1', router);

module.exports = app;
