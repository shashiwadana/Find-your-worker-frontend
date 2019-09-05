export interface WorkerProfile {
   
    Rate:number;
    FirstName:String;
    LastName:String;
    BaseLocation:string;
    ContactNumber:string;
    userEmail:string;
    status:number;
     }
 
     export interface WorkerProfileResponse {
         status: number;
         result: Array<Array<WorkerProfile>>;
         message: string;
     }