import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export class Flight {
    constructor(
        public number: Number,
        public name: String,
        public model: String,
        public capacity: Number
    ){}
}
