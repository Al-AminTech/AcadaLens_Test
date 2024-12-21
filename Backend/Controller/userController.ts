import Pool from './../Servers/databaseServer'
import loginvalidation from '../Model/LoginAuth'
import signupValidation from '../Model/signupAuth'
import userActivityManager from '../Model/userActivities.ts'
import { Request, Response } from 'express';

const createUser = async(res:Request,req:Response)=>{
    const userManager = new userActivityManager();

    const user = await userManager.createduser('ola', 'ewiefnufndf')

    console.log(user)
}
const userController = {
    createUser,
};

export default userController;

