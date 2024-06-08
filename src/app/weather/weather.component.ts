import { Component } from '@angular/core';
import { WeatherService } from "../services/weather.service";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.weatherService.getWeather("https://api.openweathermap.org/data/2.5/weather?q=Bhaktapur&appid=29a3e1374d13aac7e927cc40513d7719&units=metric").subscribe(
      {
        next: (res) => {
          console.log(res);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log("Completed");
        }
      }
    )

  }
}

