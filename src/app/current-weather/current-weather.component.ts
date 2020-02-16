import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor(private weatherService: WeatherService) { 
    this.current = {
      city: 'Shoreline',
      country: 'US',
      date: 1485789600,
      temperature: 40,
      description: 'sunny',
      image: ''
    } as ICurrentWeather
  }

  ngOnInit() {
    this.weatherService.getCurrentWeather('Shoreline', 'US').subscribe(data => this.current = data)
  }

}
