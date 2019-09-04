export interface WorkerLocationRealTime {
    WorkerId: number;
    FirstName: string;
    Rate: number;
    HourlyCharge: number;
    Latitude: string;
    Longitude: string;
}

export interface  WorkerLocationRealTimeArray {
    recordset: Array<WorkerLocationRealTime>;
}

export interface LocationPoint {
    latitude: string;
    longitude: string;
}