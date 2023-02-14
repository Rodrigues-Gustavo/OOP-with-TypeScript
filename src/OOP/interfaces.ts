interface Location {
    latitude: number,
    longitude: number,
    numLocation: number,
}

const getLocation = (location: Location): string => {
    return `${location.latitude} / ${location.longitude}`
}

// const Location = {
//     latitude: 12345,
//     longitude: 56780
// }
// getLocation(Location)

// const location: Location = {
//     latitude: 12345,
//     longitude: 56780,
//     numLocation: 123 
// }
// getLocation(location)

class LocationMap implements Location {
    latitude: number;
    longitude: number;
    numLocation: number = 0;

    constructor(latitude: number, longitude: number,) {
        this.latitude = latitude
        this.longitude = longitude
    }

    getLocation(): string {
        return 'any'
    }
}

getLocation(new LocationMap(12345, 67890))

export {}