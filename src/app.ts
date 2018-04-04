import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import * as mongoose from 'mongoose';
import * as path from 'path';

import * as config from './config/db';

const app = express();
mongoose.connect(config.database, (err) => {
  if (err) {
    console.log('Could NOT connect to database: ', err);
  } else {
    console.log('Connected to database: ' + config.database);
  }
});

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});
