const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');


const app = express();
app.use(helmet());
app.use(express.json());


app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(rateLimit({ windowMs: 15*60*1000, max: 100 }));


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, maxPoolSize: 10 });


app.get('/healthz', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));
app.get('/ready', async (req, res) => res.json({ ready: mongoose.connection.readyState === 1 }));


app.use((err, req, res, next) => { console.error(err); res.status(500).json({ error: 'Internal Server Error' }); });


module.exports = app;