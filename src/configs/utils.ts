
export interface IGeoPosition {
    longitude: number;
    latitude: number;
    accuracy: number;
}

const UtilityHelper = {
    functions: {
        geolocate: (): Promise<IGeoPosition> => {

            let location: IGeoPosition = { longitude: 0, latitude: 0, accuracy: 0 };
            let promise: Promise<IGeoPosition> = new Promise((resolve, reject) => {
                if ('geolocation' in navigator) {
                    navigator.geolocation.getCurrentPosition(async (position) => {
                        location.longitude = position.coords.longitude;
                        location.latitude = position.coords.latitude;
                        location.accuracy = position.coords.accuracy

                        console.log('Location from appsettings >> ', JSON.stringify(location))
                        resolve(location)
                    }, function error(error) {
                        console.log(`geolocation error: ${error}`)
                        location.latitude = location.longitude = location.accuracy = -1;
                        resolve(location)
                    })
                } else {
                    console.warn('Geolocation turned off!');
                    resolve(location);
                }
            })

            return promise;
        }
    }
}

export default UtilityHelper;