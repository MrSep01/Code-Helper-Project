const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');



// Path: controllers/homeRoutes%20