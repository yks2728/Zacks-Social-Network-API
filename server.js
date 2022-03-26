const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Zacks-Social-Network-API', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);


app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));