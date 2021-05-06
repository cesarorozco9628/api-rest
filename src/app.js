const express = require('express');
const app = express();
const logger = require('morgan');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swagger.json');

const actorsRoutes = require('./routes/actors.routes');
const directorsRoutes = require('./routes/directors.routes');

//Middleware
 app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
 app.use(logger('combined', {stream: fs.createWriteStream('./access.log', {flags: 'a'})}));
 app.use(express.json());

 app.get("/", (req, res) => res.json({"academlo-api": "1.0.0"}));


 app.use("/api/v1/", actorsRoutes);
 app.use("/api/v1/", directorsRoutes);

 app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

 module.exports = app ;