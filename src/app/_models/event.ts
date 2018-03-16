export class Event{
    id: number;
    title: string;
    sportType: SportType;
    location: string;
    date: Date;
    skillLevel: SkillLevel;
    maxAttendees: number;
    description: string;
    playType: PlayType;
}

export enum SportType{
    FOOTBALL = 'Football',
    CLIMBING = 'Climbing',
    GOLF = 'Golf',
    FISHING = 'Fishing',
    BASKETBALL = 'Basketball',
    BADMINTON = 'Badminton',
    CHESS = 'Chess',
    ICEHOCKEY = 'Icehockey',
    TENNIS = 'Tennis'
}

enum SkillLevel{
    beginner,
    average,
    advanced,
    pro
}

enum PlayType{
    Casual,
    Competetive
}
