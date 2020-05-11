import { Passenger } from '../Passenger/passenger';
import { ScheduledFlight } from '../ScheduledFlight/scheduled-flight';

export class Booking {

    constructor(

        public id: Number,
        public bookingDate: String,
        public passengerList: Array<Passenger> = [],
        public cost: Number,
        public flight: ScheduledFlight,
        public numOfPassenger: Number

    ){}

}
