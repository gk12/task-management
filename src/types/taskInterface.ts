import { Document } from 'mongoose';
export interface Task1 extends Document{
    task:string;
    phone:number;
    address:string
    newtask:string;
}
export interface Db{
    PORT:number
}