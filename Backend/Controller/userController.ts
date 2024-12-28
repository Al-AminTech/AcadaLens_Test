import Pool from './../Servers/databaseServer'
import loginvalidation from '../Model/LoginAuth'
import signupValidation from '../Model/signupAuth'
import userActivityManager from '../Model/userActivities.ts'
import CustomError from '../Utility/CustomError.ts'
import { Request, Response,NextFunction } from 'express';

const createUser = async(req:Request,res:Response, next:NextFunction):Promise<void>=>{
    try {
        const { error, value } = signupValidation.validate(req.body, { abortEarly: false });
        if(error){
            
            res.status(400).json({
                status: 'fail',
                message: error.details.reduce((acc: Record<string, string>, curr) => {
                    acc[curr.path[0] as string] = curr.message;
                    return acc;
                }, {})
            });
            
            return;
        }
        const { name, email, password, phonenumber } = req.body;

        const userManager = new userActivityManager({ name, email, password, phonenumber })
        
        const newUser = await userManager.createduser();

        res.status(200).json({
            Status:"Succesful",
            Message:"User Created Succesfully",
            data: { user: newUser },
        })

        
    }catch (error) {
        console.error('Error details:', error);
        throw new CustomError('Unable to create user', 500);
    }
}
const userController = {
    createUser,
};

export default userController;

