const express = require('express');
const app = express();
const logger = require('morgan');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swagger.json');
const helmet = require('helmet');
const cors = require('cors');
const multer = require('multer');
const mimetype = require('mime-types');

const actorsRoutes = require('./routes/actors.routes');
const directorsRoutes = require('./routes/directors.routes');
const usersRoutes = require('./routes/users.routes');
const loginRoutes = require('./routes/login.routes');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
     if(file.fieldname === 'actors'){
      cb(null, "./src/uploads/actors");
     }if(file.fieldname === 'directors'){
      cb(null, "./src/uploads/directors")
     }
  },
  filename: (req, file, cb) => {
      const ext = mimetype.extension(file.mimetype);
      if(ext !== 'pdf'){
          cb(null, `${file.fieldname}${Date.now()}.${ext}`)
      }else{
          const fileError = new Error("El formato no es aceptado por el servidor");
          cb(fileError, null);
      }
  }
});

//Almacen personalizado con un tamaño limite de 1mb por archivo
const upload = multer({storage: storage, limits: {fileSize: 1000000}});


//Middleware
 app.use(express.json());
 app.use(helmet());
 app.use(cors());
 app.use(express.urlencoded({extended:false}));
 app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
 app.use(logger('combined', {stream: fs.createWriteStream('./access.log', {flags: 'a'})}));
 

 app.get("/", (req, res) => res.json({"academlo-api": "1.0.0"}));
 app.use("/api/v1/", actorsRoutes);
 app.use("/api/v1/", directorsRoutes);
 app.use("/api/v1/", usersRoutes);
 app.use("/api/v1/", loginRoutes);
 app.post("/api/v1/actors/gallery", upload.single('actors'),(req, res) => {
    try{
        res.send(req.file);
    }catch(error){
        res.status(400).json({message: error.message});
    }
 });

 app.post("/api/v1/directors/gallery", upload.single('directors'),(req, res) => {
  try{
      res.send(req.file);
  }catch(error){
      res.status(400).json({message: error.message});
  }
}); 

 app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send('Something broke!');
  });

 module.exports = app ;