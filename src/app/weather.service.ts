import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentWeatherData } from './icurrent-weather-data';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city: string, country: string){
    return this.httpClient.get<ICurrentWeatherData>(
      `${environment.BaseUrl}api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appId}`
    )
  }
}
