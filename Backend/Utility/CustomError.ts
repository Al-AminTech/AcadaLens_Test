import { CustomError as CustomErrorType} from "./types";

class CustomError extends Error implements CustomErrorType{
    public statusCode: number;
    public isOperational: boolean;
    constructor(message:string, statusCode:number) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default CustomError;
