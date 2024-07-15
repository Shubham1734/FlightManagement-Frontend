export interface Flight {
    price: number;
    flightId: number,
    origin: string,
    destination : string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    departureTime : any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    arrivalTime:any,
    capacity : number,
    bookedSeats: number; 
}