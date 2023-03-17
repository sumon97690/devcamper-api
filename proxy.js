const express = require('express');
const dotenv = require('dotenv');

//load env vars

dotenv.config({path: './config/config.env'});

const app = express();
const PORT = process.env.PORT || 5000;

app.listen( 
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );


///////////////////////////////////////////////////////////////////////////////////////////

const express = require('express');
const dotenv = require('dotenv');

//load env vars

dotenv.config({path: './config/config.env'});

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>hello from express</h1>');
})

const PORT = process.env.PORT || 5000;

app.listen( 
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );

///////////////////////////////////////////////////////////
//  creating routes response

const express = require('express');
const dotenv = require('dotenv');

//load env vars

dotenv.config({path: './config/config.env'});

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({success: true, data: {id: 1}})
})

const PORT = process.env.PORT || 5000;

app.listen( 
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );

    /////////////////////////////////////////////////////////////////////////

    // creating routes response

const express = require('express');
const dotenv = require('dotenv');

//load env vars

dotenv.config({path: './config/config.env'});

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({success: true, msg: 'show all bootcamp'})
});
app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({success: true, msg: `get bootcamp ${req.params.id}`})
})
app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({success: true, msg: 'create new bootcamp'})
});
app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`})
});
app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`})
});

const PORT = process.env.PORT || 5000;

app.listen( 
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );


    //////////////////////////////////////////////////////////////////////////

    // using the express router

    // it consists of two files Server.js and /routes/ootcamps.js

    // server.js

const express = require('express');
const dotenv = require('dotenv');

// route files
const bootcamps = require('./routes/bootcamps');

//load env vars

dotenv.config({path: './config/config.env'});

const app = express();

// Mount routers

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen( 
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );


    // /routes/bootcamps.js

    const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.status(200).json({success: true, msg: 'show all bootcamp'})
});
router.get('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `get bootcamp ${req.params.id}`})
})
router.post('/', (req, res) => {
    res.status(200).json({success: true, msg: 'create new bootcamp'})
});
router.put('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`})
});
router.delete('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`})
});

module.exports = router;


///////////////////////////////////////////////////////////////////////

// creating controller methods  
// server.js

const express = require('express');
const dotenv = require('dotenv');

// route files
const bootcamps = require('./routes/bootcamps');

//load env vars

dotenv.config({path: './config/config.env'});

const app = express();

// Mount routers

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen( 
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );

    // /routes/bootcamp.js

const express = require('express');
const {getBootcamps,getBootcamp,createBootcamp,updateBootcamp,deleteBootcamp } = require('../controllers/bootcamps');
const router = express.Router();

router.route('/').get(getBootcamps).post(createBootcamp);

router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);


module.exports = router;


// /controllers/bootcamps.js


// @desc     GET all bootcamps
// @route    GET /api/v1/bootcamps
// @access   public

exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'show all bootcamp'});
};

// @desc     GET single bootcamps
// @route    GET /api/v1/bootcamps/:id
// @access   public

exports.getBootcamp = (req, res, next) => {
   res.status(200).json({success: true, msg: 'show all bootcamp'})
};

// @desc     crete new bootcamp
// @route    POST /api/v1/bootcamps
// @access   private

exports.createBootcamp = (req, res, next) => {
   res.status(200).json({success: true, msg: 'create new bootcamp'})
};

// @desc     Update  bootcamp
// @route    PUT /api/v1/bootcamps/:id
// @access   private

exports.updateBootcamp = (req, res, next) => {
   res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`})
};

// @desc     Delete  bootcamp
// @route    DELETE /api/v1/bootcamps/:id
// @access   private

exports.deleteBootcamp = (req, res, next) => {
   res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`})
};


///////////////////////////////////////////////////////

// middleware

// server.js

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// route files
const bootcamps = require('./routes/bootcamps');

//load env vars

dotenv.config({path: './config/config.env'});

const app = express();


// Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}


// Mount routers

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen( 
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );

// ./middleware/logger.js

// @description     logs request to console

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next();
};

module.exports = logger

//////////////////////////////////////////////////////////////////////////////////////////////////

tut 4 
// update, create, post, put , delete , fetching bootcamps, get and get all bootcamps

const Bootcamp  = require('../models/Bootcamp');
// @desc     GET all bootcamps
// @route    GET /api/v1/bootcamps
// @access   public

exports.getBootcamps = async (req, res, next) => {
   try {
      const bootcamps = await Bootcamp.find();
      res.status(200).json({success: true, count: bootcamps.length, data: bootcamps});
   } catch (err) {
      res.status(400).json({success: false});
   }
   
};

// @desc     GET single bootcamps
// @route    GET /api/v1/bootcamps/:id
// @access   public

exports.getBootcamp = async (req, res, next) => {
   try {
      const bootcamp = await Bootcamp.findById(req.params.id);
      if (!bootcamp){
         return res.status(400).json({success: false});
      }
      res.status(200).json({success: true, data: bootcamp});
   } catch (err) {
      res.status(400).json({success: false});
   }
   
};

// @desc     crete new bootcamp
// @route    POST /api/v1/bootcamps
// @access   private

exports.createBootcamp = async (req, res, next) => {
   try {
      const bootcamp = await Bootcamp.create(req.body);

      res.status(201).json({
         success: true,
         data: bootcamp
      });
   } catch (err) {
      res.status(400).json({success: false})
   }
   
};

// @desc     Update  bootcamp
// @route    PUT /api/v1/bootcamps/:id
// @access   private

exports.updateBootcamp = async (req, res, next) => {

   try {
      const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new:true,
      runValidators: true
   });

   if(!bootcamp){
      return res.status(400).json({success: false});
   }

   res.status(200).json({success: true, data: bootcamp});
   } catch (error) {
       res.status(400).json({success: false});
   }
   
};

// @desc     Delete  bootcamp
// @route    DELETE /api/v1/bootcamps/:id
// @access   private

exports.deleteBootcamp = async (req, res, next) => {
   try {
      const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

   if(!bootcamp){
      return res.status(400).json({success: false});
   }

   res.status(200).json({success: true, data: {} });
   } catch (error) {
       res.status(400).json({success: false});
   }
   
};


