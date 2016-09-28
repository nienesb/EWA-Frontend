import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'CountryPipe' })
export class CountryPipe implements PipeTransform {
    transform(input: any[], args?: any) {
        let filterCountryId = args;

        return input.filter(country => {
            if(filterCountryId === country.countrycode) {
                return country.name;
            }
        });
    }
}
