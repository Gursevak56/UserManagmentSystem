const User = require('./../model/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {body,validationResult,errorFormatter} =require('express-validator');
const response = require('./../utils/httpResponseMessage');
const statuscode=require('./../utils/httpResponseCode');