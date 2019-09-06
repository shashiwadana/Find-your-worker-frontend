export interface ClientRequestModel {
    RequestId: number;
    WorkerId: number;
    CreatedDate: any;
    ClientId: number;
    StartTime: string;
    ExpectedEndTime: string;
    OrderDate: string;
    OrderLocation: string;
    SkillId: number;
    SkillTitle: string;
}

export interface ClientRequestResponseModel {
    status: number;
    result: Array<Array<ClientRequestModel>>;
    message: string;
}