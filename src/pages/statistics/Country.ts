export interface Country {
  Country: string;
  Slug: string;
  ISO2: string;
}

export interface CountryData {
  countries: Country[];
}
// export interface CountryInfo {
//   Country: string;
//   CountryCode: string;
//   Lat: string;
//   Lon: string;
//   Cases: string;
//   Status: string;
//   Date: Date;
// }
export interface CountryInfo {
  Active: number;
  City: string;
  CityCode: string;
  Confirmed: number;
  Country: string;
  CountryCode: string;
  Date: Date;
  Deaths: number;
  Lat: string;
  Lon: string;
  Province: string;
  Recovered: number;
}
