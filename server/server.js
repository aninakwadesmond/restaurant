require('dotenv').config({ path: '.env' });
const express = require('express');
const cors = require('cors');
const userRegister = require('./routes/users');
const { connectMongoose } = require('./utils/connectMongoose');
const cookieParser = require('cookie-parser');
const allowOrigins = ['http://localhost:5173', 'http://localhost:5174'];

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('origin not allowed access !'));
      }
    },
    credentials: true,
    methods: ['POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

const port = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectMongoose();
  } catch (error) {
    console.error(error?.mesage);
    process.exit(1);
  }
}

startServer();

app.use('/users', userRegister);

app.listen(port, () => console.log(`Listening to port: ${port}`));
