const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/config');
const compression = require('compression');

dotenv.config();

const app = express();

const allowedOrigins = [
  'http://localhost:3000', 
  'https://nysbeam-website.vercel.app', 
  'https://nysbeam-website-production.up.railway.app', 
];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(!allowedOrigins.includes(origin)){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true); 
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
  credentials: true,
}));

app.use(compression());
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');
const eventRegistrationRoutes = require('./routes/eventRegistrationRoutes'); 
const cacheMiddleware = require('./middleware/cacheMiddleware');

app.use('/api/users', userRoutes);
app.use('/api/projects', cacheMiddleware, projectRoutes);
app.use('/api/newsletter', cacheMiddleware, newsletterRoutes);
app.use('/api/event-registrations', eventRegistrationRoutes); 

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
});

app.use((err, req, res, next) => {
    res.status(res.statusCode === 200 ? 500 : res.statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

const PORT = process.env.PORT || 5001;
sequelize.sync()
    .then(() => {
        console.log('Database synced successfully.');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.log('Failed to sync database:', err);
    });