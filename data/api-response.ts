export interface APIResponse {
    MRData: MRData;
}

export interface MRData {
    xmlns:     string;
    series:    string;
    url:       string;
    limit:     string;
    offset:    string;
    total:     string;
    RaceTable?: RaceTable;
    SeasonTable?: SeasonTable;
    DriverTable?: DriverTable;
}

export interface SeasonTable {
    Seasons: Season[];
}

export interface Season {
    season: string;
    url:    string;
}

export interface RaceTable {
    season:   string;
    Races?:   Race[];
    Drivers?: Driver[];
}

export interface Race {
    season:   string;
    round:    string;
    url:      string;
    raceName: string;
    Circuit:  Circuit;
    date:     Date;
    time:     string;
    driverName : String;
    lapName: String;
    lapTime: String;
    Results: RaceResult[];
}

export interface RaceResult {
    Driver: Driver;
    FastestLap: {
        lap: string;
        Time: {
            time: string;
        }
    };
}

export interface Circuit {
    circuitId:   string;
    url:         string;
    circuitName: string;
    Location:    Location;
}

export interface Location {
    lat:      string;
    long:     string;
    locality: string;
    country:  string;
}

export interface DriverTable {
    Drivers: Driver[];
}

export interface Driver {
    driverId:    string;
    url:         string;
    givenName:   string;
    familyName:  string;
    dateOfBirth: Date;
    nationality: string;
}
