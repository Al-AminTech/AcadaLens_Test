import express from 'express';
import userController from './../Controller/userController'

const Router = express.Router();

Router.route('/signup').get(userController.createUser)

export default Router;
