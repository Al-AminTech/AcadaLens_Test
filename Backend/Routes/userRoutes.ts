import express from 'express';
import userController from '../Controller/userController';

const Router = express.Router();

Router.route('').get(()=>{
    console.log('user')
})
Router.route('/sighup').post(userController.createUser)

export default Router;
