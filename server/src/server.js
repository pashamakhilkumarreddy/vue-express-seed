const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const config = require('./config');

const app = express()
const PORT = config.server.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(helmet());
app.use(cors());
app.use(compression());

require('./routes')(app);

app.listen(PORT, () => {
  console.info(`Application is running on port: ${PORT}`);
});
