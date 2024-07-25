export class Duration {
    constructor(public hours: number, public minutes: number, public seconds: number) { }

    toSeconds() {
        return this.seconds + 60 * this.minutes + 3600 * this.hours;
    }


    static fromSeconds(seconds: number): Duration {
        const d: Duration = new Duration(Math.floor(seconds / 3600), Math.floor((seconds % 3600) / 60), Math.floor((seconds % 3600) % 60));

        return d;
    }
}