import {usertype} from "./../Utility/types";
import Pool from './../Servers/databaseServer'

class userActivityManager{
    createduser = async(name:string, email:string):Promise<usertype>=>{
        const client = await Pool.connect(); 
        try {
                const query = 'SELECT * FROM boats'

                const result = await client.query(query)
                
                const newUser: any = result.rows;

                return newUser

            } catch (error) {
                throw new Error('Failed to create user');

            }finally{
                client.release(); 

            }
        }
    }

    export default userActivityManager;