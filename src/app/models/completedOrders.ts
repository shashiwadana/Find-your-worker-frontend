export interface CompletedOrder {
   OrderDate:string;
   FinalPrice:number;
   Rate:number;
   Review:string;
   FirstName:String;
   LastName:String;
   BaseLocation:string;
    }

    export interface CompletedOrderResponse {
        status: number;
        result: Array<Array<CompletedOrder>>;
        message: string;
    }
   
