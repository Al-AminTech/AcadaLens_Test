export interface usertype{
    id: number;
    name: string;
    email: string;
};
export interface CustomError extends Error{
    message: string;
    statusCode: number;
    isOperational: boolean;

}
export interface UserActivityProperties {
    token: string;
    password: string;
    payload:object
}
