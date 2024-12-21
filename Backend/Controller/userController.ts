import Pool from './../Servers/databaseServer'
import loginvalidation from '../Model/LoginAuth'
import signupValidation from '../Model/signupAuth'
import userActivityManager from '../Model/userActivities.ts'
import { Request, Response } from 'express';

const createUser = async(req:Request,res:Response)=>{
    const userManager = new userActivityManager();

    const user = await userManager.createduser('ola', 'ewiefnufndf')

    res.status(200).json({
        message: "Users fetched successfully",
        user
    })
}
const userController = {
    createUser,
};

export default userController;

