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
   

export interface CancelledOrder {
   OrderDate:string;
   FinalPrice:number;
   Rate:number;
   Review:string;
   FirstName:String;
   LastName:String;
   BaseLocation:string;
   StartTime:string;
   EndTime:string;
   

    }

    export interface CancelledOrderResponse {
        status: number;
        result: Array<Array<CancelledOrder>>;
        message: string;
    }
   
    export interface AcceptedOrder {
        OrderDate:string;
        FinalPrice:number;
        Rate:number;
        Review:string;
        FirstName:String;
        LastName:String;
        BaseLocation:string;
        StartTime:string;
        EndTime:string;
        
     
         }
     
         export interface AcceptedOrderResponse {
             status: number;
             result: Array<Array<AcceptedOrder>>;
             message: string;
         }
        