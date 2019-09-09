export interface WorkerModel {
    workerId: number;
    firstName: string;
    lastName: string;
    baseLocation: string;
    rate: number;
    imgUrl: string;
    skillDescription: string;
    hourlyCharge: number;
}

export interface UserModel {
    clientId: number;
    skillId: number;
    orderDate: string;
    startTime: string;
    endTime: string;
}

export interface WorkerModelRes {
    result : {
        Workers: Array<WorkerModel>;
        User: Array<UserModel>;
    };
    status: number;
    message: string;
    
}