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
  myWeather: any
  temperature: number = 0;
  feels: number = 0;
  pressure: number = 0;
  humidity: number = 0;
  day: string = "";
  location: string = "";
  iconUrl: string = "";
  icon: string = "";

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.weatherService.getWeather("https://api.openweathermap.org/data/2.5/weather?q=Bhaktapur&appid=29a3e1374d13aac7e927cc40513d7719&units=metric").subscribe(
      {
        next: (res) => {
          console.log(res);
          this.myWeather = res;
          console.log(this.myWeather);
          this.day = this.myWeather.weather[0].main
          this.temperature = this.myWeather.main.temp;
          this.feels = this.myWeather.main.feels_like;
          this.pressure = this.myWeather.main.pressure;
          this.humidity = this.myWeather.main.humidity;
          this.location = this.myWeather.name;
          this.icon = this.myWeather.weather[0].icon;
          this.iconUrl = "https://openweathermap.org/img/wn/" + this.icon + "@2x.png";
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

