import { Airport } from '../Airport/airport';
import { Flight } from '../Flight/flight';

export class ScheduledFlight {

    constructor(
        public id: Number,
        public flight: Flight,
        public price: Number,
        public availableSeats: Number,
        public stops: Array<Airport> = [],
        public source: Airport,
        public destination: Airport,
        public arrivalTime: Date,
        public departureTime: Date
    ){}

}