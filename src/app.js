const express = require('express');
const app = express();
const logger = require('morgan');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swagger.json');
const helmet = require('helmet');
const cors = require('cors');

const actorsRoutes = require('./routes/actors.routes');
const directorsRoutes = require('./routes/directors.routes');
const usersRoutes = require('./routes/users.routes');

//Middleware
 app.use(helmet());
//  app.use(cors());
 app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
 app.use(logger('combined', {stream: fs.createWriteStream('./access.log', {flags: 'a'})}));
 app.use(express.json());

 app.get("/", (req, res) => res.json({"academlo-api": "1.0.0"}));


 app.use("/api/v1/", actorsRoutes);
 app.use("/api/v1/", directorsRoutes);
 app.use("/api/v1/", usersRoutes);

 app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

 module.exports = app ;