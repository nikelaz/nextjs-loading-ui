const express = require('express');
const moviesController = require('./controllers/movies');
const path = require('path');

class Application {
  static app = express();

  static initializeControllers() {
    this.app.use('/movies', moviesController);
    this.app.use('/static', express.static(path.join(__dirname, '../data')));
  }

  static init(port = 3000) {
    this.initializeControllers();
    this.app.listen(port);
    console.log(`Listening on port: ${port}`);
  }
}

module.exports = Application;
