export interface OngoingRequestModel {
                OrderId: number,
                ContactNumber: number,
                SkillTitle: string,
                OrderDate: string,
                StartTime: string,
                ExpectedStartTime: string,
                ExpectedEndTime: string,
                ExpectedPrice: number,
                OrderLoaction: string,
                FirstName: string,
                LastName: string,
                Duration: string,
                HourlyCharge: number
     }


     export interface OngoingRequestModelResponse {
        status: number;
        result: Array<Array<OngoingRequestModel>>;
        message: string;
    }

    export interface UpcomingRequestModel {
        OrderId: number,
        ContactNumber: number,
        SkillTitle: string,
        OrderDate: string,
        ExpectedStartTime: string,
        ExpectedEndTime: string,
        ExpectedPrice: number,
        OrderLoaction: string,
        FirstName: string,
        LastName: string,
        Duration: string,
        HourlyCharge: number
}


export interface UpcomingRequestModelResponse {
status: number;
result: Array<Array<UpcomingRequestModel>>;
message: string;
}
   

    export interface CompletedRequestModel {
        OrderId: number,
        ContactNumber: number,
        SkillTitle: string,
        OrderDate: string,
        StartTime: string,
        ExpectedStartTime: string,
        ExpectedEndTime: string,
        ExpectedPrice: number,
        OrderLoaction: string,
        FirstName: string,
        LastName: string,
        Duration: string,
        HourlyCharge: number,
        FinalPrice:number,
        Rate:number;
        Review:string,
        
}


export interface CompletedRequestModelResponse {
status: number;
result: Array<Array<CompletedRequestModel>>;
message: string;
}