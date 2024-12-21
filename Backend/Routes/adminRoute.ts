import express from 'express';

const Router = express.Router();

Router.route('admin').get(()=>{
    console.log('admin homepage')
})

export default Router;
