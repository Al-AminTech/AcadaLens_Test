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
    private password: string ;
    private payload: { name: string; email: string };
    constructor(payload:{ name: string; email: string },  password:string){
        
        this.token = userActivityManager.generateToken(payload);
        this.password   = password;
        this.payload = payload; 
        this.userProperties = {
        token: this.token,
        password: this.password,
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
                const hashedPassword = await userActivityManager.hashPassword(this.password, 12);

                const query = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`;

            
                const result = await client.query(query, [(this.payload as any).name, (this.payload as any).email, hashedPassword]);

                return result
                

            } catch (error) {
                return  new CustomError('Unable to create user', 400);

            }finally{
                client.release(); 

            }
        }
    
    logUserIN = async(name:string, emial:string)=>{

    }
    }

    export default userActivityManager;