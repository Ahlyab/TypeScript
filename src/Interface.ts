interface Calender {
    name : string;
    addEvent() : void;
    removeEvent() : void;
}

interface CloudCalender extends Calender {
    sync() : void;
}

class GoogleCalender implements CloudCalender{
    sync(): void {
        throw new Error("Method not implemented.");
    }
    
    constructor(public name: string) {}
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
}