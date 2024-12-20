import express from 'express';

const Router = express.Router();

Router.route('').get(()=>{
    console.log('homepage')
})

export default Router;
