const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/config');

// Load environment variables
dotenv.config();

const app = express();

// Allowed origins
const allowedOrigins = [
  'http://localhost:3000', // Local development
  'https://nysbeam-website.vercel.app', // Production on Vercel
];

// CORS Configuration
app.use(cors({
  origin: function(origin, callback){
    // Allow requests with no origin (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true); 
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());

// Import Routes
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);

// Root Endpoint
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Error Handling for Undefined Routes
app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
});

// Global Error Handler
app.use((err, req, res, next) => {
    res.status(res.statusCode === 200 ? 500 : res.statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

// Sync Database and Start Server
const PORT = process.env.PORT || 5001;
sequelize.sync()
    .then(() => {
        console.log('Database synced successfully.');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.log('Failed to sync database:', err);
    });