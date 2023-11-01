import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import database from './utils/database';

dotenv.config();

const app = express();
const corsOptions = {
  exposedHeaders: ['Authorization'],
};

app.use(express.json());
app.use(cors(corsOptions));

app.listen(process.env.PORT, () => {
  routes(app);
  database();
  console.log(`✅ Server is up and running on port ${process.env.PORT}`);
});
