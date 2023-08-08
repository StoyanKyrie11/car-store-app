import { carImageGeneratorKey, carImageURL, manufacturers, radpiApiKey, rapidApiHostName } from "@constants"
import { CarProps, FilterProps } from "@types"

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;

    try {
        const headers = {
            'X-RapidAPI-Key': radpiApiKey,
            'X-RapidAPI-Host': rapidApiHostName
        }

        const response = await fetch(
            `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
            {
                headers: headers,
            }
        );

        const result = await response.json()
        return result
    } catch (error) {
        console.log(error)
    }


}

export function calculateCarRent(city_mpg: number, year: number) {
    /* Base rental price per day in dollars */
    const basePricePerDay = 50
    /* Additional rate per mile driven */
    const mileageFactor = 0.1
    /* Additional rate per year of vehicle age */
    const ageFactor = 0.05

    /* Calculate additional rate based on mileage and age */
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    /* Calculate total rental rate per day */
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}

export const generateCarImgUrl = (car: CarProps, angle?: string) => {
    /* Store the key from the ImaginCar API */
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;

    url.searchParams.append('customer', carImageGeneratorKey || "");
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Set the 'model' search parameter based on the 'model' value
    searchParams.set(type, value);

    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname
}