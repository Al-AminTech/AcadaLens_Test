import Pool from './../Servers/databaseServer'
import loginvalidation from '../Model/LoginAuth'
import signupValidation from '../Model/signupAuth'
import userActivityManager from '../Model/userActivities.ts'
import { Request, Response } from 'express';

const createUser = async(req:Request,res:Response)=>{

    res.status(200).json({
        message: "Users fetched successfully",
    })
}
const userController = {
    createUser,
};

export default userController;

