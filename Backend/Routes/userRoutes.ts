import express from 'express';

const Router = express.Router();

Router.route('/user').get(()=>{
    console.log('user homepage')
})

export default Router;
