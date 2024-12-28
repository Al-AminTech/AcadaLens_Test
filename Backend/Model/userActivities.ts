import {usertype} from "./../Utility/types";
import {UserActivityProperties} from './../Utility/types'
import Pool from './../Servers/databaseServer'
import Jwt  from "jsonwebtoken";
import dotenv from 'dotenv'
import bcrypt from 'bcrypt';
import CustomError from "../Utility/CustomError";
dotenv.config({path: './config.env'})
class userActivityManager{
    private userProperties: UserActivityProperties;
    private token:string
    private payload: { name: string; email: string; password: string; phonenumber: number };

    constructor(payload:{ name: string; email: string; password: string; phonenumber: number }){
        
        this.token = userActivityManager.generateToken(payload);
        // this.password   = password;
        this.payload = payload; 
        this.userProperties = {
        token: this.token,
        // password: this.password,
        payload:payload
    };
    }
    private static generateToken(payload:object): string {
        return Jwt.sign((payload), process.env.SECRET_STR as string, { expiresIn: process.env.EXPIRES_IN });
    }

    private static async hashPassword(password:string, saltRounds:number):Promise<string>{
        return bcrypt.hash(password, saltRounds);
    }
    createduser = async():Promise<any>=>{
        const client = await Pool.connect(); 
        try {
                const hashedPassword = await userActivityManager.hashPassword((this.payload as any).password, 12);

                const query = `INSERT INTO users (name, email, password,phonenumber) VALUES ($1, $2, $3,$4) RETURNING *`;
            
                const result = await client.query(query, [
                    this.payload.name,
                    this.payload.email,
                    hashedPassword,
                    this.payload.phonenumber,]);

                const newUser = result.rows[0];

                delete newUser.password; 
        
                return newUser;
                

            } catch (error) {
                console.error('Error in user creation:', error);
                throw  new CustomError('Unable to create user', 400);

            }finally{
                client.release(); 

            }
        }
    
    logUserIN = async(name:string, emial:string)=>{

    }
    }

    export default userActivityManager;