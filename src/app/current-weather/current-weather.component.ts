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
      city: '',
      country: '',
      image: '',
      date: new Date(),
      description: '',
      temperature: 0
    };
   }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather('Austin', 'US').subscribe(data => this.current = data);
  }

}
