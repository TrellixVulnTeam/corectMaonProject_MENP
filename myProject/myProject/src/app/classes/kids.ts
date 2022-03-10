import { Classes } from "./Classes";
import { KidsAttendance } from "./KidsAttendance";
import { User } from "./Users";

export interface Kids{
    KidId:number;
    NameKids:string;
    TzKid:string;
    AgeKids:number;
    ClassId:number;
    DateBorn:Date;
    ParentId:number;

    Class:Classes;
    UserParent:User;
    KidsAttendance:KidsAttendance[];

}