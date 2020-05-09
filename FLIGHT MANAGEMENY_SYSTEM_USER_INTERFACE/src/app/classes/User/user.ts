import { Booking } from '../Booking/booking';

export class User {
    
    constructor(

        public id: Number,
        public name: String,
        public pass: String,
        public phone: String,
        public eMail: String,
        public bookingList: Array<Booking> = []

    ){}

}
